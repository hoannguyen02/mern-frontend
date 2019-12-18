/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const { children, onClick, show } = props;
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onKeyPress={onClick} onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

SideDrawer.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  show: PropTypes.bool
};
SideDrawer.defaultProps = {
  show: false,
  onClick: () => {}
};

export default SideDrawer;
