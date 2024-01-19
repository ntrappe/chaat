import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlassHeader from './GlassHeader.jsx';
import Hello from './Hello.jsx';
import FloatingAside from './FloatingAside.jsx';
import Sidebar from './Sidebar.jsx';
import CaseStudy from './CaseStudy.jsx';

const EXP = 'expanded';
const COL = 'collapsed';
const HID = 'hidden';

function HomePage() {
  return (
    <>
      <GlassHeader 
        $colorScheme={'dark'} 
        $showSideBar={false} 
        passSidebarClick={() => {console.log('nothing')}}
      />
    </>
  )
}

function ProjectsPage() {
  return (
    <>
      <GlassHeader 
        $colorScheme={'light'} 
        $showSideBar={false} 
        passSidebarClick={() => {console.log('nothing')}}
      />
    </>
  )
}

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1023px) {
    width: ${(props) => props.$sidebarMode === EXP ? '100%' : '692px'};
    position: ${(props) => (props.$mode === 'HID' ? 'fixed' : 'relative')};
    top: ${(props) => (props.$mode === HID ? '1rem' : '0')};
    overflow: ${(props) => (props.$mode === HID ? 'hidden' : 'auto')};
  }

  @media (max-width: 735px) {
    width: ${(props) => (props.$mode === HID ? '100%' : '87.5%')};
  }
`;

const AdjustableSidebar = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === COL ? 'block' : 'flex')};
    position: ${(props) => (props.$mode === HID ? 'fixed' : 'relative')};
    width: ${(props) => (props.$mode === HID ? '100%' : 'auto')};
  }
`;

function App2() {
  const [mode, setMode] = useState(window.innerWidth > 1023 ? EXP : COL);
  const [sidebarMode, setSidebarMode] = useState(window.innerWidth > 1023 ? COL : HID);

  useEffect(() => {
    const handleResize = () => {
      /* if wide screen, sidebar is in collapsed mode */
      if (window.innerWidth > 1023) {
        console.log('main is EXPANDED and sidebar is COLLAPSED');
        setMode(EXP);
        setSidebarMode(COL);
      /* if mobile screen, sidebar is hidden unless opened */
      } else {
        console.log('smol so main is ' + mode + ' sidebar is ' + sidebarMode);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures that this effect runs once on mount


  return (
    <Router>
      <>
        <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/projects" component={ProjectsPage}/>
        </Switch>
      </>
    </Router>
  )
}

export default App2;