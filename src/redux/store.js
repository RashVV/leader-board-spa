import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import allReducers from './reducers/index';

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunk],
});
