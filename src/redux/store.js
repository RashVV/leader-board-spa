import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers/index';

export const store = configureStore({
  reducer: allReducers,
});
