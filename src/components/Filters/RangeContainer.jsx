import React from 'react';
import { useDispatch } from 'react-redux';
import LineRange from '../../images/LineRange.svg';
import { actions } from '../../slices/pageSlice.js';

const RangeContainer = ({ onSubmit, searchParams, setQueryParams }) => {
  const dispatch = useDispatch();
  const from = Number(searchParams.get('created_gte')) || '';
  const before = Number(searchParams.get('created_lte')) || '';

  const handleChangeMinYear = (e) => {
    dispatch(actions.setPage(1));
    setQueryParams({ _page: 1, created_gte: e.target.value });
  };
  const handleChangeMaxYear = (e) => {
    dispatch(actions.setPage(1));
    setQueryParams({ _page: 1, created_lte: e.target.value });
  };

  return (
    <form className="RangeContainer" onSubmit={onSubmit}>
      <input
        placeholder="from"
        className="RangeOption"
        autoFocus
        type="number"
        name="from"
        value={from}
        onChange={(e) => handleChangeMinYear(e)}
      />
      <LineRange className="LineRange" />
      <input
        placeholder="before"
        className="RangeOption"
        type="number"
        name="before"
        value={before}
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
