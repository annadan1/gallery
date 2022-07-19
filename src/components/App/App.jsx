import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useSearchParams, Routes, Route,
} from 'react-router-dom';
import _ from 'lodash';
import {
  fetchAuthors,
  fetchLocations,
  fetchCurrentPaintings,
} from '../../slices/index.js';
import Container from './Container.jsx';

const getParams = (searchParams) => {
  let params = { _page: 1, _limit: 12 };

  if (searchParams.get('q')) {
    params = { ...params, q: searchParams.get('q') };
  }
  if (searchParams.get('_page')) {
    params = { ...params, _page: Number(searchParams.get('_page')) };
  }
  if (searchParams.get('authorId')) {
    params = { ...params, authorId: Number(searchParams.get('authorId')) };
  }
  if (searchParams.get('locationId')) {
    params = { ...params, locationId: Number(searchParams.get('locationId')) };
  }
  if (searchParams.get('created_gte')) {
    params = { ...params, created_gte: Number(searchParams.get('created_gte')) };
  }
  if (searchParams.get('created_lte')) {
    params = { ...params, created_lte: Number(searchParams.get('created_lte')) };
  }
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
      <Route path="/gallery" element={<Container setQueryParams={setQueryParams} searchParams={searchParams} />} />
    </Routes>
  );
};

export default App;
