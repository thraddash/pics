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
        console.log(this.imageRef);
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