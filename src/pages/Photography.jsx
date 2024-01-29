import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import PhotoGrid from '../components/Core/PhotoGrid.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const COLORSCHEME = 'light';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  align-self: center;
  /* top | right | bottom | left */
  margin: 0 auto 5em auto;

  @media (max-width: 1023px) {
    width: 692px;
  }

  @media (max-width: 767px) {
    width: 87.5%;
`;

const DarkOverlay = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13,13,13,0.10);
  z-index: 1000;
`;

function Photography() {
  const body = document.getElementById('body');
  body.setAttribute('colorscheme', COLORSCHEME);

  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
  const [scroll, setScroll] = useState(true);

  const handleNavToggle = (state) => {
    setNavState(state);
    setScroll(state !== States.EXPANDED);
  }

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.position = scroll ? 'unset' : 'fixed';
    }
  }, [scroll]);

  return (
    <>
      <GlassHeader 
        $colorScheme={'light'} 
        $showSideBar={false} 
        bubbleUpSidebar={() => console.log('no sidebar')}
        bubbleUpNav={handleNavToggle}
      />
      {navState === States.EXPANDED && (
        <DarkOverlay />
      )}
      <MainWrapper id="main">
        <PhotoGrid />
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(navState !== States.EXPANDED) && (
        <ThickFooter $colorScheme={COLORSCHEME} />
      )}
    </>
  )
}

export default Photography;