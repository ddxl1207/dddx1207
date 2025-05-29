import { Todo } from '../types/Todo';

const TODOS_KEY = 'todos';

export const loadTodos = (): Todo[] => {
  try {
    const todosJson = localStorage.getItem(TODOS_KEY);
    if (!todosJson) return [];
    
    const todos = JSON.parse(todosJson);
    // Convert date strings back to Date objects
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
      updatedAt: new Date(todo.updatedAt),
    }));
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};