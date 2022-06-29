import React from 'react';
import Pagination from './Pagination.jsx';
import ArrowR from '../../images/ArrowR.svg';
import DoubleArrowR from '../../images/DoubleArrowR.svg';
import ArrowL from '../../images/ArrowL.svg';
import DoubleArrowL from '../../images/DoubleArrowL.svg';

const PaginationContainer = ({
  currentPage,
  setCurrentPage,
  filterPaintings,
}) => {
  const firstPage = filterPaintings[0]?.page;
  const lastPage = filterPaintings.slice(-1)[0]?.page;

  const handlerClick = (newPage) => {
    window.scrollTo(0, 0);
    setCurrentPage(newPage);
  };

  return (
    <div className="PaginationContainer">
      <button
        type="button"
        className="Arrow Left"
        onClick={() => handlerClick(firstPage)}
        disabled={currentPage === firstPage}
      >
        <DoubleArrowL />
      </button>
      <button
        type="button"
        className="Arrow"
        onClick={() => handlerClick(currentPage - 1)}
        disabled={currentPage === firstPage}
      >
        <ArrowL />
      </button>
      {filterPaintings.map(({ page }) => (
        <Pagination
          id={page}
          key={page}
          currentPage={currentPage}
          handlerClick={handlerClick}
        />
      ))}
      <button
        type="button"
        className="Arrow"
        onClick={() => handlerClick(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <ArrowR />
      </button>
      <button
        type="button"
        className="Arrow Right"
        onClick={() => handlerClick(lastPage)}
        disabled={currentPage === lastPage}
      >
        <DoubleArrowR />
      </button>
    </div>
  );
};

export default PaginationContainer;
