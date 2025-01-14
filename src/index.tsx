import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { rootReducer } from './store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={rootReducer}>
    <App />
  </Provider>,
);

reportWebVitals();
