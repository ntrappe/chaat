import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
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

const router = createBrowserRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsHome />} />
        <Route path='/projects/pomodoro' element={<Project customComponent={Pomodoro} />} />
        <Route path='/projects/rock' element={<Project customComponent={Rock} />} />
        <Route path='projects/bookify' element={<Project customComponent={Bookify} />} />
        <Route path='/photography' element={<Photography />} />
        <Route path='/career' element={<Career />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>,
);