import React from 'react';
import { useTodos } from './TodoContext';
import moment from 'moment';
import { FaClock, FaCalendarAlt, FaTag, FaCheck, FaTimes } from 'react-icons/fa';


const TodoList = () => {
  const { tasks, toggleTaskCompletion, deleteTask } = useTodos();

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
          <div>
            <h3>{task.title}</h3>
            <p><FaCalendarAlt className="due" /> {moment(task.dueDate).format('MMM Do, YYYY')}</p>
            <p><FaClock className="created" /> {moment(task.createdAt).format('MMM Do, YYYY')}</p>
            <p><FaTag className="category" /> {task.category || 'Uncategorized'}</p>
          </div>
          <div className="actions">
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Undo" : "Done"} <FaCheck className="check" />
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete <FaTimes className="delete" /></button>
          </div>
        </li>
      ))}
    </ul>
  );
};


export default TodoList;
