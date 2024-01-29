import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Bookify from './cases/Bookify.jsx';
import Pomodoro from './cases/Pomodoro.jsx';
import Rock from './cases/Rock.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import Art from './pages/Art.jsx';
import Career from './pages/Career.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Page from './components/Core/Page.jsx';
import ProjectGrid from './components/Core/ProjectGrid.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Page customComponent={ProjectGrid} showAside={false} />} />
        <Route path='/projects/pomodoro' element={<Page customComponent={Pomodoro} showAside={true} />} />
        <Route path='/projects/rock' element={<Page customComponent={Rock} showAside={true} />} />
        <Route path='/projects/bookify' element={<Page customComponent={Bookify} showAside={true} />} />
        <Route path='/photography' element={<Photography />} />
        <Route path='/career' element={<Career />} />
        <Route path='/art' element={<Art />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
