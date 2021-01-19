import React from 'react';
import Task from './todoTask';


const TodoList = ({finishTask, todoList}) => {
    return (
        <div>
           {todoList.map(task => <Task key={task.id} task={task} completeTask={finishTask}/>)} 
        </div>
    )
}

export default TodoList