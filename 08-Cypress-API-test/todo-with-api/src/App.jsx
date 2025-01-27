import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(null);

  // Fetch todos from the API
  useEffect(() => {
    fetchTodos()
      .then((data) => setTodos(data))
      .catch((err) => setError('Failed to load todos.'));
  }, []);

  // Add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo({ title: newTodo, completed: false })
        .then((todo) => {
          setTodos([...todos, todo]);
          setNewTodo('');
        })
        .catch(() => setError('Failed to add todo.'));
    }
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    deleteTodo(id)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch(() => setError('Failed to delete todo.'));
  };

  // Toggle todo completion
  const handleToggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    updateTodo(id, { ...todo, completed: !todo.completed })
      .then((updatedTodo) => {
        setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
      })
      .catch(() => setError('Failed to update todo.'));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="add-todo">
        <input
          type="text"
          data-testid="new-todo"
          value={newTodo}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo();              
            }
          }}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo} data-testid="add-todo">
          Add
        </button>
      </div>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};

export default App;
