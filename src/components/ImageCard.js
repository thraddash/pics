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
// console.log(this.imageRef);
// console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',  this.setSpans);
    }

    // get height of each image after it is loaded into the browser
    // use height to figure out spans of each image should occupy
    setSpans = () =>  {
    //    console.log(this.imageRef.current.clientHeight)
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 150);

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