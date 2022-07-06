import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsPage } from '../../slices/pageSlice';
import useSearchParamsQuery from '../../hooks/useSearchParamsQuery.js';

const Input = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const { searchParams, setQueryParams } = useSearchParamsQuery();
  const value = searchParams.get('q') || '';

  useEffect(() => {
    if (value) {
      dispatch(actionsPage.setSelectedNamePainting(value));
    }
  });

  const handleChange = (e) => {
    setCurrentPage(1);
    dispatch(actionsPage.setSelectedNamePainting(e.target.value));
    setQueryParams('q', e.target.value);
  };

  return (
    <input type="text" placeholder="Name" className="Input SelectSize" onChange={handleChange} value={value} />
  );
};

export default Input;
