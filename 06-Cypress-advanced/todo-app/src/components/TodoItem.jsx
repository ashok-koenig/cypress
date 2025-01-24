import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(false);
    editTodo(todo.id, newTitle);
  };

  return (
    <li data-testid="todo-item" className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <input
          data-testid="todo-input"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span data-testid="todo-item-title">{todo.title}</span>
          <button
            data-testid="edit"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            data-testid="delete"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
