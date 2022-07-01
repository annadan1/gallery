import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import usePaintingsFilter from '../../hooks/usePaintingsFilter.js';
import AboutPainting from './AboutPainting.jsx';
import { actions } from '../../slices/paintingsSlice';
import Image from './Image.jsx';

const getFilteredPaintings = (paintings, filters, currentPage) => {
  const dispatch = useDispatch();
  const filterPaintings = usePaintingsFilter(paintings, filters);

  useEffect(() => {
    dispatch(actions.setFilterPaintings(filterPaintings));
  });

  return filterPaintings.find(({ page }) => page === currentPage);
};

const Gallery = ({
  currentPage, paintings, filters, authors, locations,
}) => {
  const currentPaintings = getFilteredPaintings(paintings, filters, currentPage);

  const getAuthorName = (authorId) => {
    const author = authors.find(({ id }) => id === authorId);
    return author?.name;
  };
  const getAuthorLocation = (locationId) => {
    const location = locations.find(({ id }) => id === locationId);
    return location?.location;
  };

  return (
    <div className="Gallery">
      { currentPaintings?.paintings.map((painting) => (
        <div key={painting.id} className="PaintingContainer">
          <Suspense>
            <Image painting={painting} />
          </Suspense>
          <AboutPainting
            painting={painting}
            getAuthorName={getAuthorName}
            getAuthorLocation={getAuthorLocation}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
