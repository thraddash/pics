import React from 'react';

// create one image by itself
// React Refs, gives direct access to DOM element 
// create refs in constructor, assign them to instance variables
// pass to JSX element as props

class ImageCard extends React.Component {
    constructor(props){
        super(props);

// define spans as zero space until image loads
        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
// create event listner, and a callback this.setSpan
// callback must be found or it will be undefine, use arrow function in setSpans
// automatically bind the function to make sure it always have the property of "this" inside of it
// console.log(this.imageRef);
// console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',  this.setSpans);
    }

    // get height of each image after it is loaded into the browser
    // use height to figure out spans of each image should occupy
    setSpans = () =>  {
    //    console.log(this.imageRef.current.clientHeight)
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
    }

    render(){
        const { description, urls } = this.props.image;

        return(
          <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
              <img ref={this.imageRef} alt={description} src={urls.regular} />
          </div>  
        );
    }
}

export default ImageCard;

/* 
Review
SearchBar
eventhandler, input tag, form tag, use callback function {this.onFormSubmit}
to a specifically named prop onSubmit, so when the element or form emits the event
the callback function will be called
issue that may run into is value of "this" maybe undefine
use arrow function syntax, automatically binds the func to make sure the value of "this" is inside the func

with props system, only can communicate from parent to child
from child to parent
create callback function in parent component. this.props.onSubmit(this.state.term)
This callback function will get data from the child component
pass the callback function in the parent as a prop to the child component
child component calls the parent callback function using props

map function for ImageList.js, add id to key property for each image 
<ImageCard key={image.id}

ImageCard.js
interact with DOM element to make reference to JSX element <img , create a Ref inside a constructor
this.imageRef = React.createRef();
wire it up to an individual element by passing it as a ref property
<img ref={this.imageRef}
*/
