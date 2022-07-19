import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './slices/index.js';
import App from './components/App/index.js';

const init = () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
};

init();

// basename="/gallery/"
