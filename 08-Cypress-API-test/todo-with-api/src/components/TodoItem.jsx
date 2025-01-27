import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => (
  <li data-testid="todo-item" className={todo.completed ? 'completed' : ''}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span>{todo.title}</span>
    <button onClick={() => onDelete(todo.id)} data-testid="delete-todo">
      Delete
    </button>
  </li>
);

export default TodoItem;
