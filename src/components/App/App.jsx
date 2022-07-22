import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useSearchParams, Routes, Route, useLocation,
} from 'react-router-dom';
import {
  fetchAuthors,
  fetchLocations,
  fetchCurrentPaintings,
} from '../../slices/index.js';
import Container from './Container.jsx';
import { getParams, updateParams } from '../../hooks/useUpdateParams.js';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = getParams(location.search);

  const setQueryParams = (currentParams) => {
    const newParams = updateParams(currentParams, setSearchParams, params);
    dispatch(fetchCurrentPaintings({ params: newParams }));
  };

  window.addEventListener('popstate', (event) => {
    const { search } = event.target.location;
    dispatch(fetchCurrentPaintings({ params: getParams(search) }));
  });

  useEffect(() => {
    dispatch(fetchCurrentPaintings({ params }));
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
    setSearchParams(params);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/gallery" element={<Container setQueryParams={setQueryParams} searchParams={searchParams} />} />
    </Routes>
  );
};

export default App;
