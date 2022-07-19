import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input.jsx';
import Select from './Select.jsx';
import Range from './Range.jsx';
import { actions as actionsPage } from '../../slices/pageSlice';
import { actions as actionsLocations } from '../../slices/locationsSlice';
import { actions as actionsAuthors } from '../../slices/authorsSlice';
import routes from '../../routes/routes.js';

const Filter = ({
  setQueryParams,
  searchParams,
  authors,
  locations,
}) => {
  const dispatch = useDispatch();
  const updateLocations = locations?.map(({ id, location }) => ({
    id,
    name: location,
  }));

  const currentLocation = useSelector(
    (state) => state.locations.selectedLocation,
  );
  const currentAuthor = useSelector((state) => state.authors.selectedAuthor);

  useEffect(() => {
    const authorId = Number(searchParams.get('authorId'));
    const locationId = Number(searchParams.get('locationId'));
    if (locationId) {
      fetch(routes.locationsPath())
        .then((response) => response.json())
        .then((data) => data.find(({ id }) => id === locationId))
        .then((location) => dispatch(actionsLocations.setSelectedLocation(location)));
    }
    if (authorId) {
      fetch(routes.authorsPath())
        .then((response) => response.json())
        .then((data) => data.find(({ id }) => id === authorId))
        .then((author) => dispatch(actionsAuthors.setSelectedAuthor(author)));
    }
  }, [dispatch]);

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
          dispatch(actionsAuthors.setSelectedAuthor(value));
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
          dispatch(actionsLocations.setSelectedLocation(value));
          setQueryParams({ _page: 1, locationId: value.id });
        }}
      />
      <Range setQueryParams={setQueryParams} searchParams={searchParams} />
    </div>
  );
};

export default Filter;
