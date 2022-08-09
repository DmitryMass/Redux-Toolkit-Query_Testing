import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './Slice/apiSlice';

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
  // middle ware по доке, в данном проекте он не нужен
});

export default store;
