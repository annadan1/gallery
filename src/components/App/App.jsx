import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/index.js';
import Filter from '../Filters/index.js';
import Footer from '../Footer/index.js';
import {
  fetchAuthors,
  fetchPaintings,
  fetchLocations,
} from '../../slices/index.js';
import { actions } from '../../slices/pageSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaintings());
    dispatch(fetchAuthors());
    dispatch(fetchLocations());
  }, [dispatch]);

  const currentPage = useSelector((state) => state.page.page);
  const paintings = useSelector((state) => state.paintings.paintings);
  const filters = useSelector((state) => state.paintings.filters);
  const authors = useSelector((state) => state.authors.authors);
  const locations = useSelector((state) => state.locations.locations);

  const setCurrentPage = (newPage) => {
    dispatch(actions.setPage(newPage));
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

export default App;
