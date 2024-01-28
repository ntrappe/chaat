import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import ProjectGrid from '../components/Core/ProjectGrid.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const COLORSCHEME = 'light';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  display: flex;
  width: calc(var(--max-main-width) - var(--aside-width));
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3em;

  @media (max-width: 767px) {
    width: ${(props) => (props.$projectState === States.HIDDEN ? '100%' : '87.5%')};
  }
`;

const AdjustableSidebar = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$projectState === States.EXPANDED ? 'flex' : 'block')};
    // position: ${(props) => (props.$projectState === States.HIDDEN ? 'fixed' : 'relative')};
    width: ${(props) => (props.$projectState === States.HIDDEN ? '100%' : 'auto')};
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13,13,13,0.25);
  z-index: 1000;
`;

function ProjectsHome() {
  const body = document.getElementById('body');
  const root = document.getElementById('root');
  body.setAttribute('colorscheme', COLORSCHEME);

  const [sidebarState, setSidebarState] = useState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
  const [projectState, setProjectState] = useState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);

  // width > 1023 so sidebar can only be NAR or same
  const handleResize = () => {
    if (window.innerWidth > 1023) {
      setSidebarState(States.NARROW);
      setProjectState(States.NARROW);
    } else if (window.innerWidth <= 1023 && sidebarState === States.NARROW) {
      setSidebarState(States.HIDDEN);
      setProjectState(States.EXPANDED);
    }
  };

  // [width <= 1023 only] sidebar can only be EXP or HID
  // [width <= 1023 only] project can only be shown or not
  const handleSidebarToggle = (state) => {
    console.log('sidebar clicked, projects thinks ' + state);
    setSidebarState((prevState) => (prevState === States.HIDDEN ? States.EXPANDED : States.HIDDEN));
    setProjectState((prevState) => (prevState === States.EXPANDED ? States.HIDDEN : States.EXPANDED));
  };

  const handleNavToggle = (state) => {
    setNavState(state);
    root.setAttribute('scroll', state === States.EXPANDED ? 'noscroll' : 'scroll');
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarState, navState, projectState]);

  useEffect(() => {
    console.log('Click --> nav: ', navState);
  }, [navState]);

  useEffect(() => {
    console.log('Current pathname:', window.location.pathname);
  }, [window.location.pathname]);

  return (
    <>
      <GlassHeader 
        $colorScheme={COLORSCHEME} 
        $showSideBar={true} 
        bubbleUpSidebar={handleSidebarToggle}
        bubbleUpNav={handleNavToggle}
      />
      {navState === States.EXPANDED && (
        <DarkOverlay />
      )}
      <MainWrapper id="main" $projectState={projectState}>
        <AdjustableSidebar id="adjustable-sidebar" $projectState={projectState}>
          {sidebarState !== States.HIDDEN && (
            <Sidebar $mode={sidebarState} />
          )}
          {projectState !== States.HIDDEN && (
            <ProjectGrid $mode={projectState} $navState={navState} />
          )}   
        </AdjustableSidebar>
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(projectState !== States.HIDDEN && navState !== States.OPEN) && (
        <ThickFooter $colorScheme={COLORSCHEME} />
      )}
    </>
  )
}

export default ProjectsHome;