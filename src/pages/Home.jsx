import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader';
import Hello from '../components/Home/Hello';
import ThickFooter from '../components/Footer/ThickFooter';

const MainWrapper = styled.main`
  background-color: inherit;

  @media (max-width: 767px) {
    position: ${(props) => (props.$navOpen === 'open' ? 'fixed' : 'unset')};
    top: ${(props) => (props.$navOpen === 'open' ? `var(--nav-height)` : 'unset')};
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
  // background-color: var(--midnight);
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

  h3 {
    font-family: 'SF Pro Display';
    color: var(--paper);
    font-weight: 500;
    line-height: 1.167;
    font-size: 24px;
    letter-spacing: .009em;
    margin: 0;

    @media (max-width: 1068px) {
      font-size: 21px;
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

function Home() {
  const body = document.getElementById('body');
  body.setAttribute('page', 'home');

  /* need to know if nav is open to freeze content below it */
  const [navOpen, setNavOpen] = useState(null);
  const [helloHeight, setHelloHeight] = useState(0);

  const verifyNavOpen = (signal) => {
    setNavOpen(signal ? 'open' : 'closed');
  }

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

    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <>
      <GlassHeader 
        $colorScheme={'dark'} 
        $showSideBar={false} 
        passSidebarClick={() => console.log('no sidebar')}
        passNavClick={verifyNavOpen}
      />
      <MainWrapper $navOpen={navOpen}>
        {navOpen === 'open' && (
          <DarkOverlay />
        )}
        <HelloSection id="hello-section" style={{ height: helloHeight }}>
          <Hello id="hello"/>
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
              <h3>Forage for Mushrooms</h3>
              <p>When you forage for mushrooms, you need to identify them by at least two senses (e.g.,
                color and texture). I try to ensure that interactions with my designs are provided in at 
                least two modes too. For example, an incorrect input can both shake and turn red.</p>
            </Wisdom>
            <Wisdom>
              <h3>Think About Subtitles</h3>
              <p>Subtitles were initially designed for those with hearing impairments but we certainly 
                all enjoy them when we’re in a noisy room trying to watch our favorite show. I try to 
                think about accessibility not as something just for those with permanent disabilities 
                but as something we can all benefit from.</p>
            </Wisdom>
            <Wisdom>
              <h3>Test Like a Toddler</h3>
              <p>I  always like to pretend that my users are hyper-active, hangry toddlers. They’re 
                smashing buttons, swiping at things they shouldn’t, and typing in gibberish. If my 
                app can survive unexpected, chaotic behavior, then I’ve done my job as an engineer.</p>
            </Wisdom>
            <Wisdom>
              <h3>Art is Selfish, Design is <em>Selfless</em></h3>
              <p>My favorite design professor once said that art is for yourself, it’s about making 
                something you like. On the other hand, design should be utterly selfless. It should 
                be made to work for your user regardless of what you might like.</p>
            </Wisdom>
            <Wisdom>
              <h3>Design is Seamless</h3>
              <p>Bad design is easily noticed. It's abrasive and uncomfortable. Good design, on the other hand, 
                should feel seamless and natural. It should feel like an extension of ourselves.</p>
            </Wisdom>
            <Wisdom>
              <h3>Bring the Trail Mix</h3>
              <p>Just as a skilled hiker anticipates twists and turns, a designer foresees user needs, 
                errors, and challenges. We help navigate this uncharted territory. </p>
            </Wisdom>
          </WisdomGrid>
        </PhilosophySection>
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(navOpen !== 'open') && (
        <ThickFooter $colorScheme={'dark'} />
      )}
    </>
  )
}

export default Home;