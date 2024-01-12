import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from './GlassHeader.jsx';
import FloatingAside from './FloatingAside.jsx';
import Sidebar from './Sidebar.jsx';
import CaseStudy from './CaseStudy.jsx';

function App() {
  /* decide if header is dark or light theme */
  const colorScheme = 'light';
  /* decide if there will be a sidebar (left) or not */
  const showSideBar = false;

  const adjSidebarSyles = {
    backgroundColor: 'teal',
    display: 'flex',
    minWidth: '0',
    flex: '1',
  };

  return (
    <>
      <GlassHeader $colorScheme={colorScheme} $showSideBar={false}/>
      <main id="main">
        <div id="adjustable-sidebar" style={adjSidebarSyles}>
          <Sidebar/>
        </div>
        <FloatingAside/>
      </main>
    </>
  )
}

export default App;