import React from 'react';
import ReactDOM from 'react-dom/client';
import SigaApp from './Pagina principal/SigaApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SigaApp />
  </React.StrictMode>
);