import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import noop from '../../../entities/constants';

const TodoStatus = ({ status, onStatus }) => (
  <Button className={status ? 'complete' : 'todo'} onClick={onStatus}>
    {status ? 'Complete' : 'To do'}
  </Button>
);

TodoStatus.propTypes = { status: PropTypes.bool, onStatus: PropTypes.func };
TodoStatus.defaultProps = { status: false, onStatus: noop };

export default TodoStatus;
