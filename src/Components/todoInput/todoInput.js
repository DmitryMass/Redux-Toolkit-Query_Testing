import React, { useState } from 'react';
import { useAddNewTodoMutation } from '../../Store/Slice/apiSlice';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const [addNewTodo] = useAddNewTodoMutation();

  const handleAddNewTodo = async (e) => {
    e.preventDefault();
    if (value && value.trim()) {
      await addNewTodo({ title: value, completed: false });
    }
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Write new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoInput;
