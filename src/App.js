import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== null) {
        // Ako je u režimu uređivanja, ažuriramo postojeći zadatak
        const updatedTasks = tasks.map((t, index) => (index === editIndex ? task : t));
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        // Dodajemo novi zadatak
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Dodajte novi zadatak"
      />
      <button onClick={handleAddTask}>{editIndex !== null ? 'Sačuvaj' : 'Dodaj'}</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Izmeni</button>
            <button onClick={() => handleDeleteTask(index)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;