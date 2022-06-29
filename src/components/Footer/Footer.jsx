import React from 'react';
import { useSelector } from 'react-redux';
import PaginationContainer from './PaginationContainer.jsx';

const Footer = ({ currentPage, setCurrentPage }) => {
  const filterPaintings = useSelector(
    (state) => state.paintings.filterPaintings,
  );
  return (
    <div className="Footer">
      {filterPaintings.length <= 1 ? null : (
        <PaginationContainer
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filterPaintings={filterPaintings}
        />
      )}
    </div>
  );
};

export default Footer;
