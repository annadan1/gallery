import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAuthors,
  fetchPaintings,
  fetchLocations,
} from '../../slices/index.js';
import Input from './Input.jsx';
import Select from './Select.jsx';
import Range from './Range.jsx';
import { actions as actionsLocations } from '../../slices/locationsSlice';
import { actions as actionsAuthors } from '../../slices/authorsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaintings());
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch]);

  const locations = useSelector((state) => state.locations.locations);
  const currentLocation = useSelector(
    (state) => state.locations.selectedLocation,
  );
  const updateLocations = locations.map(({ id, location }) => ({
    id,
    name: location,
  }));

  const authors = useSelector((state) => state.authors.authors);
  const currentAuthor = useSelector((state) => state.authors.selectedAuthor);

  return (
    <div className="Filter">
      <Input />
      <Select
        options={authors}
        title={currentAuthor?.name}
        defaultTitle="Author"
        onChange={(value) => {
          dispatch(actionsAuthors.setSelectedAuthor(value));
        }}
      />
      <Select
        options={updateLocations}
        title={currentLocation?.name}
        defaultTitle="Location"
        onChange={(value) => {
          dispatch(actionsLocations.setSelectedLocation(value));
        }}
      />
      <Range />
    </div>
  );
};

export default Filter;
