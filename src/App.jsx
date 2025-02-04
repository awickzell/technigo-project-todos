import React from 'react';
import { useTodos } from './TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { FaMoon, FaSun, } from 'react-icons/fa';


const App = () => {
  const { darkMode, toggleDarkMode } = useTodos();

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>Do it!</h1>
        <button onClick={toggleDarkMode} className="toggle-mode">
  {darkMode ? (
    <>
      Light Mode <FaSun className="sun" />
    </>
  ) : (
    <>
      Dark Mode <FaMoon className="moon" />
    </>
  )}
</button>
      </header>
      <main>
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
};

export default App;
