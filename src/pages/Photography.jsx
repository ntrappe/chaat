import React from 'react';
import Page from '../components/Page';
import Footer from '../features/Footer';
import GlassNav from '../components/GlassNav/GlassNav';
import PhotoGrid from '../components/PhotoGrid';
import Section from '../components/Section';

import ArcticGl from '../assets/photos/arctic-glacier.jpeg';
import ArcticMt from '../assets/photos/arctic-mountain.jpeg';
import Atlantic from '../assets/photos/atlantic.jpeg';
import Avalanche from '../assets/photos/avalanche.jpeg';
import BlackRc from '../assets/photos/black-rock.jpeg';
import Cascades from '../assets/photos/cascades.jpeg';
import Climb from '../assets/photos/climb.jpeg';
import ContDiv from '../assets/photos/divide.jpeg';
import GreenkRc from '../assets/photos/green-rock.jpeg';
import Grinnell from '../assets/photos/grinnell.jpeg';
import Josephine from '../assets/photos/josephine.jpeg';
import Opening from '../assets/photos/opening.jpeg';
import QueensGarden from '../assets/photos/queens-garden.jpeg';
import RedwoodForest from '../assets/photos/redwood-forest.jpeg';
import RedwoodLight from '../assets/photos/redwood-light.jpeg';
import Rey from '../assets/photos/reynisfjara.jpeg';
import SahMeadow from '../assets/photos/sahale-meadow.jpeg';
import Sunset from '../assets/photos/sunset.jpeg';
import SunsetPt from '../assets/photos/sunset-point.jpeg';
import Talus from '../assets/photos/talus-rock.jpeg';
import WestRim from '../assets/photos/west-rim.jpeg';
import Windows from '../assets/photos/windows.jpeg';





function Photography({ }) {
  return (
    <Page id='photography-page' color='light'>
      <Page.Header>
        <GlassNav>
          <GlassNav.Pre sidebar={false}></GlassNav.Pre>
          <GlassNav.Title>Nicole Trappe</GlassNav.Title>
          <GlassNav.Menu>
            <GlassNav.Menu.Item>About</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Projects</GlassNav.Menu.Item>
            <GlassNav.Menu.Item link={'photography'}>Photography</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Art</GlassNav.Menu.Item>
            {/* <GlassNav.Menu.Item>Adventures</GlassNav.Menu.Item> */}
          </GlassNav.Menu>
        </GlassNav>
      </Page.Header>
      <Page.Main>
        <Section>
          <Section.Heading>Photography</Section.Heading>
          <Section.Subheading>
            Exploring the great outdoors through my lens. Captured on an iPhone SE.
          </Section.Subheading>
          <PhotoGrid.Title>Glacier National Park</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={Grinnell}
              alt={'Grey granite peak towering above an aqua covered lake'}
            >
              Grinnell Glacier, Oct 2023
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Avalanche}
              alt={'Lake reflecting mountains of gold and green trees'}
            >
              Avalanche Lake, Oct 2023
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={ContDiv}
              alt={'Mountain dotted in gold and green with two peaks in the background'}
            >
              Continental Divide, Oct 2023
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Josephine}
              alt={'Clear blue lake reflecting a granite peak and green pines'}
            >
              Josephine Lake, Oct 2023
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>Pinnacles National Park</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={Talus}
              alt={'Pink talus rocks dotted with green shrubs'}
            >
              High Peaks Trail, Jul 2021
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={GreenkRc}
              alt={'A cave covered in green lichen'}
            >
              Bear Gulch Caves, Feb 2022
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={BlackRc}
              alt={'A cave with fallen boulders bathed by sunlight'}
            >
              Bear Gulch Caves, Feb 2022
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Climb}
              alt={'A steep rocky slope with a handrail'}
            >
              High Peaks Trail, Jul 2021
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>Zion National Park</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={WestRim}
              alt={'A winding trail with a view of a valley and reddish domes'}
            >
              West Rim Trail, Nov 2021
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Sunset}
              alt={'Pink and orange wash across the domes and valley of Zion'}
            >
              Angel's Landing, Nov 2021
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>The Arctic</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={ArcticMt}
              alt={'A grey mountain is shrouded in fog above a calm sea'}
            >
              Spitsbergen, Sep 2022
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={ArcticGl}
              alt={'A bright blue glacier sits in calm water'}
            >
              Nordenskiöldbreen, Sep 2022
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>Redwood National Park</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={RedwoodForest}
              alt={'Three large redwood trees stand among green ferns'}
            >
              Boy Scott Tree Trail, Sep 2021
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={RedwoodLight}
              alt={'Sunlight illuminates the leaves of a redwood tree'}
            >
              Jedediah Smith Redwoods, Sep 2021
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>Bryce Canyon National Park</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={Windows}
              alt={'Towering walls of red rock and hoodoos against an azure sky'}
            >
              The Windows, Mar 2021
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={SunsetPt}
              alt={'A trail cuts through the red rock landscape and blankets of snow'}
            >
              Sunset Point, Mar 2022
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={QueensGarden}
              alt={'A trail wanders through the hoodoos and pink rock of Bryce'}
            >
              Queens Garden, Mar 2021
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Opening}
              alt={'Through a narrow opening of red rock, we see walls of hoodoos'}
            >
              Peek-a-Boo Loop Trail, Mar 2021
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>North Cascades National Park</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={SahMeadow}
              alt={'Sunlight shines in a meadow of pink and orange with grey mountains in the background'}
            >
              Sahale Arm, Sep 2023
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Cascades}
              alt={'Line after line of mountain, dotted with glaciers, rise above an emerald and sapphire lake'}
            >
              Sahale Glacier Trail, Sep 2023
            </PhotoGrid.Photo>
          </PhotoGrid>
          <PhotoGrid.Title>Iceland</PhotoGrid.Title>
          <PhotoGrid>
            <PhotoGrid.Photo 
              src={Rey}
              alt={'Black sand beach with vertical rock formations outlining a cave'}
            >
              Reynisfjara Beach, Sep 2022
            </PhotoGrid.Photo>
            <PhotoGrid.Photo 
              src={Atlantic}
              alt={'A rocky formation juts out of a stormy sea'}
            >
              North Atlantic Ocean, Sep 2022
            </PhotoGrid.Photo>
          </PhotoGrid>
        </Section>
      </Page.Main>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  )
}

export default Photography;