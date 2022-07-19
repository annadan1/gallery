import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as actionsPage } from '../../slices/pageSlice';

const Input = ({ setQueryParams, searchParams }) => {
  const dispatch = useDispatch();
  const selectedPaintingName = useSelector((state) => state.page.selectedPaintingName);

  const value = searchParams.get('q') || '';

  useEffect(() => {
    if (value) {
      dispatch(actionsPage.setSelectedPainting(value));
    }
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(actionsPage.setSelectedPainting(e.target.value));
    dispatch(actionsPage.setPage(1));
    setQueryParams({ _page: 1, q: e.target.value });
  };

  return (
    <input type="text" placeholder="Name" className="Input SelectSize" onChange={handleChange} value={selectedPaintingName} />
  );
};

export default Input;
