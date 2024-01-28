import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import FloatingAside from '../components/Core/FloatingAside.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const COLORSCHEME = 'light';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  display: flex;
  width: var(--max-main-width);
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding-bottom: 3em;
  background-color: plum;

  @media (max-width: 1023px) {
    width: var(--med-main-width);
  }

  @media (max-width: 735px) {
    width: ${(props) => (props.$projectState === States.HIDDEN ? '100%' : '87.5%')};
  }
`;

const AdjustableSidebar = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$projectState === States.EXPANDED ? 'flex' : 'block')};
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

function Project({ customComponent: CaseStudy }) {
  const body = document.getElementById('body');
  body.setAttribute('page', 'projects');

  const [sidebarState, setSidebarState] = useState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
  const [projectState, setProjectState] = useState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
  const [scroll, setScroll] = useState(true);

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

  const closeSidebar = (signal) => {
    console.log(signal);
    setSidebarState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
    setProjectState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
  }

  // [width <= 1023 only] sidebar can only be EXP or HID
  // [width <= 1023 only] project can only be shown or not
  const handleSidebarToggle = (state) => {
    // console.log(`@Project @sidebar: nav ${navState} & sidebar ${state}`);
    setSidebarState((prevState) => (prevState === States.HIDDEN ? States.EXPANDED : States.HIDDEN));
    setProjectState((prevState) => (prevState === States.EXPANDED ? States.HIDDEN : States.EXPANDED));
    setScroll(state !== States.EXPANDED);
  };

  const handleNavToggle = (state) => {
    // console.log(`@Project @nav: nav ${state} & sidebar ${sidebarState}`);
    setNavState(state);
    setScroll(state !== States.EXPANDED);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log(`@Project @resize sidebar ${sidebarState} & project ${projectState}`);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarState, navState, projectState]);

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.position = scroll ? 'unset' : 'fixed';
    }
  }, [scroll]);

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
          <Sidebar
            $sidebarState={sidebarState}
            closeSidebar={closeSidebar}
          />
          <CaseStudy 
            $sidebarState={sidebarState}
            $projectState={projectState}
          />
        </AdjustableSidebar>
        <FloatingAside $mode={projectState} offsetCaseStudy={() => console.log('heh')} />
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(projectState !== States.HIDDEN && navState !== States.OPEN) && (
        <ThickFooter $colorScheme={COLORSCHEME} />
      )}
    </>
  )
}

export default Project;