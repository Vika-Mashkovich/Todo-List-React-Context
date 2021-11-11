import React, { useContext } from 'react';
import './Todo.scss';
import TodoItem from './TodoItem/TodoItem';
import { TaskContext, ChangeTodoContext } from '../../core/contexts';

const Todo = () => {
  const { taskData, value, setEdit, setValue, changeTaskData } = useContext(TaskContext);

  const handleOnDelete = (id) => {
    const newTaskData = taskData.filter((item) => (item.id !== id));

    changeTaskData(newTaskData);
  };

  const handleOnChangeStatus = (id, status) => {
    const newTaskData = taskData.map((item) => {
      if (item.id === id) {
        return { ...item, status: !status };
      }

      return item;
    });

    changeTaskData(newTaskData);
  };

  const handleOnEdit = (id, lable) => {
    setEdit(id);
    setValue(lable);
  };

  const handleOnChange = (newValue) => (setValue(newValue));

  const handleOnSave = (id) => {
    const newTaskData = taskData.map((item) => {
      if (item.id === id) {
        return { ...item, lable: value };
      }

      return item;
    });

    changeTaskData(newTaskData);
    setEdit(null);
  };

  const listItems = taskData.map((item, index) => (
    <TodoItem
      key={item.id}
      id={item.id}
      number={index + 1}
      lable={item.lable}
      status={item.status}
    />
  ));

  return (
    <ChangeTodoContext.Provider value={{ handleOnDelete, handleOnChangeStatus, handleOnEdit, handleOnChange, handleOnSave }}>
      <>
        <div className='Todo'>
          <ul className='Todo-list'>
            <li className='Todo-header'>
              <span>№</span>
              <span>Task Name</span>
              <span>Status</span>
              <span>Edit</span>
              <span>Remove</span>
            </li>
            {listItems}
          </ul>
        </div>
      </>
    </ChangeTodoContext.Provider>
  );
};

export default Todo;
