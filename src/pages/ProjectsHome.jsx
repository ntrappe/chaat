import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import ProjectGrid from '../components/Core/ProjectGrid.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const EXP = 'expanded';
const COL = 'collapsed';
const HID = 'hidden';

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3em;

  @media (max-width: 1023px) {
    width: ${(props) => props.$sidebarMode === EXP ? '100%' : '692px'};
    position: ${(props) => (props.$mode === 'HID' ? 'fixed' : 'relative')};
    top: ${(props) => (props.$mode === HID ? '1rem' : '0')};
    overflow: ${(props) => (props.$mode === HID ? 'hidden' : 'none')};
  }

  @media (max-width: 767px) {
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

function ProjectsHome() {
  const body = document.getElementById('body');
  body.setAttribute('page', 'projects');

  /* by default sidebar can't be open so components will either be in collapsed or expanded mode */
  const [mode, setMode] = useState(window.innerWidth > 1023 ? EXP : COL);
  /* by default sidebar is either attached to main page or hidden */
  const [sidebarMode, setSidebarMode] = useState(window.innerWidth > 1023 ? COL : HID);
  /* need to know if nav is open to freeze content below it */
  const [navOpen, setNavOpen] = useState(null);

  const verifySidebarClick = (signal) => {
    if (signal === 'open') {
      setMode(HID);
      setSidebarMode(EXP);
      body.setAttribute('mode', 'sidebar');
      setNavOpen('closed');
    } else {
      setMode(COL);
      setSidebarMode(HID);
      body.setAttribute('mode', 'all');
    }
  }

  const verifyNavOpen = (signal) => {
    setNavOpen(signal ? 'open' : 'closed');
  }

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
    <>
      <GlassHeader 
        $colorScheme={'light'} 
        $showSideBar={true} 
        passSidebarClick={verifySidebarClick}
        passNavClick={verifyNavOpen}
      />
      <MainWrapper id="main" $mode={mode} $sidebarMode={sidebarMode}>
        <AdjustableSidebar id="adjustable-sidebar" $mode={mode}>
          <Sidebar $mode={sidebarMode} />
          <ProjectGrid $mode={mode} $navOpen={navOpen} />
        </AdjustableSidebar>
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(navOpen !== 'open' && mode !== HID) && (
        <ThickFooter $colorScheme={'light'} />
      )}
    </>
  )
}

export default ProjectsHome;