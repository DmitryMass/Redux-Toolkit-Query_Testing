import React from 'react';
import TodoInput from './todoInput/todoInput';
import TodoList from './todoList/todoList';

const App = () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
