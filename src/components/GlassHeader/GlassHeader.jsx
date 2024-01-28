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
  max-width: 950px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: grid;
    padding: 0 0 0 .94rem;
    grid-template-columns: auto 1fr auto;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-areas: "pre-title title actions" "menu menu menu";
  }
`;

function GlassHeader({ $colorScheme, $showSideBar, bubbleUpNav, bubbleUpSidebar }) {

  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
  const [chevronState, setChevronState] = useState(window.innerWidth > 767 ? Arrow.NONE : Arrow.DOWN);
  const [sidebarState, setSidebarState] = useState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
  const [scroll, setScroll] = useState('scroll');

  const handleResize = () => {
    if (window.innerWidth > 1023) {
      setSidebarState(States.NARROW);
    } else if (window.innerWidth <= 1023 && sidebarState === States.NARROW) {
      setSidebarState(States.HIDDEN);
    } else if (window.innerWidth > 767) {
      console.log(`resize > 1023: nav ${navState} & chevron ${chevronState}`);
      setNavState(States.NARROW);
      setChevronState(Arrow.NONE);
    } else if (window.innerWidth <= 767 && navState === States.NARROW) {
      console.log('thinks nav is narrow [default]');
      setNavState(States.HIDDEN);
      setChevronState(Arrow.DOWN);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarState((prevState) => (prevState === States.HIDDEN ? States.EXPANDED : States.HIDDEN));
    bubbleUpSidebar();
    if (navState === States.EXPANDED) {
      setNavState(States.HIDDEN);
      setChevronState(Arrow.DOWN);
      console.log('shut down nav!');
    }
  };

  const handleNavToggle = () => {
    console.log('clicked chevron on ' + chevronState);
    setChevronState((prevState) => (prevState === Arrow.DOWN ? Arrow.UP : Arrow.DOWN));
    setNavState((prevState) => (prevState === States.HIDDEN ? States.EXPANDED : States.HIDDEN));
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    bubbleUpNav(navState);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [chevronState, navState, sidebarState, scroll]); 

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
            {navState !== States.HIDDEN && (
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