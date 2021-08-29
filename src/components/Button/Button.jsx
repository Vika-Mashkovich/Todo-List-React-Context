import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>

);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: '',
  className: '',
  onClick: () => { },
};

export default Button;
