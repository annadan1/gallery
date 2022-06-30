import React, { useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/index.js';
import Filter from '../Filters/index.js';
import Footer from '../Footer/index.js';
import routes from '../../routes/routes';

const preloadImages = (urls) => {
  const images = [];
  urls.forEach((url) => {
    const img = new Image();
    img.src = routes.imagePath(url);
    images.push(img);
  });
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paintings = useSelector((state) => state.paintings.paintings);
  const filters = useSelector((state) => state.paintings.filters);
  const authors = useSelector((state) => state.authors.authors);
  const locations = useSelector((state) => state.locations.locations);

  const images = paintings.map(({ imageUrl }) => imageUrl);
  preloadImages(images);

  const ComponentGallery = React.lazy(() => import('../Gallery/index.js'));

  return (
    <div id="container">
      <Header />
      <Filter setCurrentPage={setCurrentPage} />
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
