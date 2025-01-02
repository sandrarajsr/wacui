import React, { useState } from 'react';
import Assets from '../../assets/assets';


const ImageComponent = ({ src = Assets.logo, fallbackSrc = Assets.noImage, alt = 'Image', ...rest }) => {
  const [fallback, setFallback] = useState(false);

  return (
    <img
      src={fallback ? fallbackSrc : src}
      alt={alt}
      onError={() => setFallback(true)}
      loading="lazy"
      {...rest}
    />
  );
};

export default ImageComponent;
