import React from 'react';
import { useDispatch } from 'react-redux';
import Input from './Input.jsx';
import Select from './Select.jsx';
import Range from './Range.jsx';
import { actions as actionsPage } from '../../slices/pageSlice';

const Filter = ({
  setQueryParams,
  searchParams,
  authors,
  locations,
}) => {
  const dispatch = useDispatch();

  const authorId = Number(searchParams.get('authorId'));
  const locationId = Number(searchParams.get('locationId'));

  const updateLocations = locations?.map(({ id, location }) => ({
    id,
    name: location,
  }));
  const currentLocation = locations.find(({ id }) => id === locationId);
  const currentAuthor = authors.find(({ id }) => id === authorId);

  return (
    <div className="Filter">
      <Input
        setQueryParams={setQueryParams}
        searchParams={searchParams}
      />
      <Select
        options={authors}
        title={currentAuthor?.name}
        defaultTitle="Author"
        setQueryParams={setQueryParams}
        searchParams={searchParams}
        onChange={(value) => {
          dispatch(actionsPage.setPage(1));
          setQueryParams({ _page: 1, authorId: value.id });
        }}
      />
      <Select
        options={updateLocations}
        title={currentLocation?.location || currentLocation?.name}
        defaultTitle="Location"
        setQueryParams={setQueryParams}
        searchParams={searchParams}
        onChange={(value) => {
          dispatch(actionsPage.setPage(1));
          setQueryParams({ _page: 1, locationId: value.id });
        }}
      />
      <Range setQueryParams={setQueryParams} searchParams={searchParams} />
    </div>
  );
};

export default Filter;
