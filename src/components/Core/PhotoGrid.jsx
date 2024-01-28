import React from 'react';
import LazyLoad from 'react'
import styled from 'styled-components';
import ArcticGl from '../../assets/photos/arctic-glacier.jpeg';
import ArcticMt from '../../assets/photos/arctic-mountain.jpeg';
import Atlantic from '../../assets/photos/atlantic.jpeg';
import Avalanche from '../../assets/photos/avalanche.jpeg';
import BlackRc from '../../assets/photos/black-rock.jpeg';
import Cascades from '../../assets/photos/cascades.jpeg';
import Climb from '../../assets/photos/climb.jpeg';
import ContDiv from '../../assets/photos/divide.jpeg';
import GreenkRc from '../../assets/photos/green-rock.jpeg';
import Grinnell from '../../assets/photos/grinnell.jpeg';
import Josephine from '../../assets/photos/josephine.jpeg';
import Opening from '../../assets/photos/opening.jpeg';
import QueensGarden from '../../assets/photos/queens-garden.jpeg';
import RedwoodForest from '../../assets/photos/redwood-forest.jpeg';
import RedwoodLight from '../../assets/photos/redwood-light.jpeg';
import Rey from '../../assets/photos/reynisfjara.jpeg';
import SahMeadow from '../../assets/photos/sahale-meadow.jpeg';
import Sunset from '../../assets/photos/sunset.jpeg';
import SunsetPt from '../../assets/photos/sunset-point.jpeg';
import Talus from '../../assets/photos/talus-rock.jpeg';
import Windows from '../../assets/photos/windows.jpeg';
import WestRim from '../../assets/photos/west-rim.jpeg';

const GridWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;
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

function PhotoGrid() {
  return (
    <>
      <GridWrapper id='photo-grid'>
        <GridTitle>Photography</GridTitle>
        <GridTag>Exploring the great outdoors through my lens. Captured on an iPhone SE.</GridTag>
        <GridCardsTitle>Glacier National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={Grinnell}
                alt='Grey granite peak towering above an aqua covered lake'
              />
            </CardImage>
            <CardLabel>Grinnell Glacier, Oct 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Avalanche}
                alt='Lake reflecting mountains of gold and green trees'
              />
            </CardImage>
            <CardLabel>Avalanche Lake, Oct 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={ContDiv}
                alt='Mountain dotted in gold and green with two peaks in the background' 
              />
            </CardImage>
            <CardLabel>Continental Divide, Oct 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Josephine}
                alt='Clear blue lake reflecting a granite peak and green pines'
              />
            </CardImage>
            <CardLabel>Josephine Lake, Oct 2023</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Pinnacles National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={Talus}
                alt='Pink talus rocks dotted with green shrubs'
              />
            </CardImage>
            <CardLabel>High Peaks Trail, Jul 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={GreenkRc}
                alt='A cave covered in green lichen'
              />
            </CardImage>
            <CardLabel>Bear Gulch Caves, Feb 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={BlackRc}
                alt='A cave with fallen boulders bathed by sunlight'
              />
            </CardImage>
            <CardLabel>Bear Gulch Caves, Feb 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Climb}
                alt='A steep rocky slope with a handrail'
              />
            </CardImage>
            <CardLabel>High Peaks Trail, Jul 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Zion National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={WestRim}
                alt='A winding trail with a view of a valley and reddish domes'
              />
            </CardImage>
            <CardLabel>West Rim Trail, Nov 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Sunset}
                alt='Pink and orange wash across the domes and valley of Zion'
              />
            </CardImage>
            <CardLabel>Angel's Landing, Nov 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>The Arctic</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={ArcticMt}
                alt='A grey mountain is shrouded in fog above a calm sea'
              />
            </CardImage>
            <CardLabel>Spitsbergen, Sep 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={ArcticGl}
                alt='A bright blue glacier sits in calm water'
              />
            </CardImage>
            <CardLabel>Nordenskiöldbreen, Sep 2022</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Redwood National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={RedwoodForest}
                alt='Three large redwood trees stand among green ferns' 
              />
            </CardImage>
            <CardLabel>Boy Scott Tree Trail, Sep 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={RedwoodLight}
                alt='Sunlight illuminates the leaves of a redwood tree'
              />
            </CardImage>
            <CardLabel>Jedediah Smith Redwoods, Sep 2021</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Bryce Canyon National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={Windows}
                alt='Towering walls of red rock and hoodoos against an azure sky'
              />
            </CardImage>
            <CardLabel>The Windows, Mar 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={SunsetPt}
                alt='A trail cuts through the red rock landscape and blankets of snow'
              />
            </CardImage>
            <CardLabel>Sunset Point, Mar 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={QueensGarden} 
                alt='A trail wanders through the hoodoos and pink rock of Bryce'
              />
            </CardImage>
            <CardLabel>Queens Garden, Mar 2021</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Opening}
                alt='Through a narrow opening of red rock, we see walls of hoodoos'
              />
            </CardImage>
            <CardLabel>Peek-a-Boo Loop Trail, Mar '21</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>North Cascades National Park</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={SahMeadow}
                alt='Sunlight shines in a meadow of pink and orange with grey mountains in the background'
              />
            </CardImage>
            <CardLabel>Sahale Arm, Sep 2023</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Cascades}
                alt='Line after line of mountain, dotted with glaciers, rise above an emerald and sapphire lake'
              />
            </CardImage>
            <CardLabel>Sahale Glacier Trail, Sep 2023</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Iceland</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src={Rey}
                alt='Black sand beach with vertical rock formations outlining a cave'
              />
            </CardImage>
            <CardLabel>Reynisfjara Beach, Sep 2022</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src={Atlantic}
                alt='A rocky formation juts out of a stormy sea' />
            </CardImage>
            <CardLabel>North Atlantic Ocean, Sep 2022</CardLabel>
          </Card>
        </GridCards>
      </GridWrapper>
    </>
  )
}
  
export default PhotoGrid;