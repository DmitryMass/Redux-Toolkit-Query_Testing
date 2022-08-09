import { nanoid } from 'nanoid';
import React from 'react';
import { useGetAllTodosQuery } from '../../Store/Slice/apiSlice';
import TodoItem from './todoItem/todoItem';

const TodoList = () => {
  const { data = [], error, isLoading } = useGetAllTodosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry error..</div>;
  }
  return (
    <div>
      {data.map((todo) => {
        return <TodoItem key={nanoid()} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
