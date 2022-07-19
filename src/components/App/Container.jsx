import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/index.js';
import Filter from '../Filters/index.js';
import Footer from '../Footer/index.js';
import { actions } from '../../slices/pageSlice.js';

const Container = ({ setQueryParams, searchParams }) => {
  const dispatch = useDispatch();
  const numberOfPages = useSelector((state) => state.paintings.numberOfPages);
  const authors = useSelector((state) => state.authors.authors);
  const locations = useSelector((state) => state.locations.locations);
  const currentPaintings = useSelector(
    (state) => state.paintings.currentPaintings,
  );
  const currentPage = useSelector((state) => state.page.page);

  useEffect(() => {
    const page = Number(searchParams.get('_page'));
    dispatch(actions.setPage(Number(page)));
  }, [dispatch]);

  const setCurrentPage = (newPage) => {
    setQueryParams({ _page: newPage });
    dispatch(actions.setPage(newPage));
  };

  const ComponentGallery = React.lazy(() => import('../Gallery/index.js'));
  return (
    <div id="container">
      <Header />
      <Filter
        setQueryParams={setQueryParams}
        searchParams={searchParams}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        paintings={currentPaintings}
        authors={authors}
        locations={locations}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentGallery
          currentPage={currentPage}
          paintings={currentPaintings}
          authors={authors}
          locations={locations}
        />
      </Suspense>
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default Container;
