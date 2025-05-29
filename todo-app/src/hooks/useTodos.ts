import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import { loadTodos, saveTodos, generateId } from '../utils/localStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = loadTodos();
    setTodos(savedTodos);
    setIsLoaded(true);
  }, []);

  // Save todos to localStorage whenever todos change (but not on initial load)
  useEffect(() => {
    if (isLoaded) {
      saveTodos(todos);
    }
  }, [todos, isLoaded]);

  const addTodo = (text: string) => {
    if (text.trim() === '') return;

    const newTodo: Todo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    if (newText.trim() === '') return;

    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, text: newText.trim(), updatedAt: new Date() }
          : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(prev =>
      prev.map(todo => ({
        ...todo,
        completed: !allCompleted,
        updatedAt: new Date(),
      }))
    );
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
  };
};