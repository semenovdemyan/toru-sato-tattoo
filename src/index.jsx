import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Favicon from 'react-favicon';
import fav from '../src/imgs/karps.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={fav}/>
    <App />
  </React.StrictMode>
);
