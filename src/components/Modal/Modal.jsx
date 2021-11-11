import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import noop from '../../entities/constants';

const Modal = ({ children, onCloseModal }) => (
  <Portal>
    <div className='modal'>
      <div className='modal__wrapper'>
        <div className='modal__header'>
          <Button className='modal__header-close' onClick={onCloseModal}><Icon type='close' /></Button>
        </div>
        {children}
      </div>
    </div>
  </Portal>
);

Modal.propTypes = { children: PropTypes.node, onCloseModal: PropTypes.func };

Modal.defaultProps = { children: '', onCloseModal: noop };
export default Modal;
