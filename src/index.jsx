import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello.jsx';
import DarkGlassHeader from './DarkGlassHeader.jsx';
import './assets/fonts/fonts.css';

const header = document.getElementById('header');
const main = document.getElementById('main');
const helloSection = document.createElement('div');

ReactDOM.createRoot(header).render(
  <React.StrictMode>
    <DarkGlassHeader/>
  </React.StrictMode>,
);

ReactDOM.createRoot(main).render(
  <React.StrictMode>
    <section id="hello-section">
      <Hello/>
    </section>
  </React.StrictMode>,
);