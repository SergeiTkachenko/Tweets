import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64418b5afadc69b8e086c50f.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        ...user,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
