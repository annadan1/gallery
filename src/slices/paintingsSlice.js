/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { actions as locationsActions } from './locationsSlice';
import { actions as authorsActions } from './authorsSlice';
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
  filters: {
    selectedNamePainting: '',
    minYear: '',
    maxYear: '',
    selectedAuthor: '',
    selectedLocation: '',
  },
  filterPaintings: [],
};

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setMinYear(state, { payload }) {
      state.filters.minYear = payload;
    },
    setMaxYear(state, { payload }) {
      state.filters.maxYear = payload;
    },
    setSelectedNamePainting(state, { payload }) {
      state.filters.selectedNamePainting = payload;
    },
    setFilterPaintings(state, { payload }) {
      state.filterPaintings = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaintings.fulfilled, (state, { payload }) => {
        state.paintings = payload;
      })
      .addCase(locationsActions.setSelectedLocation, (state, { payload }) => {
        state.filters.selectedLocation = payload;
      })
      .addCase(authorsActions.setSelectedAuthor, (state, { payload }) => {
        state.filters.selectedAuthor = payload;
      });
  },
});

export const { actions } = paintingsSlice;
export default paintingsSlice.reducer;
