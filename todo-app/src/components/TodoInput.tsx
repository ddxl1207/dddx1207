import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
  placeholder?: string;
}

export const TodoInput: React.FC<TodoInputProps> = ({ 
  onAddTodo, 
  placeholder = "What needs to be done?" 
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="todo-input"
        autoFocus
      />
    </form>
  );
};