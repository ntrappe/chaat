import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavTitle from './NavTitle.jsx';
import NavActions from './NavActions.jsx';
import NavMenu from './NavMenu.jsx';
import NavPre from './NavPre.jsx';

/* Dark Scheme Colors */
const darkNavBack = 'rgba(13,13,13,0.6)';

/* Light Scheme Colors */
const lightNavBack = 'rgba(255,255,255,0.6)';

/* General Style Variables */
const navHeight = '2.75rem'
const navCompactHeight = '2.8rem';
const mobileWidthVar = 767;
const wideWidthVar = 1023;

const NavHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight};
  border-bottom: ${(props) => (props.$colorScheme === 'dark' ? `var(--asphalt)` : `var(--cloud)`)};

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
  background-color: ${(props) => (props.$colorScheme === 'dark' ? darkNavBack : lightNavBack)};
  transition: background-color .5s ease;
  transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  border-bottom: 0.8px solid;
  border-color: ${(props) => (props.$colorScheme === 'dark' ? `nav(--asphalt)` : `var(--cloud)`)};

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color .5s ease;
    transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  }

  @media (max-width: 767px) {
    min-height: ${(props) => (props.$navOpen ? '17em' : '100%')};
    background-color: ${(props) => (props.$navOpen ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.6)')};
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

function GlassHeader({ $colorScheme, $showSideBar, passSidebarClick }) {

  const [sideBarOpen, setSideBarOpen] = useState('closed');
  const [direction, setDirection] = useState('down');
  const [navOpen, setNavOpen] = useState(false);
  const [showChevron, setShowChevron] = useState(true);

  const handleSideBarClick = () => {
    const newState = sideBarOpen === 'closed' ? 'open' : 'closed';
    // setSideBarOpen((prevState) => (prevState === 'closed' ? 'open' : 'closed'));
    setSideBarOpen(newState);
    passSidebarClick(newState);
    setShowChevron(newState != 'open');
  }

  const handleChevronClick = () => {
    const newDirection = direction === 'up' ? 'down' : 'up';
    console.log('click on ' + direction + ' --> ' + newDirection);
    setDirection(newDirection);
    setNavOpen(newDirection === 'down' ? false : true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileWidthVar) {
        setDirection('down');
        setNavOpen(false);
      }

      if (window.innerWidth > wideWidthVar) {
        setSideBarOpen('closed');
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
      <NavHeader $colorScheme={$colorScheme}>
        <NavWrapper $navOpen={navOpen}>
          <NavBackground id="nav-background" $navOpen={navOpen} $colorScheme={$colorScheme}></NavBackground>
          <NavContent id="nav-content" $navOpen={navOpen}>
            <NavPre 
              $colorScheme={$colorScheme} 
              handleSideBarClick={handleSideBarClick}
              $showSideBar={$showSideBar}
            />
            <NavTitle 
              $colorScheme={$colorScheme} 
              $navOpen={navOpen}
            />
            <NavMenu 
              $colorScheme={$colorScheme}
              $navOpen={navOpen}
            />
            <NavActions
              $direction={direction} 
              handleChevronClick={handleChevronClick}
              $showChevron={showChevron}
            />
          </NavContent>
        </NavWrapper>
      </NavHeader>
    </>
  )
}
  
export default GlassHeader;