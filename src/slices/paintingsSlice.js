/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes/routes.js';

export const fetchCurrentPaintings = createAsyncThunk(
  'fetchCurrentPaintings',
  async (params) => {
    const request = params;
    const { headers, data } = await axios.get(routes.paintingsPath(), request);
    const totalCount = headers['x-total-count'];
    return { data, totalCount };
  },
);

const initialState = {
  currentPaintings: [],
  numberOfPages: null,
};

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducer: {
    addCurrentPaintings(state, { payload }) {
      state.currentPaintings = payload.data;
      state.numberOfPages = Math.ceil(payload.totalCount / 12);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentPaintings.fulfilled, (state, { payload }) => {
        state.currentPaintings = payload.data;
        state.numberOfPages = Math.ceil(payload.totalCount / 12);
      });
  },
});

export const { actions } = paintingsSlice;
export default paintingsSlice.reducer;
