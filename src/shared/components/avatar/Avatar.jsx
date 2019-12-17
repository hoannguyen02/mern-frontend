import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

const Avatar = props => {
  const { image, className, alt, style, width, height } = props;

  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={image}
        alt={alt}
        style={{
          width,
          height
        }}
      />
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Avatar;
