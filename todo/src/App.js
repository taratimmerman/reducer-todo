import React, { useReducer } from 'react';
import reducer from './reducers/todoReducer';
import './App.css';
import { addTask, markDone, clearDone } from './actions/todoActions';

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
    <div className="App">

    </div>
  );
}

export default App;
