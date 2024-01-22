import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ProjectsHome from './pages/ProjectsHome.jsx';
import Project from './pages/Project.jsx';
import Bookify from './cases/Bookify.jsx';
import Pomodoro from './cases/Pomodoro.jsx';
import Rock from './cases/Rock.jsx';
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
    element: <ProjectsHome />,
    errorElement: <PageNotFound />
  },
  {
    path: '/projects/pomodoro',
    element: <Project customComponent={Pomodoro} />,
    errorElement: <PageNotFound />
  },
  {
    path: '/projects/rock',
    element: <Project customComponent={Rock} />,
    errorElement: <PageNotFound />
  },
  {
    path: '/projects/bookify',
    element: <Project customComponent={Bookify} />,
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