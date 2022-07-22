/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes/routes.js';

export const fetchAuthors = createAsyncThunk(
  'fetchAuthors',
  async () => {
    const { data } = await axios.get(routes.authorsPath());
    return data;
  },
);

const initialState = {
  authors: [],
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.fulfilled, (state, { payload }) => {
        state.authors = payload;
      });
  },
});

export const { actions } = authorsSlice;
export default authorsSlice.reducer;
