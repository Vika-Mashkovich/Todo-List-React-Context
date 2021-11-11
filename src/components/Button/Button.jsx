import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import noop from '../../entities/constants';

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
  onClick: noop,
};

export default Button;
