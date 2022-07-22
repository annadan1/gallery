/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes/routes.js';

export const fetchLocations = createAsyncThunk(
  'fetchLocations',
  async () => {
    const { data } = await axios.get(routes.locationsPath());
    return data;
  },
);

const initialState = {
  locations: [],
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.fulfilled, (state, { payload }) => {
        state.locations = payload;
      });
  },
});

export const { actions } = locationsSlice;
export default locationsSlice.reducer;
