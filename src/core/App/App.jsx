import React, { useEffect, useState } from 'react';
import './App.scss';
import Todo from '../../components/Todo/Todo';
import Button from '../../components/Button/Button';
import TaskApi from '../../api/tasksApi/provider';
import Portal from '../../components/Portal/Portal';
import Modal from '../../components/Modal/Modal';

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    TaskApi.getTask()
      .then(setTaskData);
  }, []);

  const handlerOnDelete = (id) => {
    const newTaskData = taskData.filter((item) => (item.id !== id));

    setTaskData(newTaskData);
  };

  const handlerOnStatus = (id, status) => {
    const newTaskData = taskData.map((item) => {
      if (item.id === id) {
        return { ...item, status: !status };
      }

      return item;
    });

    setTaskData(newTaskData);
  };

  const handlerOnEdit = (id, lable) => {
    setEdit(id);
    setValue(lable);
  };

  const handlerOnChange = (newValue) => (setValue(newValue));

  const handlerOnSave = (id) => {
    const newTaskData = taskData.map((item) => {
      if (item.id === id) {
        return { ...item, lable: value };
      }

      return item;
    });

    setTaskData(newTaskData);
    setEdit(null);
  };

  const handlerOpenModal = () => setIsModal(true);

  const handlerOnCloseModal = () => setIsModal(false);

  const handlerOnSaveModal = () => {
    const arrayId = taskData.map((item) => item.id);
    const idNewTask = Math.max(...arrayId) + 1;

    taskData.push({
      id: idNewTask,
      lable: value,
      status: false,
    });

    setIsModal(false);
  };

  return (
    <div className='App'>
      <div id='portal' />
      {
        isModal
        && (
          <Portal>
            <Modal onCloseModal={handlerOnCloseModal}>
              <>
                <div className='modal__title'>Task:</div>
                <textarea onChange={(e) => setValue(e.target.value)} className='modal__field' />
                <div className='modal__button'>
                  <Button className='modal-save' onClick={() => handlerOnSaveModal()}>Save</Button>
                  <Button className='modal-close' onClick={handlerOnCloseModal}>Cancel</Button>
                </div>
              </>
            </Modal>
          </Portal>
        )
      }
      <header className='App-header'>
        <h1 className='header-lable'>TODO List Demo App</h1>
        <span className='header-text'>Do it now.</span>
      </header>
      <main className='App-main'>
        <div className='main-button'>
          <Button className='add-task' onClick={() => handlerOpenModal()}>Add Task</Button>
        </div>
        <Todo
          taskData={taskData}
          onStatus={handlerOnStatus}
          onDelete={handlerOnDelete}
          onEdit={handlerOnEdit}
          onChange={handlerOnChange}
          onSave={handlerOnSave}
          edit={edit}
          value={value}
        />
      </main>
    </div>
  );
};

export default App;
