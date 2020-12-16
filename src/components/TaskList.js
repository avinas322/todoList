import React from 'react';
import {FaTrash} from "react-icons/fa";
import {FiEdit} from "react-icons/fi";

const TaskList = ({tasksList, taskTobeEdited, deleteTask, editTask}) =>{
    return tasksList.length ? (
            <ul>
                {tasksList.map((task)=>{
                    return (taskTobeEdited.taskId === '' ||  taskTobeEdited.taskId === task.taskId) ? (
                        <li key={task.taskId}>
                            {task.currentTask}
                            <button className='editIcon icon' disabled={taskTobeEdited.taskId !== ''} onClick={()=>editTask(task.taskId)}>{<FiEdit />}</button>
                            <button className='deleteIcon icon' disabled={taskTobeEdited.taskId !== ''} onClick={()=>deleteTask(task.taskId)}>{<FaTrash />}</button>
                        </li>
                    ) : (null)
                })}
            </ul>
    ) : (
        <div className='noTasks'>
            <p>There are no tasks</p>
        </div>
    )
}

export default TaskList;