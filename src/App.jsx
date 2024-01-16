import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from './GlassHeader.jsx';
import FloatingAside from './FloatingAside.jsx';
import Sidebar from './Sidebar.jsx';
import CaseStudy from './CaseStudy.jsx';

const EXP = 'expanded';
const COL = 'collapsed';
const HID = 'hidden';

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

function App() {
  /* decide if header is dark or light theme */
  const colorScheme = 'light';
  /* decide if there will be a sidebar (left) or not */
  const showSideBar = true;

  /* by default sidebar can't be open so components will either be in
   * collapsed or expanded mode */
  const [mode, setMode] = useState(window.innerWidth > 1023 ? EXP : COL);
  /* by default sidebar is either attached to main page or hidden */
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

  const verifySidebarClick = (signal) => {
    console.log('received data from sidebar: ' + signal);
    if (signal === 'open') {
      setMode(HID);
      setSidebarMode(EXP);
      console.log('main is HIDDEN and sidebar is EXPANDED');
      document.getElementById('body').setAttribute('mode', 'sidebar');
    } else {
      setMode(COL);
      setSidebarMode(HID);
      console.log('main is COLLAPSED and sidebar is HIDDEN');
      document.getElementById('body').setAttribute('mode', 'all');
    }
  }

  return (
    <>
      <GlassHeader 
        $colorScheme={colorScheme} 
        $showSideBar={showSideBar} 
        passSidebarClick={verifySidebarClick}/>
      <MainWrapper id="main" $mode={mode} $sidebarMode={sidebarMode}>
        <AdjustableSidebar id="adjustable-sidebar" $mode={mode}>
          <Sidebar $mode={sidebarMode}/>
          <CaseStudy $mode={mode}/>
        </AdjustableSidebar>
        <FloatingAside $mode={mode}/>
      </MainWrapper>
    </>
  )
}

export default App;