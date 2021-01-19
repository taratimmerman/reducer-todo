import React, { useState } from 'react'

export const TodoForm = ({setTask, clearCompleted}) => {
    const [newTask, setNewTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTask(newTask)
        setNewTask('')
    }

    const handleChanges = (e) => {
       setNewTask(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='todo-form'>
            <input 
                value={newTask}
                onChange={handleChanges}
                type="text" 
                name="task"
                className='todo-input'
            />
            <button className='todo-button'>Add Task</button>
            <button className='clr-button' onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm