import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Projects from './pages/Projects.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import Art from './pages/Art.jsx';
import Career from './pages/Career.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <PageNotFound />
  },
  {
    path: '/photography',
    element: <Photography />,
    errorElement: <PageNotFound />
  },
  {
    path: '/art',
    element: <Art />,
    errorElement: <PageNotFound />
  },
  {
    path: '/career',
    element: <Career />,
    errorElement: <PageNotFound />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);