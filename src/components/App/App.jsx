import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../slices/index.js';
import Gallery from '../Gallery/index.js';
import Header from '../Header/index.js';
import Filter from '../Filters/index.js';
import Footer from '../Footer/index.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log(window.location);

  return (
    <Provider store={store}>
      <div id="container">
        <Header />
        <Filter setCurrentPage={setCurrentPage} />
        <Gallery currentPage={currentPage} />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Provider>
  );
};

export default App;
