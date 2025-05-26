import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ maxWidth: 400, margin: '30px auto', textAlign: 'center' }}>
      <h2>React To-Do App</h2>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: '8px', width: '60%' }}
      />
      <button onClick={addTask} style={{ padding: '8px 12px', marginLeft: '5px' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: 10 }}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: 10,
              }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: 5 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
