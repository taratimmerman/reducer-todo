import React from 'react';

const Task = ({task, completeTask}) => {
    return (
        <div onClick={() => completeTask(task.id)} className={`todo-row ${task.completed ? ' completed' : ''}`}>
            <p>{task.task}</p>
        </div>
    )
}

export default Task