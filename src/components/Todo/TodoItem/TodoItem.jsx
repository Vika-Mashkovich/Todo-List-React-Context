import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import TodoStatus from '../TodoStatus/TodoStatus';

const TodoItem = ({ id, number, lable, status, onDelete, onStatus, onEdit, onChange, onSave, edit, value }) => (
  <>
    <li className='list-item'>
      <span>{number}</span>
      {edit === id ? <textarea className='textarea' value={value} onChange={(e) => onChange(e.target.value)} wrap='soft' /> : <span>{lable}</span>}
      {
        edit === id
          ? (
            <>
              <div />
              <Button className='item-button save' onClick={onSave}><Icon type='save' /></Button>
            </>
          )
          : (
            <>
              <TodoStatus status={status} onStatus={onStatus} />
              <Button className='item-button edit' onClick={onEdit}>
                <Icon type='edit' />
              </Button>
              <Button className='item-button delete' onClick={onDelete}>
                <Icon type='delete' />
              </Button>
            </>
          )
      }
    </li>
  </>
);

TodoItem.propTypes = {
  id: PropTypes.number,
  number: PropTypes.number,
  lable: PropTypes.string,
  status: PropTypes.bool,
  onDelete: PropTypes.func,
  onStatus: PropTypes.func,
  onEdit: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  edit: PropTypes.number,
  value: PropTypes.string,

};
TodoItem.defaultProps = {
  id: null,
  number: 1,
  lable: '',
  status: false,
  onDelete: () => { },
  onStatus: () => { },
  onEdit: () => { },
  onChange: () => { },
  onSave: () => { },
  edit: null,
  value: '',

};

export default TodoItem;
