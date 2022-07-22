import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as actionsPage } from '../../slices/pageSlice';

const Input = ({ setQueryParams, searchParams }) => {
  const dispatch = useDispatch();

  const value = searchParams.get('q') || '';

  const handleChange = (e) => {
    dispatch(actionsPage.setPage(1));
    setQueryParams({ _page: 1, q: e.target.value });
  };

  return (
    <input type="text" placeholder="Name" className="Input SelectSize" onChange={handleChange} value={value} />
  );
};

export default Input;
