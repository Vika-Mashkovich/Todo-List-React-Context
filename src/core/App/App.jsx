import React, { useContext, useEffect } from 'react';
import './App.scss';
import Todo from '../../components/Todo/Todo';
import Button from '../../components/Button/Button';
import TaskApi from '../../api/tasksApi/provider';
import Modal from '../../components/Modal/Modal';
import { TaskContext } from '../contexts';

const App = () => {
  const { taskData, value, isModal, setValue, setIsModal, changeTaskData } = useContext(TaskContext);

  useEffect(() => {
    TaskApi.getTask()
      .then(changeTaskData);
  }, []);

  const handleOpenModal = () => setIsModal(true);

  const handleOnCloseModal = () => setIsModal(false);

  const handleOnSaveModal = () => {
    const arrayId = taskData.map((item) => item.id);
    const idNewTask = Math.max(...arrayId) + 1;

    const newTask = {
      id: idNewTask,
      lable: value,
      status: false,
    };

    changeTaskData((prev) => [newTask, ...prev]);
    setIsModal(false);
  };

  return (
    <div className='App'>
      <div id='portal' />
      {
        isModal
        && (
          <Modal onCloseModal={handleOnCloseModal}>
            <>
              <div className='modal__title'>Task:</div>
              <textarea onChange={(e) => setValue(e.target.value)} className='modal__field' />
              <div className='modal__button'>
                <Button className='modal-save' onClick={() => handleOnSaveModal()}>Save</Button>
                <Button className='modal-close' onClick={handleOnCloseModal}>Cancel</Button>
              </div>
            </>
          </Modal>
        )
      }
      <header className='App-header'>
        <h1 className='header-lable'>TODO List</h1>
        <span className='header-text'>Do it now.</span>
      </header>
      <main className='App-main'>
        <div className='main-button'>
          <Button className='add-task' onClick={() => handleOpenModal()}>Add Task</Button>
        </div>
        <Todo />
      </main>
    </div>
  );
};

export default App;
