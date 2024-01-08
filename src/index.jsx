import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello.jsx';
import './assets/fonts/fonts.css';

const root = document.getElementById('hello-section');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Hello/>
  </React.StrictMode>,
);
