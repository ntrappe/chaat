import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavTitle from './NavTitle.jsx';
import NavActions from './NavActions.jsx';
import NavMenu from './NavMenu.jsx';
import NavPre from './NavPre.jsx';

/* General Style Variables */
const navHeight = '2.8rem'
const navCompactHeight = '2.8rem';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const Arrow = {
  NONE: 'none',
  DOWN: 'down',
  UP: 'up',
}

const NavHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  height: var(--nav-height);

  @media and (max-width: 767px) {
    min-width: 320px;
    height: ${navCompactHeight};
  }
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 1;
`;

const NavBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--obsidian-glassy)` : `var(--white-glassy)`)};
  transition: background-color .5s ease;
  transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  border-bottom: 0.8px solid;
  border-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--pavement)` : `var(--cloud)`)};

  background: ${(props) => {
    if (props.$navState === States.EXPANDED) {
      return 'yellow';
    } else if (props.$navState === States.NARROW) {
      return 'pink';
    } else {
      return 'orange';
    }
  }};

  background-color: ${(props) => {
    if (props.$navState === States.EXPANDED) {
      return props.$colorScheme === 'dark' ? `var(--obsidian)` : 'white';
    } else {
      return props.$colorScheme === 'dark' ? `var(--obsidian-glassy)` : `var(--white-glassy)`;
    }
  }};

  min-height: ${(props) => (props.$navState === States.EXPANDED ? '17em' : '0')};

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color .5s ease;
    transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  }
}
`;

const NavContent = styled.div`
  display: flex;
  padding: 0 1.3rem;
  max-width: var(--nav-max-width);
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  justify-content: ${(props) => (props.$navState === States.HIDDEN ? 'flex-start' : 'space-between')};

  @media (max-width: 767px) {
    display: grid;
    padding: 0 0 0 .94rem;
    grid-template-columns: auto 1fr auto;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-areas: "pre-title title actions" "menu menu menu";
  }
`;

function GlassHeader({ $colorScheme, $showSideBar, $resetNav, bubbleUpNav, bubbleUpSidebar, bubbleUpClose }) {
  
  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
  const [chevronState, setChevronState] = useState(window.innerWidth > 767 ? Arrow.NONE : Arrow.DOWN);
  const [sidebarState, setSidebarState] = useState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);

  /**
   * On a page resize, this affects the states of the nav. If the page is greater than 767px,
   * nav is fully shown and is NARROW. If the page is smaller than that, it will be in compact form
   * and, by default, hidden with a chevron down. If the nav is open, a smaller resize does nothing 
   * (it stays open) but a larger will shift its state again. The sidebar will either be part of 
   * the screen if width is more than 1023px, or in a compact mode.
   */
  const handleResize = () => {
    // make sidebar narrow (part of screen)
    if (window.innerWidth > 1023) {
      setSidebarState(States.NARROW);
    // make sidebar compact
    } else if (window.innerWidth <= 1023 && sidebarState === States.NARROW) {
      setSidebarState(States.HIDDEN);
    // make nav narrow (fully seen)
    } else if (window.innerWidth > 767) {
      setNavState(States.NARROW);
      setChevronState(Arrow.NONE);
    // make nav hidden if not open on small resize
    } else if (window.innerWidth <= 767 && navState === States.NARROW) {
      setNavState(States.HIDDEN);
      setChevronState(Arrow.DOWN);
    }
  };

  /**
   * Passes function to child NavPre to indicate whether the sidebar button has been clicked. If
   * so then it will call on a function to notify its parent of the change and updates the sidebar 
   * state. If the sidebar is open, nav should not be open so we hide it.
   */
  const handleSidebarToggle = () => {
    const nextState = sidebarState === States.HIDDEN ? States.EXPANDED : States.HIDDEN;
    setSidebarState(nextState);   // update sidebar state
    bubbleUpSidebar(nextState);   // notify parent

    // if nav was open, we hide/close it while sidebar is open
    if (navState === States.EXPANDED) {
      setNavState(States.HIDDEN);
      setChevronState(Arrow.DOWN);
    } 
  };

  /**
   * In the compact form, nav is represented as either EXPANDED (drop-down) or HIDDEN. A chevron
   * points down when it is closed and up when open. This function is called when nav is
   * opened or closed and we update the chevron to match. We also notify the parent of the change 
   * in state.
   */
  const handleNavToggle = () => {
    const nextState = navState === States.HIDDEN ? States.EXPANDED : States.HIDDEN;
    setChevronState((prevState) => (prevState === Arrow.DOWN ? Arrow.UP : Arrow.DOWN));
    setNavState(nextState);   // update nav state
    bubbleUpNav(nextState);   // notify parent
  }

  useEffect(() => {
    if ($resetNav) {
      console.log('reset nav in GlassHeader');
      setNavState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
      setChevronState(window.innerWidth > 767 ? Arrow.NONE : Arrow.DOWN);
      setSidebarState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
      bubbleUpClose();
    }
  }, [$resetNav]);

  /**
   * Listen to window resizing which is dependent on the states
   * chevronState, navState, and sidebarState.
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [chevronState, navState, sidebarState]); 

  /**
   * Listen to an event that will be dispatched in NavMenu when the Projects page is clicked. When that
   * happens, we need to close nav (make it NARROW or HIDDEN) and adjust the chevron.
   */
  useEffect(() => {
    const closeNav = () => {
      console.log('close nav called in GlassHeader by listening to event in NavMenu');
      setNavState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
      setChevronState(window.innerWidth > 767 ? Arrow.NONE : Arrow.DOWN);
    }

    window.addEventListener('close nav', closeNav);

    return () => {
      window.removeEventListener('close nav', closeNav);
    }
  }, [navState, chevronState]);

  return (
    <>
      <NavHeader $colorScheme={$colorScheme}>
        <NavWrapper $navState={navState}>
          <NavBackground id="nav-background" $navState={navState} $colorScheme={$colorScheme}></NavBackground>
          <NavContent id="nav-content" $navState={navState}>
            <NavPre 
              $colorScheme={$colorScheme} 
              handleSideBarClick={handleSidebarToggle}
              $showSideBar={$showSideBar}
            />
            <NavTitle 
              $colorScheme={$colorScheme} 
            />
            {sidebarState !== States.EXPANDED && (
              <NavMenu 
                $colorScheme={$colorScheme}
                $navState={navState}
              />
            )}
            {(sidebarState !== States.EXPANDED && navState !== States.NARROW) && (
              <NavActions
                $chevronState={chevronState}
                handleChevronClick={handleNavToggle}
              />
            )}
          </NavContent>
        </NavWrapper>
      </NavHeader>
    </>
  )
}
  
export default GlassHeader;