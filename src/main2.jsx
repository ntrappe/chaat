import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlassHeader from './GlassHeader.jsx';
import Hello from './Hello.jsx';
import './index.css';
import './assets/fonts/fonts.css';

const HomePage = () => {
  const body = document.getElementById('body');
  body.style.backgroundColor = '#0d0d0d';

  return (
    <>
      <GlassHeader 
        $colorScheme={'dark'} 
        $showSideBar={false} 
        passSidebarClick={() => {console.log('nothing')}}
      />
      <main id="main">
        <section id="hello-section">
          <Hello />
        </section>
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects'
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
