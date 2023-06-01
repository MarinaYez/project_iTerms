import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
