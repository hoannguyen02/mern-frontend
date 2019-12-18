import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Backdrop.css';

const Backdrop = props => {
  const { onClick } = props;
  const backdrop = (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="backdrop" onClick={onClick} onKeyPress={onClick} />
  );
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById('backdrop-hook')
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Backdrop;
