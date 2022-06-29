import React from 'react';
import cn from 'classnames';

const Pagination = ({ id, currentPage, handlerClick }) => (
  <button
    type="button"
    className={cn(currentPage === id ? 'SelectPagination' : 'Pagination')}
    label="Pagination"
    id={id}
    onClick={() => handlerClick(id)}
    disabled={currentPage === id}
  >
    {id}
  </button>
);

export default Pagination;
