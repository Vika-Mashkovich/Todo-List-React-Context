import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import TodoStatus from '../TodoStatus/TodoStatus';
import { TaskContext, ChangeTodoContext } from '../../../core/contexts';

const TodoItem = ({ id, number, lable, status }) => {
  const { handleOnDelete, handleOnChangeStatus, handleOnEdit, handleOnChange, handleOnSave } = useContext(ChangeTodoContext);
  const { edit, value } = useContext(TaskContext);

  return (
    <li className='list-item'>
      <span>{number}</span>
      {edit === id ? <textarea className='textarea' value={value} onChange={(e) => handleOnChange(e.target.value)} wrap='soft' /> : <span>{lable}</span>}
      {
        edit === id
          ? (
            <>
              <div />
              <Button className='item-button save' onClick={() => handleOnSave(id)}><Icon type='save' /></Button>
            </>
          )
          : (
            <>
              <TodoStatus status={status} onStatus={() => handleOnChangeStatus(id, status)} />
              <Button className='item-button edit' onClick={() => handleOnEdit(id, lable)}>
                <Icon type='edit' />
              </Button>
              <Button className='item-button delete' onClick={() => handleOnDelete(id)}>
                <Icon type='delete' />
              </Button>
            </>
          )
      }
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  number: PropTypes.number,
  lable: PropTypes.string,
  status: PropTypes.bool,
};

TodoItem.defaultProps = {
  id: null,
  number: 1,
  lable: '',
  status: false,
};

export default TodoItem;
