import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../contexts';

function Launcher({ children }) {
  const [taskData, changeTaskData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [isModal, setIsModal] = useState(false);

  return (
    <React.StrictMode>
      <TaskContext.Provider value={{
        taskData,
        edit,
        value,
        isModal,
        changeTaskData,
        setEdit,
        setValue,
        setIsModal,
      }}
      >
        {children}
      </TaskContext.Provider>
    </React.StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
