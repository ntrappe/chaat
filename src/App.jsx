import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from './GlassHeader.jsx';
import FloatingAside from './FloatingAside.jsx';
import Sidebar from './Sidebar.jsx';
import CaseStudy from './CaseStudy.jsx';

function App() {
  const colorScheme = 'light';

  const sidebarStyles = {
    backgroundColor: 'teal',
  };

  return (
    <>
      <GlassHeader $colorScheme={colorScheme}/>
    </>
  )
}

export default App;