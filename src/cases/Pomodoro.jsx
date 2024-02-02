import React, { useEffect } from 'react';
import styled from 'styled-components';
import PomodoroPrev from '../assets/case-study-images/pomodoro/pomodoro-preview.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const PomodoroWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;

  @media (max-width: 1023px) {
    min-width: 100%:
    width: 100%:
    position: ${(props) => (props.$sidebarState === States.EXPANDED ? 'fixed' : 'relative')};
    overflow: ${(props) => (props.$sidebarState === States.EXPANDED ? 'hidden' : 'unset')};
  }
`;

const PomodoroTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const PomodoroTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const PomodoroPreview = styled.div`
  display: flex;
  justify-content: center;
  min-width: 0;
  width: 100%;
  margin-bottom: 1em;

  img {
    display: block;
    margin: auto;
    width: 740px;
    max-width: 100%;
    border-radius: 20px;
  } 
`;

const PomodoroSection = styled.section`
  margin-top: var(--proj-sect-gap);

  h3 {
    font-size: 1.4rem;
    margin: 0;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--asphalt);
    margin-top: 1em;
  }

  p {
    font-family: 'SF Pro';
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.47;
    letter-spacing: -0.022px;
    margin-top: 0.5em;
    margin-bottom: 1.2em;
    color: var(--asphalt);
  }

  a {
    color: var(--scarlet);
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    padding-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
  }

  li {
    list-style-type: disc;
    font-family: 'SF Pro';
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 300;
    padding-left: 0.2rem;
    color: var(--asphalt);
  }
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-auto-flow: row;
  gap: 10px;
  margin-top: 0.8em;
  margin-bottom: 1em;

  @media (max-width: 767px) {
    gap: 5px;
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(3, auto);
    gap: 20px;
  }
`;

const OverviewBox = styled.div`
  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: .006em;
    color: var(--asphalt);
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 0.85rem;
    color: var(--wet-concrete);
    margin: 0;
    padding-top: 0.3em;
  }

  a {
    color: var(--scarlet);
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 735px) {
    h4, p {
      font-size: 0.8rem;
    }
  }
`;

function Pomodoro({ $sidebarState, $projectState }) {
  useEffect(() => {
    const navHeight = 3 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert rem to pixels

    const moveToOverview = () => {
      const overviewSect = document.getElementById('overview-section');
      if (overviewSect) {
        window.scrollTo({
          top: overviewSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToProblem = () => {
      const problemSect = document.getElementById('problem-section');
      if (problemSect) {
        window.scrollTo({
          top: problemSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToBackground = () => {
      const backgroundSect = document.getElementById('background-section');
      if (backgroundSect) {
        window.scrollTo({
          top: backgroundSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToResearch = () => {
      const researchSect = document.getElementById('research-section');
      if (researchSect) {
        window.scrollTo({
          top: researchSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    window.addEventListener('overview click', moveToOverview);
    window.addEventListener('problem click', moveToProblem);
    window.addEventListener('background click', moveToBackground);
    window.addEventListener('research click', moveToResearch);

    return () => {
      window.removeEventListener('overview click', moveToOverview);
      window.removeEventListener('problem click', moveToProblem);
      window.removeEventListener('background click', moveToBackground);
      window.removeEventListener('research click', moveToResearch);
    }
  }, []);

  useEffect(() => {
    const updateSection = () => {
      const overviewSect = document.getElementById('overview-section');
      const problemSect = document.getElementById('problem-section');
      const backgroundSect = document.getElementById('background-section');
      const researchSect = document.getElementById('research-section');

      if (overviewSect) {
        if ((overviewSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('overview scroll'));
        }
      }
      if (problemSect) {
        if ((problemSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('problem scroll'));
        }
      }
      if (backgroundSect) {
        if ((backgroundSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('background scroll'));
        }
      }
      if (researchSect) {
        if ((researchSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('research scroll'));
        }
      }
    }

    window.addEventListener('scroll', updateSection);

    return () => {
      window.removeEventListener('scroll', updateSection);
    }
  }, []);

  return (
    <>
      <PomodoroWrapper
        id='case-study' 
        $sidebarState={$sidebarState}
        $projectState={$projectState}
      >
        <PomodoroTitle id='case-study-title'>Pomodoro Timer</PomodoroTitle>
        <PomodoroTag id='case-study-tag'>A web-based timer designed to curb procrastination.</PomodoroTag>
        <PomodoroPreview id='case-study-preview'>
          <img
            src={PomodoroPrev}
            alt='Tomato Pomodoro Icon'
          />
        </PomodoroPreview>
        <PomodoroSection id="overview-section">
          <OverviewGrid>
            <OverviewBox>
              <h4>Duration</h4>
              <p>2 months</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Team Size</h4>
              <p>11 members</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Role</h4>
              <p>Lead</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Domain</h4>
              <p>Web Dev</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Try It</h4>
              <p><a href='https://cse110team33.netlify.app'>Netlify</a></p>
            </OverviewBox>
          </OverviewGrid>
        </PomodoroSection>
        <PomodoroSection id="problem-section">
          <h3>Problem</h3>
          <p>
            Engineering students need to complete giant programming assignments without getting 
            overwhelmed or burnt out. Without a way to break up work into smaller tasks and work 
            for shorter periods of time, engineering students will suffer from a lack of 
            productivity and, potentially, fail to complete assignments.
          </p>
        </PomodoroSection>
        <PomodoroSection id="background-section">
          <h3>Background</h3>
          <p>
            At UC San Diego, in my Software Engineering course, we were told to create a pomodoro 
            timer. We had full control over the design and implementation but it had to abide by 
            the Pomodoro Technique. The technique is as follows:
          </p>
          <ul>
            <li>Work for a “pomodoro” (a period of 25 minutes)</li>
            <li>After a “pomodoro” — take a 5 minute break</li>
            <li>After 3 “pomodoros" — take a longer 15 minute break</li>
            <li>If a “pomodoro” is interrupted, it is forfeited and must be restarted</li>
          </ul>
        </PomodoroSection>
        <PomodoroSection id="research-section">
          <h3>Research</h3>
          <h4>Analyze the Competition</h4>
          <p>
            If we had been hired to create a timer—rather than assigned it in class—we would want customers 
            to use our product. To do this, we would have to position ourselves uniquely on the market and 
            find ways to prove that our solution was superior. As a team, we investigated the six most 
            popular timers. A number of problems emerged:
          </p>
          <ul>
            <li>Most timers had a pause/stop button during a “pomodoro” which violated the technique (it should be forfeited)</li>
            <li>All the timers had salient colors, gamification, or notifications—all of which were distracting (another violation)</li>
            <li>Some timers lacked clear signifiers or feedback which reduced usability</li>
          </ul>
          <h4>Try the Technique</h4>
          <p>
            While it would be better design practice to source a group of engineering students and conduct a 
            survey or user experience data, we were not afforded the time to do so. Instead, we—engineering 
            students—tried the Pomodoro Technique while completing assignments in our other engineering classes 
            to analyze how the Technique would work for this audience.
          </p>
        </PomodoroSection>
        <PomodoroSection id="approach-section">
          <h3>Approach</h3>
        </PomodoroSection>
      </PomodoroWrapper>
    </>
  )
}
  
export default Pomodoro;