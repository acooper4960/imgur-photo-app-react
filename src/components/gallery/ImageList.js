import React, {PropTypes} from 'react';
import ImgurImage from './ImgurImage';

const ImageList = ({images = []}) => {
  if (!images || images.length === 0) return null;

  return (<div className="gallery-container">
      {images.map( image =>{
          return (<ImgurImage image={image}
                        key={image.id}
          />)
        })}
    </div>);
}

export default ImageList;
