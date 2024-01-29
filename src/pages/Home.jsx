import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader';
import Hello from '../components/Home/Hello';
import ThickFooter from '../components/Footer/ThickFooter';
import Cairns from '../assets/page-icons/cairns.png';
import Mushroom from '../assets/page-icons/mushroom.png';
import Lego from '../assets/page-icons/lego.png';
import Subtitles from '../assets/page-icons/subtitles.png';
import Hand from '../assets/page-icons/hand.png';
import Palette from '../assets/page-icons/palette.png';

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

const PhilosophySection = styled.section`
  background-color: var(--midnight);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
  padding-bottom: 4em;

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

  @media (max-width: 734px) {
    grid-template-columns: 1fr; /* 1 card across */
  }
`;

const WisdomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 30px)); /* 2 cards across */
  grid-auto-flow: row;
  gap: 60px;
  margin-top: 2em;
  width: 692px;

  @media (max-width: 734px) {
    grid-template-columns: 1fr; /* 1 card across */
    width: 87.5%;
  }
`;

const Wisdom = styled.div`
  text-align: left;

  img {
    width: 40px;
    height: auto;
    margin-bottom: 0.6em;
  }

  h3 {
    font-family: 'SF Pro Display';
    color: var(--paper);
    font-weight: 500;
    line-height: 1.167;
    font-size: 24px;
    letter-spacing: .009em;
    margin: 0;

    @media (max-width: 1068px) {
      font-size: 22px;
      letter-spacing: .011em;
    }
  }

  p {
    font-family: 'SF Pro Display';
    color: var(--cloud);
    font-weight: 300;
    line-height: 1.5;
    font-size: 17px;
    letter-spacing: -.374px;
    margin-top: 0.8em;
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
      <GlassHeader 
        $colorScheme={$colorScheme} 
        $showSideBar={false} 
        $resetNav={false}
        bubbleUpSidebar={() => console.log('no sidebar')}
        bubbleUpNav={handleNavToggle}
        bubbleUpClose={() => console.log('no sidebar')}
      />
      {$navState === States.EXPANDED && (
        <DarkOverlay />
      )}
      <MainWrapper $navState={$navState}>
        <HelloSection id="hello-section" style={{ height: helloHeight }}>
          <Hello 
            id="hello"
          />
        </HelloSection>
        <IntroSection id="intro-section">
          <IntroText>
            <h2>Welcome to my Digital Trailhead</h2>
            <p>I’m a developer navigating the intersections of creativity and 
            functionality. With a background in neuroscience, computer science, and design, I’m on a 
            mission to create products that align with what people can do. Hike through this site's 
            wandering trails filled with case studies, art, and a rare lesson or two. Encounter an 
            error? Don’t worry, report it <a href='https://github.com/ntrappe/chaat/issues'>here</a> and 
            consider it a gentle nudge to explore the scenic route. Happy exploring!</p></IntroText>
        </IntroSection>
        <PhilosophySection id="philosophy-section">
          <h2>My Core Philosophies</h2>
          <WisdomGrid>
            <Wisdom>
              <img
                src={Mushroom}
                alt="Red mushroom with spots"
              />
              <h3>Forage for Mushrooms</h3>
              <p>When you forage for mushrooms, you need to identify them by at least two senses (e.g.,
                color and texture). I try to ensure that interactions with my designs are provided in at 
                least two modes too. For example, an incorrect input can both shake and turn red.</p>
            </Wisdom>
            <Wisdom>
              <img
                src={Subtitles}
                alt="Stack of three red rocks"
              />
              <h3>Think About Subtitles</h3>
              <p>While subtitles were created for those with hearing impairements, we all appreciate them
                when we're trapped in a noisy environment trying to binge our favorite show. Accessibility 
                is for everyone, permanent disability or not.</p>
            </Wisdom>
            <Wisdom>
              <img
                src={Lego}
                alt="Stack of three red rocks"
              />
              <h3>Test Like a Toddler</h3>
              <p>I  always like to pretend that my users are hyper-active, hangry toddlers. They’re 
                smashing buttons, swiping at things they shouldn’t, and typing in gibberish. If my 
                app can survive unexpected, chaotic behavior, then I’ve done my job as an engineer.</p>
            </Wisdom>
            <Wisdom>
              <img
                src={Cairns}
                alt="Stack of three red rocks"
              />
              <h3>Follow the Cairns</h3>
              <p>Just as a hiker relies on cairns to avoid wrong turns, users depend on our well-placed 
                markers to know what to do, where to go, and how to get there. It’s our job to lead 
                users forward so they don’t get stranded and to predict what could go wrong.</p>
            </Wisdom>
            <Wisdom>
              <img
                src={Hand}
                alt="Hand with pointer finger extended"
              />
              <h3>An Extension of Us</h3>
              <p>We notice bad design. It's abrasive, glaring, and uncomfortable. Good design, on the other 
                hand, should feel like an extension of ourselves. It should feel seamless, natural, and invisible.</p>
            </Wisdom>
            <Wisdom>
              <img
                src={Palette}
                alt="Paint palette with a few patches of paint"
              />
              <h3>Art is Selfish, Design is <em>Selfless</em></h3>
              <p>To quote my designer professor: "Art is for yourself, it’s about making something you like. 
                Design should be utterly selfless. It's all about what your user needs, not what you might like."</p>
            </Wisdom>  
          </WisdomGrid>
        </PhilosophySection>
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {$navState !== States.EXPANDED && (
        <ThickFooter $colorScheme={$colorScheme} />
      )}
    </>
  )
}

export default Home;