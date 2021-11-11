import React from 'react';
import noop from '../entities/constants';

export const TaskContext = React.createContext({
  taskData: [],
  edit: null,
  value: '',
  isModal: false,
  setEdit: noop,
  setValue: noop,
  setIsModal: noop,
  changeTaskData: noop,
});

export const ChangeTodoContext = React.createContext();
