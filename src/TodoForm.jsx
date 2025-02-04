import React, { useState } from 'react';
import { useTodos } from './TodoContext';

const TodoForm = () => {
  const { addTask } = useTodos();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate) {
      addTask(title, dueDate, category);
      setTitle('');
      setDueDate('');
      setCategory('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Category</option>
        <option value="DO IT!">DO IT!</option>
        <option value="Moderate">Moderate</option>
        <option value="Chill">Chill</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
