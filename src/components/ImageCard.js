import React from 'react';

// create one image by itself
class ImageCard extends React.Component {
    render(){
        const { description, urls } = this.props.image;
        return(
          <div>
              <img alt={description} src={urls.regular} />
          </div>  
        );
    }
}

export default ImageCard;