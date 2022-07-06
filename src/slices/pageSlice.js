/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';
import { actions as locationsActions } from './locationsSlice';
import { actions as authorsActions } from './authorsSlice';

const initialState = {
  touchPaintingId: null,
  filters: {
    page: null,
    selectedNamePainting: '',
    minYear: '',
    maxYear: '',
    selectedAuthor: '',
    selectedLocation: '',
  },
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, { payload }) {
      state.filters.page = payload;
      state.touchPaintingId = null;
    },
    setTouchPaintingId(state, { payload }) {
      state.touchPaintingId = payload;
    },
    setMinYear(state, { payload }) {
      state.filters.minYear = payload;
    },
    setMaxYear(state, { payload }) {
      state.filters.maxYear = payload;
    },
    setSelectedNamePainting(state, { payload }) {
      state.filters.selectedNamePainting = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(locationsActions.setSelectedLocation, (state, { payload }) => {
        state.filters.selectedLocation = payload;
      })
      .addCase(authorsActions.setSelectedAuthor, (state, { payload }) => {
        state.filters.selectedAuthor = payload;
      });
  },
});

export const { actions } = pageSlice;
export default pageSlice.reducer;
