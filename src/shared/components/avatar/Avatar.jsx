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
  image: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string
};

Avatar.defaultProps = {
  image: null,
  className: '',
  alt: '',
  style: {},
  width: '',
  height: ''
};

export default Avatar;
