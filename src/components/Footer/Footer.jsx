import React from 'react';
import PaginationContainer from './PaginationContainer.jsx';

const Footer = ({ currentPage, setCurrentPage, numberOfPages }) => (
  <div className="Footer">
    {numberOfPages <= 1 ? null : (
      <PaginationContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    )}
  </div>
);

export default Footer;
