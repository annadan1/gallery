import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input.jsx';
import Select from './Select.jsx';
import Range from './Range.jsx';
import { actions as actionsLocations } from '../../slices/locationsSlice';
import { actions as actionsAuthors } from '../../slices/authorsSlice';
import useSearchParamsQuery from '../../hooks/useSearchParamsQuery.js';

const Filter = ({ setCurrentPage, authors, locations }) => {
  const dispatch = useDispatch();
  const { searchParams, setQueryParams } = useSearchParamsQuery();

  const currentLocation = useSelector(
    (state) => state.locations.selectedLocation,
  );
  const updateLocations = locations.map(({ id, location }) => ({
    id,
    name: location,
  }));
  const currentAuthor = useSelector((state) => state.authors.selectedAuthor);
  const author = searchParams.get('author');
  const location = searchParams.get('location');

  useEffect(() => {
    if (author !== null) {
      dispatch(actionsAuthors.setSelectedAuthor(JSON.parse(author)));
    }
    if (location !== null) {
      dispatch(actionsLocations.setSelectedLocation(JSON.parse(location)));
    }
  }, [dispatch]);

  return (
    <div className="Filter">
      <Input setCurrentPage={setCurrentPage} />
      <Select
        options={authors}
        title={currentAuthor?.name}
        defaultTitle="Author"
        onChange={(value) => {
          setCurrentPage(1);
          dispatch(actionsAuthors.setSelectedAuthor(value));
          setQueryParams('author', value);
        }}
      />
      <Select
        options={updateLocations}
        title={currentLocation?.name}
        defaultTitle="Location"
        onChange={(value) => {
          setCurrentPage(1);
          dispatch(actionsLocations.setSelectedLocation(value));
          setQueryParams('location', value);
        }}
      />
      <Range searchParams={searchParams} setQueryParams={setQueryParams} />
    </div>
  );
};

export default Filter;
