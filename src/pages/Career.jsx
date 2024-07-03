import React from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';
import Tile from '../components/Core/Tile.jsx';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  background-color: skyblue;
  display: block;

`;

const OverviewSection = styled.section`
  background-color: teal;
  height: 130px;
`;

const ResponsiveTileSection = styled.section`
  display: block;
  max-width: 1260px;
  width: 87.5vw;
  margin-inline: auto;
  background-color: pink;

  @media (max-width: 734px) {
    max-width: 480px;
  }
`;

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  grid-column-gap: 30px;
  column-gap: 30px;
  grid-row-gap: 30px;
  row-gap: 30px;
  // background-color: beige;
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
      <MainWrapper className='main'>
        <OverviewSection>hi</OverviewSection>
        <ResponsiveTileSection id='responsive-tile-section'>
          <TileGrid id='tile-grid'>
            <Tile>
              <Tile.Front>
                <Tile.Front.Title>Hello World</Tile.Front.Title>
                <Tile.Front.Subtitle>Hola Mundo de Aca</Tile.Front.Subtitle>
              </Tile.Front>
              <Tile.Back>
                <Tile.Back.Description>This is a description</Tile.Back.Description>
              </Tile.Back>
            </Tile>
            <Tile>
              <Tile.Front>
                <Tile.Front.Title>Vroom</Tile.Front.Title>
                <Tile.Front.Subtitle>Cars driving now</Tile.Front.Subtitle>
              </Tile.Front>
              <Tile.Back>
                <Tile.Back.Description>This is a description</Tile.Back.Description>
              </Tile.Back>
            </Tile>
          </TileGrid>
        </ResponsiveTileSection>
        {/* <CareerWrapper>
          <CareerTitle>Career</CareerTitle>
          <Note>
            <h5>Note</h5>
            <p>This page is currently under construction. Please check back later.</p>
          </Note>
        </CareerWrapper> */}
      </MainWrapper>
      {$navState !== States.EXPANDED && (
        <ThickFooter $colorScheme={$colorScheme} />
      )}
    </>
  )
}

export default Career;