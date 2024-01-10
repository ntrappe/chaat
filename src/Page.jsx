import React from 'react';
import ReactDOM from 'react-dom/client';
import LightGlassHeader from './LightGlassHeader.jsx';
import FloatingAside from './FloatingAside.jsx';
import './assets/fonts/fonts.css';

const header = document.getElementById('header');
const main = document.getElementById('main');
document.getElementById('body').style.backgroundColor = 'white';

ReactDOM.createRoot(header).render(
  <React.StrictMode>
    <LightGlassHeader/>
  </React.StrictMode>,
);

ReactDOM.createRoot(main).render(
  <React.StrictMode>
    <FloatingAside/>
  </React.StrictMode>,
);

