import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineRange from '../../images/LineRange.svg';
import { actions } from '../../slices/pageSlice.js';
import useSearchParamsQuery from '../../hooks/useSearchParamsQuery.js';

const RangeContainer = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { setQueryParams } = useSearchParamsQuery();

  const handleChangeMinYear = (e) => {
    dispatch(actions.setMinYear(e.target.value));
    setQueryParams('from', e.target.value);
  };
  const handleChangeMaxYear = (e) => {
    dispatch(actions.setMaxYear(e.target.value));
    setQueryParams('before', e.target.value);
  };

  const minYear = useSelector((state) => state.page.filters.minYear);
  const maxYear = useSelector((state) => state.page.filters.maxYear);

  return (
    <form className="RangeContainer" onSubmit={onSubmit}>
      <input
        placeholder="from"
        className="RangeOption"
        autoFocus
        type="number"
        name="minYear"
        value={minYear}
        onChange={(e) => handleChangeMinYear(e)}
      />
      <LineRange className="LineRange" />
      <input
        placeholder="before"
        className="RangeOption"
        type="number"
        name="maxYear"
        value={maxYear}
        onChange={(e) => handleChangeMaxYear(e)}
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
