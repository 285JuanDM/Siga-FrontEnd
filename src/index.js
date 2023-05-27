import React from 'react';
import ReactDOM from 'react-dom/client';
import SigaApp from './AppsComponents/SigaApp';
import CrearApp from './AppsComponents/CrearApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SigaApp />
  </React.StrictMode>
);

reportWebVitals();
