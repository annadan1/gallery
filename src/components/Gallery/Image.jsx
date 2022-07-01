import React, { useEffect, useState } from 'react';
import routes from '../../routes/routes';
import BlurEffect from '../../images/BlurEffect.png';

const ImageComponent = ({ painting }) => {
  const { imageUrl, name } = painting;
  const [currentSrc, setCurrentSrc] = useState({ src: BlurEffect, loading: true });

  useEffect(() => {
    const src = routes.imagePath(imageUrl);
    const img = new Image();
    img.src = src;
    img.onload = () => setCurrentSrc({ src, loading: false });
  });

  return (
    <img
      src={currentSrc.src}
      alt={name}
      style={{
        opacity: currentSrc.loading ? 0.5 : 1,
        transition: 'opacity .15s linear',
      }}
    />
  );
};

export default ImageComponent;
