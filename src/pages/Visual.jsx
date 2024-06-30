import React from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import PhotoGrid from '../components/Core/PhotoGrid.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  display: flex;
  width: var(--max-main-width);
  align-self: center;
  /* top | right | bottom | left */
  margin: 0 auto 5em auto;

  @media (max-width: 1023px) {
    width: var(--med-main-width);
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

function Visual({ $navState, $colorScheme, handleNavToggle }) {
  return (
    <>
      <GlassHeader 
        $colorScheme={$colorScheme} 
        $showSideBar={false} 
        bubbleUpSidebar={() => console.log('no sidebar')}
        bubbleUpNav={handleNavToggle}
      />
      {$navState === States.EXPANDED && (
        <DarkOverlay />
      )}
      <MainWrapper id='main'>
        <PhotoGrid />
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {($navState !== States.EXPANDED) && (
        <ThickFooter $colorScheme={$colorScheme} />
      )}
    </>
  )
}

export default Visual;