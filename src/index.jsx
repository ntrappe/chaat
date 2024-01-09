import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello.jsx';
import GlassHeader from './GlassHeader.jsx';
import './assets/fonts/fonts.css';

const root = document.getElementById('hello-section');
const header = document.getElementById('header');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Hello/>
  </React.StrictMode>,
);

ReactDOM.createRoot(header).render(
  <React.StrictMode>
    <GlassHeader/>
  </React.StrictMode>,
);
