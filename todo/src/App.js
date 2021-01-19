import React, { useReducer } from 'react';
import reducer from './reducers/todoReducer';
import './App.css';
import { addTask, markDone, clearDone } from './actions/todoActions';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

export const initialState = [];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTask = (task) => {
    dispatch(addTask(task))
  }

  const finishTask = (taskId) => {
    dispatch(markDone(taskId))
  }

  const clearCompleted = () => {
    dispatch(clearDone())
  }

  return (
    <div className="todo-app">
      <h1>What's the plan today?</h1>
      <TodoForm setTask={setTask} clearCompleted={clearCompleted} />
      <TodoList finishTask={finishTask} todoList={state} />
    </div>
  );
}

export default App;
