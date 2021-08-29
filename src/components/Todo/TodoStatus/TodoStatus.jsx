import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const TodoStatus = ({ status, onStatus }) => (
  <Button className={status ? 'complete' : 'todo'} onClick={onStatus}>
    {status ? 'Complete' : 'To do'}
  </Button>
);

TodoStatus.propTypes = { status: PropTypes.bool, onStatus: PropTypes.func };
TodoStatus.defaultProps = { status: false, onStatus: () => { } };

export default TodoStatus;
