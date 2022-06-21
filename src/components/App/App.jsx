import React from 'react';
import { Provider } from 'react-redux';
import store from '../../slices/index.js';
import Header from '../Header/index.js';
import Filter from '../Filter/index.js';

const App = () => (
  <Provider store={store}>
    <div id="container">
      <Header />
      <Filter />
    </div>
  </Provider>
);

export default App;
