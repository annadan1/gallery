import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import useOutsideClick from '../../hooks/useOutsideClick.js';
import SelectArrow from '../../images/SelectArrow.svg';
import LineRange from '../../images/LineRange.svg';
import { actions } from '../../slices/paintingsSlice.js';

const RangeContainer = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const handleChange = (e, f) => {
    dispatch(f(e.target.value));
  };

  const minYear = useSelector((state) => state.paintings.minYear);
  const maxYear = useSelector((state) => state.paintings.maxYear);

  return (
    <form className="RangeContainer" onSubmit={onSubmit}>
      <input
        placeholder="from"
        className="RangeOption"
        autoFocus
        type="number"
        name="minYear"
        value={minYear}
        onChange={(e) => handleChange(e, actions.setMinYear)}
      />
      <LineRange className="LineRange" />
      <input
        placeholder="before"
        className="RangeOption"
        type="number"
        name="maxYear"
        value={maxYear}
        onChange={(e) => handleChange(e, actions.setMaxYear)}
      />
      <button
        type="submit"
        label="RangeContainer"
        className="buttonRangeSubmit"
      />
    </form>
  );
};

const Range = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const toggleOpen = (e) => {
    e.preventDefault();
    if (
      e.target.className === 'RemoveFilter'
      || e.target.parentNode.className === 'RemoveFilter'
    ) {
      return;
    }
    if (e.target.className === 'RangeOption') {
      return;
    }
    setIsOpen(!isOpen);
  };

  useOutsideClick(ref, toggleOpen);

  return (
    <div
      ref={isOpen ? ref : null}
      className={cn(isOpen ? 'RangeOpen' : 'Range')}
      aria-hidden="true"
      onClick={toggleOpen}
    >
      <span className="SelectTitle">Created</span>
      <div className={cn(isOpen ? 'SelectArrowClose' : 'SelectArrowOpen')}>
        <SelectArrow />
      </div>
      {isOpen && <RangeContainer onSubmit={toggleOpen} />}
    </div>
  );
};

export default Range;
