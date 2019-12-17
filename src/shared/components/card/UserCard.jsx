import React from 'react';
import PropTypes from 'prop-types';

import './UserCard.css';

const UserCard = props => {
  const { className, style, children } = props;
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

UserCard.propTypes = {
  style: PropTypes.object,
  children: PropTypes.object,
  className: PropTypes.string
};

UserCard.defaultProps = {
  className: '',
  style: {},
  children: {}
};

export default UserCard;
