/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ModalOverlay from './ModalOverlay';
import './Modal.css';

import Backdrop from '../backdrop';

const Modal = props => {
  const { show, onCancel } = props;
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onCancel: PropTypes.func
};

Modal.defaultProps = {
  show: false,
  onCancel: () => {}
};

export default Modal;
