import { configureStore } from '@reduxjs/toolkit';
import paintingsReducer, { fetchCurrentPaintings } from './paintingsSlice.js';
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

export { fetchAuthors, fetchLocations, fetchCurrentPaintings };
export default store;
