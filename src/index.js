import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Perbaiki import ini
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Pastikan ini sesuai dengan yang diimpor */}
  </React.StrictMode>
);

reportWebVitals();
