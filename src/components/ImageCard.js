import React from 'react';

// create one image by itself
// React Refs, gives direct access to DOM element 
// create refs in constructor, assign them to instance variables
// pass to JSX element as props

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount(){
// create event listner, and a callback this.setSpan
// callback must be found or it will be undefine, use arrow function in setSpans 
// console.log(this.imageRef);
// console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load',  this.setSpans);
    }

    setSpans = () =>  {
        console.log(this.imageRef.current.clientHeight)
    }

    render(){
        const { description, urls } = this.props.image;

        return(
          <div>
              <img ref={this.imageRef} alt={description} src={urls.regular} />
          </div>  
        );
    }
}

export default ImageCard;