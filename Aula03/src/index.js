import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import './assets/css/style.css';
import './assets/css/reset.css'
import MyMusics from './pages/MyMusics';

ReactDOM.render(
  <React.StrictMode>
    <MyMusics/>
  </React.StrictMode>,
  document.getElementById('root')
);
