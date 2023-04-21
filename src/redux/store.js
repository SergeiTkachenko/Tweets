import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
