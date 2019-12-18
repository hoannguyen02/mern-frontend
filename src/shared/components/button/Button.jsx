import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const {
    href,
    size,
    inverse,
    danger,
    type,
    children,
    to,
    exact,
    onClick,
    disabled
  } = props;
  if (href) {
    return (
      <a
        className={`button button--${size || 'default'} ${inverse &&
          'button--inverse'} ${danger && 'button--danger'}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`button button--${size || 'default'} ${inverse &&
          'button--inverse'} ${danger && 'button--danger'}`}
      >
        {children}
      </Link>
    );
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      // eslint-disable-next-line operator-linebreak
      className={`button button--${size || 'default'} ${inverse &&
        'button--inverse'} ${danger && 'button--danger'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.number,
  inverse: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.any,
  to: PropTypes.string,
  exact: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  href: '',
  size: null,
  inverse: false,
  danger: false,
  children: null,
  to: '',
  exact: false,
  onClick: () => {},
  disabled: false
};

export default Button;
