import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
  fetchAuthors,
  fetchPaintings,
  fetchLocations,
} from '../../slices/index.js';
import Container from './Container.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaintings());
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Container />} />
    </Routes>
  );
};

export default App;
