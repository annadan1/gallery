import React, { useEffect } from 'react';
import routes from '../../routes/routes';

const PreloadImages = ({ imageUrl }) => {
  const img = new Image();
  img.src = routes.imagePath(imageUrl);
  return img;
};

const ImageComponent = ({ painting }) => {
  useEffect(() => {
    PreloadImages(painting);
  });

  const { imageUrl, name } = painting;

  return (
    <img
      src={routes.imagePath(imageUrl)}
      alt={name}
      style={{
        maxHeight: 275,
        maxWidht: 360,
      }}
    />
  );
};

export default ImageComponent;
