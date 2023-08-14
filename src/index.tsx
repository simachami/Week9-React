import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './component/Router';


// Rendering the root component (AppRouter) into the 'root' element of the DOM
ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
);


