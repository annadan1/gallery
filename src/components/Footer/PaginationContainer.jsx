import React from 'react';
import Pagination from './Pagination.jsx';
import ArrowR from '../../images/ArrowR.svg';
import DoubleArrowR from '../../images/DoubleArrowR.svg';
import ArrowL from '../../images/ArrowL.svg';
import DoubleArrowL from '../../images/DoubleArrowL.svg';

const PaginationContainer = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
}) => {
  const firstPage = 1;
  const lastPage = numberOfPages;

  const handleClick = (newPage) => {
    window.scrollTo(0, 0);
    setCurrentPage(newPage);
  };

  return (
    <div className="PaginationContainer">
      <button
        type="button"
        className="Arrow Left"
        onClick={() => handleClick(firstPage)}
        disabled={currentPage === firstPage}
      >
        <DoubleArrowL />
      </button>
      <button
        type="button"
        className="Arrow"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === firstPage}
      >
        <ArrowL />
      </button>
      {
        [...Array(numberOfPages).keys()].map((el) => (
          <Pagination
            id={el + 1}
            key={el + 1}
            currentPage={currentPage}
            handleClick={handleClick}
          />
        ))
}
      <button
        type="button"
        className="Arrow"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <ArrowR />
      </button>
      <button
        type="button"
        className="Arrow Right"
        onClick={() => handleClick(lastPage)}
        disabled={currentPage === lastPage}
      >
        <DoubleArrowR />
      </button>
    </div>
  );
};

export default PaginationContainer;
