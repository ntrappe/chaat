import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader';
import Hello from '../components/Home/Hello';
import Cairns from '../assets/page-icons/cairns.png';
import Mushroom from '../assets/page-icons/mushroom.png';
import Lego from '../assets/page-icons/lego.png';
import Subtitles from '../assets/page-icons/subtitles.png';
import Hand from '../assets/page-icons/hand.png';
import Palette from '../assets/page-icons/palette.png';

import Footer from '../features/Footer.jsx';
import ProjectCarousel from '../features/ProjectCarousel.jsx';
import ValuesCarousel from '../features/ValuesCarousel.jsx';
import GraphicsCarousel from '../features/GraphicsCarousel.jsx';
// import ServicesCarousel from '../features/ServicesCarousel.jsx';
import Section from '../components/Section.jsx';
import GlassNav from '../components/GlassNav/GlassNav.jsx';
// import TechMosaic from '../features/TechMosaic.jsx';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  background-color: inherit;
  height: 100%;

  @media (max-width: 767px) {
    top: ${(props) => (props.$navState === States.EXPANDED ? `var(--nav-height)` : 'unset')};
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13,13,13,0.75);
  z-index: 1000;
`;

const HelloSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 5em;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  @media (max-width: 734px) {
    padding: 2.5rem 1rem;
  }
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  width: 692px;

  h2 {
    font-family: 'SF Pro Display';
    text-align: center;
    color: var(--samoyed);
    font-weight: 500;
    line-height: 1.08;
    font-size: 48px;
    letter-spacing: -.003em;
    margin: 0;

    @media (max-width: 1068px) {
      font-size: 40px;
    }

    @media (max-width: 734px) {
      font-size: 32px;
    }
  }

  p {
    font-family: 'SF Pro Display';
    text-align: center;
    color: var(--samoyed);
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: .012em;
    margin-top: 1.6em;
    font-size: 21px;

    @media (max-width: 1068px) {
      font-size: 20px;
    }

    @media (max-width: 734px) {
      font-size: 19px;
      line-height: 1.6;
    }
  }

  a {
    color: var(--shark);
    font-weight: 400;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 734px) {
    width: 87.5%;
  }
`;



function Home({ $navState, $colorScheme, handleNavToggle }) {
  // Height of hello message depends on width of screen
  const [helloHeight, setHelloHeight] = useState(0);
  
  /**
   * Adjust side of background image as width becomes more or less narrow.
   */
  useEffect(() => {
    const helloBackground = document.getElementById('hello-background');
    if (helloBackground) { /* if rendered in DOM */
      setHelloHeight(helloBackground.clientHeight);
    }

    const handleResize = () => {
      if (helloBackground) { /* if rendered in DOM */
        setHelloHeight(helloBackground.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [helloHeight]);

  return (
    <>
      {/* <GlassHeader 
        $colorScheme={$colorScheme} 
        $showSideBar={false} 
        bubbleUpSidebar={() => console.log('no sidebar')}
        bubbleUpNav={handleNavToggle}
      />
      {$navState === States.EXPANDED && (
        <DarkOverlay />
      )} */}
      <GlassNav>
        <GlassNav.Title>Hello World</GlassNav.Title>
        <GlassNav.Menu>
          <GlassNav.Menu.Item>Overview</GlassNav.Menu.Item>
          <GlassNav.Menu.Item>Features</GlassNav.Menu.Item>
          <GlassNav.Menu.Item>Control</GlassNav.Menu.Item>
          <GlassNav.Menu.Item>Transparency Report</GlassNav.Menu.Item>
          <GlassNav.Menu.Item>Privacy Policy</GlassNav.Menu.Item>
        </GlassNav.Menu>
      </GlassNav>
      <MainWrapper $navState={$navState}>
        <HelloSection id="hello-section" style={{ height: helloHeight }}>
          <Hello 
            id="hello"
          />
        </HelloSection>
        <Section id='hero-section'>
        </Section>
        <Section>
          <Section.Heading>Visuals that bring ideas to life.</Section.Heading>
          <GraphicsCarousel />
        </Section>
        {/* <Section>
          <Section.Heading>Services</Section.Heading>
          <ServicesCarousel />
        </Section> */}
        <Section>
          <Section.Heading>Dive into my work.</Section.Heading>
          <ProjectCarousel />
        </Section>
        <Section>
          <Section.Heading>See through my lens.</Section.Heading>
        </Section>
        <Section color='dark'>
          <Section.Heading>Values that drive design.</Section.Heading>
          <ValuesCarousel />
        </Section>
        <div style={{height:'5em'}}></div>
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {$navState !== States.EXPANDED && (
        <Footer color={$colorScheme} />
      )}
    </>
  )
}

export default Home;