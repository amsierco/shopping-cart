import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './components/RouteSwitch';


const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').classList = 'preload';
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
