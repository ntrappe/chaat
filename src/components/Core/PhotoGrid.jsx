import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArcticGl from '../../assets/photos/arctic-glacier.png';
import ArcticMt from '../../assets/photos/arctic-mountain.png';
import BlackRc from '../../assets/photos/black-rock.png';
import GreenkRc from '../../assets/photos/green-rock.png';
import Talus from '../../assets/photos/talus-rock.png';
import Windows from '../../assets/photos/windows.png';
import SunsetPt from '../../assets/photos/sunset-point.png';
import Sunset from '../../assets/photos/sunset.png';
import Redwood from '../../assets/photos/redwood.png';
import Grinnell from '../../assets/photos/grinnell.png';
import Cascades from '../../assets/photos/cascades.png';
import Josephine from '../../assets/photos/josephine.png';
import Avalanche from '../../assets/photos/avalanche.png';
import ContDiv from '../../assets/photos/cont-divide.png';
import Climb from '../../assets/photos/climb.png';
import LeafLight from '../../assets/photos/leaf-light.png';
import SahMeadow from '../../assets/photos/sahale-meadow.png';
import Rey from '../../assets/photos/reynisfjara.png';
import Atlantic from '../../assets/photos/atlantic.png';

const GridWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;

  @media (max-width: 767px) {
    position: ${(props) => (props.$navOpen === 'open' ? 'fixed' : 'relative')};
    left: ${(props) => (props.$navOpen === 'open' ? '0' : 'unset')};
    margin-left: ${(props) => (props.$navOpen === 'open' ? '6.25%' : 'auto')};
    margin-right: ${(props) => (props.$navOpen === 'open' ? '6.25%' : 'auto')};
  }
`;

const GridTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const GridTag = styled.h2`
  margin-bottom: 30px;
  color: var(--wet-concrete);

  @media (max-width: 767px) {
    font-size: 1.15rem;
  }
`;

const GridCardsTitle = styled.h3`
  margin-top: 0.8em;
  color: var(--asphalt);

  @media (max-width: 767px) {
    font-size: 1.35rem;
  }
`;

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px)); /* 2 cards across */
  grid-auto-flow: row;
  gap: 20px;
  margin-top: 0.8em;

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* 1 card across */
  }
`;

const Card = styled.div`
  grid-column: span 1;
  min-width: 0;

  @media (max-width: 767px) {
    grid-column: span 2;
  }
`;

const CardLabel = styled.h4`
  padding: 15px 0; 
  color: var(--wet-concrete);

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const CardImage = styled.div`
  display: block;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: 18px;
  overflow: hidden;
  grid-column: span 2;
  align-items: center;
  overflow: hidden;

  img {
    display: block;
    aspect-ratio: 10/7;
    max-width: 100%;
    object-position: center;
    object-fit: cover;
    margin: 0;
    width: 100%;
  }

  @media (max-width: 735px) {
    grid-column: span 1;
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

function PhotoGrid({ $navOpen }) {
  
  return (
    <>
      <GridWrapper id="photo-grid" $navOpen={$navOpen}>
        {$navOpen === 'open' && (
          <DarkOverlay />
        )}
        <GridTitle>Photography</GridTitle>
        <GridTag>Exploring the great outdoors through my lens. Captured on an iPhone SE.</GridTag>
        <GridCardsTitle>Glacier National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={Grinnell}/>
            </CardImage>
            <CardLabel>Grinnell Glacier, Oct 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={Avalanche}/>
            </CardImage>
            <CardLabel>Avalanche Lake, Oct 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={ContDiv}/>
            </CardImage>
            <CardLabel>Continental Divide, Oct 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={Josephine}/>
            </CardImage>
            <CardLabel>Josephine Lake, Oct 2023</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Pinnacles National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={Talus}/>
            </CardImage>
            <CardLabel>High Peaks Trail, Jul 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={GreenkRc}/>
            </CardImage>
            <CardLabel>Bear Gulch Caves, Feb 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={BlackRc}/>
            </CardImage>
            <CardLabel>Bear Gulch Caves, Feb 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={Climb}/>
            </CardImage>
            <CardLabel>High Peaks Trail, Jul 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Zion National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src="/src/assets/photos/west-rim.png"/>
            </CardImage>
            <CardLabel>West Rim Trail, Nov 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={Sunset}/>
            </CardImage>
            <CardLabel>Angel's Landing, Nov 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>The Arctic</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={ArcticMt}/>
            </CardImage>
            <CardLabel>Spitsbergen, Sep 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={ArcticGl}/>
            </CardImage>
            <CardLabel>Nordenskiöldbreen, Sep 2022</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Redwood National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={Redwood}/>
            </CardImage>
            <CardLabel>Boy Scott Tree Trail, Sep 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={LeafLight}/>
            </CardImage>
            <CardLabel>Jedediah Smith Redwoods, Sep 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Bryce Canyon National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={Windows}/>
            </CardImage>
            <CardLabel>The Windows, Mar 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={SunsetPt}/>
            </CardImage>
            <CardLabel>Sunset Point, Mar 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src="/src/assets/photos/queens-garden.png"/>
            </CardImage>
            <CardLabel>Queens Garden, Mar 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src="/src/assets/photos/opening.png"/>
            </CardImage>
            <CardLabel>Peek-a-Boo Loop Trail, Mar '21</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Redwood National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src="/src/assets/photos/redwood.png"/>
            </CardImage>
            <CardLabel>Boy Scott Tree Trail, Sep 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src="/src/assets/photos/leaf-light.png"/>
            </CardImage>
            <CardLabel>Jedediah Smith Redwoods, Sep 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>North Cascades National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={SahMeadow}/>
            </CardImage>
            <CardLabel>Sahale Arm, Sep 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={Cascades}/>
            </CardImage>
            <CardLabel>Sahale Glacier Trail, Sep 2023</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Iceland</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img src={Rey}/>
            </CardImage>
            <CardLabel>Reynisfjara Beach, Sep 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img src={Atlantic}/>
            </CardImage>
            <CardLabel>North Atlantic Ocean, Sep 2022</CardLabel>
          </Card>
        </GridCards>
      </GridWrapper>
    </>
  )
}
  
export default PhotoGrid;