import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import routes from '../../routes/routes';
import usePaintingsFilter from '../../hooks/usePaintingsFilter.js';
import AboutPainting from './AboutPainting.jsx';
import { actions } from '../../slices/paintingsSlice';

const getFilteredPaintings = (paintings, filters, currentPage) => {
  const dispatch = useDispatch();
  const filterPaintings = usePaintingsFilter(paintings, filters);

  useEffect(() => {
    dispatch(actions.setFilterPaintings(filterPaintings));
  });

  return filterPaintings.find(({ page }) => page === currentPage);
};

const Gallery = ({ currentPage }) => {
  const paintings = useSelector((state) => state.paintings.paintings);
  const filters = useSelector((state) => state.paintings.filters);
  const authors = useSelector((state) => state.authors.authors);
  const locations = useSelector((state) => state.locations.locations);
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
      {currentPaintings?.paintings.map((painting) => (
        <div key={painting.id} className="PaintingContainer">
          <img src={routes.imagePath(painting.imageUrl)} alt={painting.name} loading="lazy" />
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
