/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  touchPaintingId: null,
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
