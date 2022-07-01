import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input.jsx';
import Select from './Select.jsx';
import Range from './Range.jsx';
import { actions as actionsPaintings } from '../../slices/paintingsSlice';
import { actions as actionsLocations } from '../../slices/locationsSlice';
import { actions as actionsAuthors } from '../../slices/authorsSlice';

const Filter = ({ setCurrentPage, authors, locations }) => {
  const dispatch = useDispatch();
  const currentLocation = useSelector(
    (state) => state.locations.selectedLocation,
  );
  const updateLocations = locations.map(({ id, location }) => ({
    id,
    name: location,
  }));
  const currentAuthor = useSelector((state) => state.authors.selectedAuthor);

  return (
    <div className="Filter">
      <Input onChange={(e) => {
        dispatch(actionsPaintings.setSelectedNamePainting(e.target.value));
        setCurrentPage(1);
      }}
      />
      <Select
        options={authors}
        title={currentAuthor?.name}
        defaultTitle="Author"
        onChange={(value) => {
          dispatch(actionsAuthors.setSelectedAuthor(value));
          setCurrentPage(1);
        }}
      />
      <Select
        options={updateLocations}
        title={currentLocation?.name}
        defaultTitle="Location"
        onChange={(value) => {
          dispatch(actionsLocations.setSelectedLocation(value));
          setCurrentPage(1);
        }}
      />
      <Range />
    </div>
  );
};

export default Filter;
