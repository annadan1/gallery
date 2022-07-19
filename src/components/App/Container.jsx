import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/index.js';
import Filter from '../Filters/index.js';
import Footer from '../Footer/index.js';
import { actions } from '../../slices/pageSlice.js';
import useSearchParamsQuery from '../../hooks/useSearchParamsQuery.js';

const Container = () => {
  const dispatch = useDispatch();
  const { searchParams, setQueryParams } = useSearchParamsQuery();
  const currentPage = useSelector((state) => state.page.filters.page);
  const paintings = useSelector((state) => state.paintings.paintings);
  const { filters } = useSelector((state) => state.page);
  const authors = useSelector((state) => state.authors.authors);
  const locations = useSelector((state) => state.locations.locations);
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    dispatch(actions.setPage(Number(page) || 1));
  }, [dispatch]);

  const setCurrentPage = (newPage) => {
    dispatch(actions.setPage(newPage));
    setQueryParams('page', newPage);
  };

  const ComponentGallery = React.lazy(() => import('../Gallery/index.js'));
  return (
    <div id="container">
      <Header />
      <Filter
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        paintings={paintings}
        filters={filters}
        authors={authors}
        locations={locations}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentGallery
          currentPage={currentPage}
          paintings={paintings}
          filters={filters}
          authors={authors}
          locations={locations}
        />
      </Suspense>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Container;