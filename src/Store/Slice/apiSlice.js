import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://62e8febd249bb1284eb816a3.mockapi.io/api';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getAllTodos: build.query({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos', id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    addNewTodo: build.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    getTodoById: build.query({
      query: (id) => ({
        url: `todos/${id}`,
      }),
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    updateTodo: build.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetTodoByIdQuery,
  useAddNewTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
