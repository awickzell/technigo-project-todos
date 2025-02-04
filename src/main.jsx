import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TodoProvider } from './TodoContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
