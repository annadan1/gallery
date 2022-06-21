/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes/routes.js';

export const fetchPaintings = createAsyncThunk(
  'fetchPaintings',
  async () => {
    const { data } = await axios.get(routes.paintingsPath());
    return data;
  },
);

const initialState = {
  paintings: [],
  minYear: '',
  maxYear: '',
};

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setMinYear(state, { payload }) {
      state.minYear = payload;
    },
    setMaxYear(state, { payload }) {
      state.maxYear = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaintings.fulfilled, (state, { payload }) => {
        state.paintings = payload;
      });
  },
});

export const { actions } = paintingsSlice;
export default paintingsSlice.reducer;
