import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2>React To-Do App</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
