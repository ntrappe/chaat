import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Projects from './pages/Projects.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import Art from './pages/Art.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <Error />
  },
  {
    path: '/photography',
    element: <Photography />,
    errorElement: <Error />
  },
  {
    path: '/art',
    element: <Art />,
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);