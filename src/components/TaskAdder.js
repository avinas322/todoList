import React from 'react';

const TaskAdder = ({task, taskTobeEdited, createTask, updateTaskList}) =>{
    return(
        <form className='taskAdder' onSubmit={(e)=>updateTaskList(e)}>
            <input type='text' placeholder='Enter a Task' value={task.currentTask} required
            onChange={(e)=>createTask(e.target.value)} />
            <input type='submit' value={taskTobeEdited.taskId === ''? 'Add Task':'Edit Task'} />
        </form>
    )
}

export default TaskAdder;