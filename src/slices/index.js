import { configureStore } from '@reduxjs/toolkit';
import paintingsReducer, { fetchPaintings } from './paintingsSlice.js';
import authorsReducer, { fetchAuthors } from './authorsSlice.js';
import locationsReducer, { fetchLocations } from './locationsSlice.js';
import pageReducer from './pageSlice.js';

const store = configureStore({
  reducer: {
    paintings: paintingsReducer,
    authors: authorsReducer,
    locations: locationsReducer,
    page: pageReducer,
  },
});

export { fetchPaintings, fetchAuthors, fetchLocations };
export default store;
