import React, { useState, useMemo } from 'react';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { TodoFilter as FilterType } from './types/Todo';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
  } = useTodos();

  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <div className="todo-app">
        <header className="app-header">
          <h1>todos</h1>
        </header>
        
        <main className="main">
          <div className="input-section">
            {todos.length > 0 && (
              <button
                className="toggle-all-btn"
                onClick={toggleAll}
                aria-label="Toggle all todos"
              >
                ❯
              </button>
            )}
            <TodoInput onAddTodo={addTodo} />
          </div>
          
          {todos.length > 0 && (
            <>
              <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
              
              <TodoFilter
                currentFilter={filter}
                onFilterChange={setFilter}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
              />
            </>
          )}
        </main>
        
        <footer className="app-footer">
          <p>Double-click to edit a todo</p>
          <p>Created with React and TypeScript</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
