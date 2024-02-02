import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Bookify from './cases/Bookify.jsx';
import Pomodoro from './cases/Pomodoro.jsx';
import Museum from './cases/Museum.jsx';
import Rock from './cases/Rock.jsx';
import Flow from './cases/Flow.jsx';
import Vacuum from './cases/Vacuum.jsx';
import Calendar from './cases/Calendar.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import Art from './pages/Art.jsx';
import Career from './pages/Career.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Page from './components/Core/Page.jsx';
import MinimalPage from './components/Core/MinimalPage.jsx';
import ProjectGrid from './components/Core/ProjectGrid.jsx';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MinimalPage customComponent={Home} $colorScheme={'dark'} />} />
        <Route path='/projects' element={<Page customComponent={ProjectGrid} showAside={false} />} />
        <Route path='/projects/pomodoro' element={<Page customComponent={Pomodoro} showAside={true} />} />
        <Route path='/projects/museum' element={<Page customComponent={Museum} showAside={true} />} />
        <Route path='/projects/rock' element={<Page customComponent={Rock} showAside={true} />} />
        <Route path='/projects/bookify' element={<Page customComponent={Bookify} showAside={true} />} />
        <Route path='/projects/flow' element={<Page customComponent={Flow} showAside={false} />} />
        <Route path='/projects/vacuum' element={<Page customComponent={Vacuum} showAside={false} />} />
        <Route path='/projects/calendar' element={<Page customComponent={Calendar} showAside={false} />} />
        <Route path='/photography' element={<MinimalPage customComponent={Photography} $colorScheme={'light'}/>} />
        <Route path='/career' element={<MinimalPage customComponent={Career} $colorScheme={'light'}/>} />
        <Route path='/art' element={<MinimalPage customComponent={Art} $colorScheme={'light'} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
