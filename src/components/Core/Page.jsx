import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../GlassHeader/GlassHeader.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx';
import ThickFooter from '../Footer/ThickFooter.jsx';
import FloatingAside from './FloatingAside.jsx';

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
  padding-bottom: 3em;

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

function Page({ customComponent: SubPage, showAside }) {
  const body = document.getElementById('body');
  body.setAttribute('colorscheme', COLORSCHEME);

  const [sidebarState, setSidebarState] = useState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
  const [projectState, setProjectState] = useState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
  const [scroll, setScroll] = useState(true);

  /**
   * On a page resize, this affects the states of the sidebar. If the page is
   * greater than 1023px, it is narrow (shows up as a fixed width). If not, it
   * will start off as hidden. If the page resizes while the sidebar is open but
   * not more than 1023px, nothing changes to the state. However, if it resizes
   * while open (EXPANDED) to greater than 1023px, it becomes narrow.
   */
  const handleResize = () => {
    // make sidebar narrow (part of screen)
    if (window.innerWidth > 1023) {
      setSidebarState(States.NARROW);
      setNavState(States.NARROW);
      setScroll(true);
    // make sidebar hidden if not open on a smaller resize
    } else if (window.innerWidth <= 1023 && sidebarState === States.NARROW) {
      setSidebarState(States.HIDDEN);
    }
  };

  /**
   * The button to open and close sidebar is part of the header so the sidebar does 
   * not have access to it. We use this function to pass along behavior from a click
   * in the header to other components.
   * 
   * The sidebar is either open (EXPANDED) or closed (HIDDEN). When the sidebar is 
   * open, no scrolling is allowed.
   * 
   * @param {Object} state sidebar can be HIDDEN, EXPANDED, or NARROW
   */
  const handleSidebarToggle = (state) => {
    setSidebarState((prevState) => (prevState === States.HIDDEN ? States.EXPANDED : States.HIDDEN));
    setProjectState((prevState) => (prevState === States.EXPANDED ? States.HIDDEN : States.EXPANDED));
    setScroll(state !== States.EXPANDED);
  };

  /**
   * We need to know what state nav is in. However, nav is part of the header which we
   * don't have access to. So we pass the header a function to notify us of when the
   * nav changed state.
   * 
   * Nav is either open (EXPANDED) or closed (HIDDEN). When nav is open, no scrolling
   * is allowed.
   * 
   * @param {*} state 
   */
  const handleNavToggle = (state) => {
    setNavState(state);
    setScroll(state !== States.EXPANDED);
  }

  /**
   * When we select a new project, only that case study component is updated.
   * This means that even the sidebar will stay open because it's not aware of
   * any other change. We need to update all the states to represent this reset.
   */
  useEffect(() => {
    const closeSidebar = () => {
      setSidebarState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
      setProjectState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
    }

    window.addEventListener('project selected', closeSidebar);

    return () => {
      window.removeEventListener('project selected', closeSidebar);
    }
  }, [sidebarState, projectState]);


  /**
   * Listen to window resizing which is dependent on the states
   * sidebarState, navState, and projectState
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarState, navState, projectState]);

  /**
   * Listen to changes to the scroll state because if we want no scrolling,
   * then root is updated to be fixed.
   */
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.position = scroll ? 'unset' : 'fixed';
    }
  }, [scroll]);

  /**
   * Listen to an event that will be dispatched in NavMenu when the Projects page is 
   * clicked. When we select a new project (or go to that page), only that case study 
   * component is updated. Everything else stays the same which means the header and 
   * sidebar can remain in an old state. We want the page to act like we've reset everything
   * so we want to scroll, nav should be narrow or hidden, etc.
   */
  useEffect(() => {
    const closeNav = () => {
      setScroll(true);
      setSidebarState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
      setProjectState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
      setNavState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
    }

    window.addEventListener('close nav', closeNav);

    return () => {
      window.removeEventListener('close nav', closeNav);
    }
  }, [navState, scroll, sidebarState, projectState]);

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
          <Sidebar $sidebarState={sidebarState} />
          <SubPage id="single-proj" $mode={projectState} $navState={navState} />
        </AdjustableSidebar>
      {showAside && (
        <FloatingAside $mode={projectState} />
      )}
      </MainWrapper>
      {(projectState !== States.HIDDEN && navState !== States.OPEN) && (
        <ThickFooter $colorScheme={COLORSCHEME} />
      )}
    </>
  )
}

export default Page;