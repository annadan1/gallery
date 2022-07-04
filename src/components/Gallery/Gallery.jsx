import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import usePaintingsFilter from '../../hooks/usePaintingsFilter.js';
import AboutPainting from './AboutPainting.jsx';
import { actions as actionsPainting } from '../../slices/paintingsSlice';
import { actions as actionsPage } from '../../slices/pageSlice';
import Image from './Image.jsx';

const getFilteredPaintings = (paintings, filters, currentPage) => {
  const dispatch = useDispatch();
  const filterPaintings = usePaintingsFilter(paintings, filters);

  useEffect(() => {
    dispatch(actionsPainting.setFilterPaintings(filterPaintings));
  });

  return filterPaintings.find(({ page }) => page === currentPage);
};

const Gallery = ({
  currentPage, paintings, filters, authors, locations,
}) => {
  const currentPaintings = getFilteredPaintings(
    paintings,
    filters,
    currentPage,
  );
  const dispatch = useDispatch();
  const touchPaintingId = useSelector((state) => state.page.touchPaintingId);
  const handleTouchToogle = ({ id }) => {
    if (id === touchPaintingId) {
      dispatch(actionsPage.setTouchPaintingId(null));
    } else {
      dispatch(actionsPage.setTouchPaintingId(id));
    }
  };

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
        <div
          key={painting.id}
          id={painting.id}
          className={cn(
            touchPaintingId === painting.id ? 'PaintingContainer Touch' : 'PaintingContainer',
          )}
          onTouchStart={() => handleTouchToogle(painting)}
        >
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
