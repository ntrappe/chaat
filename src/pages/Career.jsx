import React from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  display: flex;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  height: 100vh; /* maybe change later, force footer below page end */

  @media (max-width: 1023px) {
    width: 600px;
  }

  @media (max-width: 767px) {
    width: 87.5%;
`;

const CareerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;
`;

const CareerTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const Note = styled.div`
  width: fit-content;
  border: 1px solid var(--violet);
  border-radius: 12px;
  background-color: var(--lilac);
  padding: 17px 15px;
  
  h5 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--violet);
    padding-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
    color: var(--asphalt);

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }
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

function Career({ $navState, $colorScheme, handleNavToggle }) {
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
      <MainWrapper id="main">
        <CareerWrapper>
          <CareerTitle>Career</CareerTitle>
          <Note>
            <h5>Note</h5>
            <p>This page is currently under construction. Please check back later.</p>
          </Note>
        </CareerWrapper>
      </MainWrapper>
      {$navState !== States.EXPANDED && (
        <ThickFooter $colorScheme={$colorScheme} />
      )}
    </>
  )
}

export default Career;