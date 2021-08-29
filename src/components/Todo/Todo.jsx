import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import TodoItem from './TodoItem/TodoItem';

const Todo = ({ taskData, onDelete, onStatus, onEdit, onChange, onSave, edit, value }) => {
  let listItems = [];

  if (taskData) {
    listItems = taskData.map((item, index) => (
      <TodoItem
        key={item.id.toString()}
        id={item.id}
        number={index + 1}
        lable={item.lable}
        status={item.status}
        onDelete={() => onDelete(item.id)}
        onStatus={() => onStatus(item.id, item.status)}
        onEdit={() => onEdit(item.id, item.lable)}
        onChange={(newValue) => onChange(newValue)}
        onSave={() => onSave(item.id)}
        edit={edit}
        value={value}
      />
    ));
  }

  return (
    <>
      <div className='Todo'>
        <ul className='Todo-list'>
          <li className='Todo-header'>
            <span>#</span>
            <span>Task Name</span>
            <span>Status</span>
            <span>Edit</span>
            <span>Remove</span>
          </li>
          {listItems}
        </ul>
      </div>
    </>
  );
};

Todo.propTypes = {
  taskData: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onStatus: PropTypes.func,
  onEdit: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  edit: PropTypes.number,
  value: PropTypes.string,
};
Todo.defaultProps = {
  taskData: [],
  onDelete: () => { },
  onStatus: () => { },
  onEdit: () => { },
  onChange: () => { },
  onSave: () => { },
  edit: null,
  value: '',
};

export default Todo;
