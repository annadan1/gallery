import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineRange from '../../images/LineRange.svg';
import { actions } from '../../slices/paintingsSlice.js';

const RangeContainer = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const handleChange = (e, f) => {
    dispatch(f(e.target.value));
  };

  const minYear = useSelector((state) => state.paintings.filters.minYear);
  const maxYear = useSelector((state) => state.paintings.filters.maxYear);

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

export default RangeContainer;
