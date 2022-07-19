import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useSearchParams, Routes, Route, useLocation,
} from 'react-router-dom';
import _ from 'lodash';
import {
  fetchAuthors,
  fetchLocations,
  fetchCurrentPaintings,
} from '../../slices/index.js';
import Container from './Container.jsx';

const getParams = () => {
  const defaultParams = { _page: 1, _limit: 12 };
  const location = useLocation();

  const currentParams = location.search
    .slice(1)
    .split('&')
    .map((p) => p.split('='))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  const params = { ...defaultParams, ...currentParams };
  return params;
};

const App = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const startingParams = getParams(searchParams);
  const [params, setParams] = useState(startingParams);

  const updateParams = (currentParams) => {
    let newParams = params;
    Object.entries(currentParams).forEach(([key, value]) => {
      if (!value) {
        newParams = _.omit(newParams, key);
      } else {
        newParams = { ...newParams, [key]: value };
      }
    });
    setParams(newParams);
    setSearchParams(newParams);
    return newParams;
  };

  const setQueryParams = (queryParams) => {
    const newParams = updateParams(queryParams);
    dispatch(fetchCurrentPaintings({ params: newParams }));
  };

  useEffect(() => {
    dispatch(fetchCurrentPaintings({ params: startingParams }));
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/gallery/" element={<Container setQueryParams={setQueryParams} searchParams={searchParams} />} />
    </Routes>
  );
};

export default App;
