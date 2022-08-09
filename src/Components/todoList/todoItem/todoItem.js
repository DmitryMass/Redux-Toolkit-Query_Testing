import React from 'react';
import { useState } from 'react';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../../Store/Slice/apiSlice';

const TodoItem = ({ todo }) => {
  const { completed, title, id } = todo;
  const [editing, setEditing] = useState(false);

  const [value, setValue] = useState('');
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  const handleUpdateTodo = async (e) => {
    e.preventDefault();
    await updateTodo({ ...todo, title: value });
  };

  const handleCompleteTodo = async (e) => {
    e.preventDefault();
    await updateTodo({ ...todo, completed: !todo.completed });
  };

  const handleOnCloseEdit = (e) => {
    setValue('');
    setEditing(false);
  };

  return (
    <>
      {editing ? (
        <div>
          <form onSubmit={handleUpdateTodo}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Save Edit</button>
            <button type="button" onClick={handleOnCloseEdit}>
              ✖
            </button>
          </form>
        </div>
      ) : (
        <div className={`${completed ? 'done' : ''}`}>
          <button type="button" onClick={handleCompleteTodo}>
            Completed
          </button>
          <span>{title}</span>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </>
  );
};

export default TodoItem;
