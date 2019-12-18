import React from 'react';
import PropTypes from 'prop-types';
import './MainHeader.css';

const MainHeader = props => {
  const { children } = props;
  return <header className="main-header">{children}</header>;
};

MainHeader.propTypes = {
  children: PropTypes.any
};

MainHeader.defaultProps = {
  children: null
};

export default MainHeader;
