import React, {useState, useEffect} from 'react';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';
import uuid from 'uuid/dist/v1';

function App() {
  const emptyTask = {currentTask:'', taskId:''};
  const taskStored = localStorage.getItem('tasks');
  const initialTasksList = taskStored ? JSON.parse(taskStored) : [];

  const [task, setTask] = useState(emptyTask);
  const [tasksList, setTasksList] = useState(initialTasksList);
  const [taskTobeEdited, setTaskTobeEdited] = useState(emptyTask);

  const createTask = (value) =>{
    setTask({
      currentTask: value
    })
  }

  const updateTaskList = (e) =>{
    e.preventDefault();
    if (taskTobeEdited.taskId === ''){
      setTasksList([...tasksList, {currentTask: task.currentTask, taskId: uuid()}]);
    } else {
      setTasksList(tasksList.map((oriTask)=>{
        return taskTobeEdited.taskId !== oriTask.taskId ? (oriTask) : ({...taskTobeEdited, ...task})
      }));
      setTaskTobeEdited(emptyTask);
    }
    setTask(emptyTask);
  }

  const deleteTask = (id) =>{
    setTasksList(tasksList.filter((task)=> task.taskId !== id));
  }

  const editTask = (id) =>{
    setTaskTobeEdited(tasksList.find((task)=> task.taskId === id));
  }
  useEffect(()=>{
    setTask(taskTobeEdited);
  },[taskTobeEdited]);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasksList))
  },[tasksList]);
  
  return (
    <div className="App">
      <header>
        <h1 className='heading'>My ToDo List</h1>
        <TaskAdder task={task} createTask={createTask} updateTaskList={updateTaskList} 
        taskTobeEdited={taskTobeEdited} />
      </header>
      <section className='taskLists'>
        <TaskList tasksList={tasksList} taskTobeEdited={taskTobeEdited} deleteTask={deleteTask} editTask={editTask} />
      </section>
    </div>
  );
}

export default App;
