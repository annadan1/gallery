import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import useOutsideClick from '../../hooks/useOutsideClick.js';
import { actions } from '../../slices/pageSlice.js';
import SelectArrow from '../../images/SelectArrow.svg';
import RangeContainer from './RangeContainer.jsx';
import useSearchParamsQuery from '../../hooks/useSearchParamsQuery.js';

const Range = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  const toggleOpen = (e) => {
    e.preventDefault();
    if (e.target.className === 'RangeOption' || e.target.className === 'RangeContainer') {
      return;
    }
    setIsOpen(!isOpen);
  };
  useOutsideClick(ref, toggleOpen);

  const { searchParams } = useSearchParamsQuery();
  const from = searchParams.get('from');
  const before = searchParams.get('before');

  useEffect(() => {
    if (from) { dispatch(actions.setMinYear(Number(from))); }
    if (before) { dispatch(actions.setMaxYear(Number(before))); }
  }, [dispatch]);

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
      />
      )}
    </div>
  );
};

export default Range;
