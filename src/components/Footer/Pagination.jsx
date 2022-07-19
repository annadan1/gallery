import React from 'react';
import cn from 'classnames';

const Pagination = ({ id, currentPage, handleClick }) => (
  <button
    type="button"
    className={cn(currentPage === id ? 'SelectPagination' : 'Pagination')}
    label="Pagination"
    id={id}
    onClick={() => handleClick(id)}
    disabled={currentPage === id}
  >
    {id}
  </button>
);

export default Pagination;
