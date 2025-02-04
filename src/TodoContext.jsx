import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (title, dueDate, category) => {
    setTasks([...tasks, { id: Date.now(), title, dueDate, category, createdAt: new Date(), completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <TodoContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask, darkMode, toggleDarkMode }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
