import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Root from './Root.jsx';
import ErrorPage from './error-page.jsx';
import Contact from './contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
