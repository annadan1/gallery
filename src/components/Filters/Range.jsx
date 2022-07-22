import React, { useState, useRef } from 'react';
import cn from 'classnames';
import useOutsideClick from '../../hooks/useOutsideClick.js';
import SelectArrow from '../../images/SelectArrow.svg';
import RangeContainer from './RangeContainer.jsx';

const Range = ({ searchParams, setQueryParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const toggleOpen = (e) => {
    e.preventDefault();
    if (e.target.className === 'RangeOption' || e.target.className === 'RangeContainer') {
      return;
    }
    setIsOpen(!isOpen);
  };
  useOutsideClick(ref, toggleOpen);

  return (
    <div
      ref={isOpen ? ref : null}
      className={cn(isOpen ? 'RangeOpen SelectSize' : 'Range SelectSize')}
      aria-hidden="true"
      onClick={toggleOpen}
    >
      <span className="SelectTitle">Created</span>
      <div className={cn(isOpen ? 'SelectArrowClose' : 'SelectArrowOpen')}>
        <SelectArrow />
      </div>
      {isOpen && (
      <RangeContainer
        onSubmit={toggleOpen}
        searchParams={searchParams}
        setQueryParams={setQueryParams}
      />
      )}
    </div>
  );
};

export default Range;
