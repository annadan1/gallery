import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineRange from '../../images/LineRange.svg';
import { actions } from '../../slices/pageSlice.js';

const RangeContainer = ({ onSubmit, searchParams, setQueryParams }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const createdGte = searchParams.get('created_gte');
    const createdLte = searchParams.get('created_lte');
    if (createdGte) {
      dispatch(actions.setMinYear(Number(createdGte)));
      dispatch(actions.setPage(1));
    }
    if (createdLte) {
      dispatch(actions.setMaxYear(Number(createdLte)));
      dispatch(actions.setPage(1));
    }
  }, [dispatch]);

  const handleChangeMinYear = (e) => {
    dispatch(actions.setMinYear(e.target.value));
    dispatch(actions.setPage(1));
    setQueryParams({ _page: 1, created_gte: e.target.value });
  };
  const handleChangeMaxYear = (e) => {
    dispatch(actions.setMaxYear(e.target.value));
    dispatch(actions.setPage(1));
    setQueryParams({ _page: 1, created_lte: e.target.value });
  };

  const minYear = useSelector((state) => state.page.minYear);
  const maxYear = useSelector((state) => state.page.maxYear);

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
