/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  touchPaintingId: null,
  page: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, { payload }) {
      state.page = payload;
      state.touchPaintingId = null;
    },
    setTouchPaintingId(state, { payload }) {
      state.touchPaintingId = payload;
    },
  },
});

export const { actions } = pageSlice;
export default pageSlice.reducer;
