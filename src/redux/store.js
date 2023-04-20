import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: usersReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
