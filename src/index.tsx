import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';

import './layout.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/*<Provider>*/}
      <App />
    {/*</Provider>*/}
  </React.StrictMode>
);


