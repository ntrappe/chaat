import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PomodoroPrev from '../assets/case-study-images/pomodoro/pomodoro-preview.png';

/* -------------- Start Constants -------------- */
const SCROLL_MOVE_DURATION = 250;   // in miliseconds
const NAV_HEIGHT = 3;               // in rem

const States = {                    // states of project/sidebar
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const SectionTitles = [             // names of sections
  'overview', 
  'problem', 
  'background', 
  'research', 
  'approach', 
  'design',
  'final',
  'insights',
];

const SectionClicks = SectionTitles.map((title) => `${title}-click`);
const SectionScrolls = SectionTitles.map((title) => `${title}-scroll`);
const SectionIds = SectionTitles.map((title) => `${title}-section`);
/* -------------- End Constants -------------- */

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

const PomodoroGraphic = styled.div`
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
    border-radius: ${(props) => (props.$type === 'webpage' ? '0' : '20px')};
  } 
`;

const PomodoroSection = styled.section`
  margin-top: var(--proj-sect-gap);

  h3 {
    font-size: 1.5rem;
    margin: 0;
    margin-top: 0.2rem;
  }

  h4 {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--asphalt);
    margin-top: 1.8em;
  }

  h3 + h4 {
    margin-top: 0.8em;
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

  h3 + p {
    margin-top: 0.7em;
  }

  p b {
    font-weight: 400;
  }

  a {
    color: var(--scarlet);
  }

  a:hover {
    text-decoration: underline;
  }

  ul, ol {
    padding-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
  }

  ul li {
    list-style-type: disc;
    font-family: 'SF Pro';
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 300;
    padding-left: 0.2rem;
    color: var(--asphalt);
  }

  ol li {
    list-style-type: number;
    font-family: 'SF Pro';
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 300;
    padding-left: 0.2rem;
    color: var(--asphalt);
  }

  li b {
    font-weight: 400;
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

const DynamicButtonCont = styled.div`
  display: flex;
  border-bottom: 1.25px solid var(--cloud);
`;

const DynamicButton = styled.button`
  padding: 1.5rem 0.8rem 0.8rem 0;
  font-family: 'SF Pro Display';
  font-weight: ${(props) => (props.selected ? '500' : '300')};
  color: ${(props) => (props.selected ? `var(--pavement)` : `var(--concrete)`)};
  font-size: 0.85em;

  &:hover {
    text-decoration: underline;
  }
`;

const DynamicVideo = styled.div`
  position: relative; /* Establishes positioning context for absolute children */
  width: 100%;
  min-height: 200px;
`;

const Video = styled.div`
  position: absolute;   /* relative to parent */
  top: 0;
  left: 0;
  width: 100%;
  visibility: ${(props) => (props.$showVideo ? 'visible' : 'hidden')};
  aspect-ratio: 9 / 7.5;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Transcript = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 0.5rem;
  height: 100%;
  overflow: scroll;
  visibility: ${(props) => (props.$showVideo ? 'hidden' : 'visible')};
`;

const DynamicDescription = styled.div`
  width: 100%;
  display: ${(props) => (props.$showVideo ? 'block' : 'none')};

  p {
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.47;
    letter-spacing: -0.022px;
    margin: 0;
  }

  p b {
    font-weight: 500;
  }
`;

function Pomodoro({ $sidebarState }) {
  const videoDemo = useRef(null);
  const videoDescription = useRef(null);
  const transcript = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [videoHeight, setVideoHeight] = useState(0);
  const [transcriptHeight, setTranscripHeight] = useState(0);
  const [disableScrollListener, setDisableScrollListener] = useState(false);
  
  const updateVideoHeight = () => {
    const nextVideoHeight = videoDemo.current.clientHeight;
    if (nextVideoHeight > 1) {
      setVideoHeight(nextVideoHeight);
    } else {
      console.error('Invalid video height @Pomodoro.jsx');
    }

    if (showVideo) {
      const nextDescriptionHeight = videoDescription.current.clientHeight;
      if ((nextDescriptionHeight > 1) && (nextVideoHeight > 1)) {
        setTranscripHeight(nextDescriptionHeight + nextVideoHeight);
      } else {
        console.error('Invalid video and description heights @Pomodoro.jsx');
      }
    }
    
    // if (videoheight > 1) {
    //   console.log(`vid height ${videoHeight} and description ${descriptionHeight}`);
      
    // } else {
    //   console.error('Invalid height for video @Pomodoro.jsx');
    // }
  }

  useEffect(() => {
    window.addEventListener('resize', updateVideoHeight);

    return () => {
      window.removeEventListener('resize', updateVideoHeight);
    }
  }, [videoHeight, showVideo]);

  useEffect(() => {
    updateVideoHeight();

    // when click on transcript, reset scroll to top
    if (!showVideo) {
      transcript.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    console.log('showVideo -- ', showVideo);

  }, [showVideo]);

  useEffect(() => {
    // Convert nav height in rem to pixels
    const navHeight = NAV_HEIGHT * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const moveToSection = (index) => {
      const nextSection = document.getElementById(SectionIds[index]);
      if (nextSection) {
        setDisableScrollListener(true);
        
        window.scrollTo({
          top: nextSection.offsetTop - navHeight,
          behavior: 'smooth',
        });

        setTimeout(() => {
          setDisableScrollListener(false);
        }, SCROLL_MOVE_DURATION);
      } else {
        console.error(`Invalid section ${index} to move to @Pomodoro`);
      }
    };

    for (let i = 0; i < SectionClicks.length; i++) {
      window.addEventListener(SectionClicks[i], () => moveToSection(i));
    }

    return () => {
      for (let i = 0; i < SectionClicks.length; i++) {
        window.removeEventListener(SectionClicks[i], () => moveToSection(i));
      }
    }
  }, [disableScrollListener]);

  useEffect(() => {
    const updateSection = () => {
      if (!disableScrollListener) {
        for (let i = 0; i < SectionIds.length; i++) {
          const nextSection = document.getElementById(SectionIds[i]);
          if (nextSection) {
            if ((nextSection.offsetTop - window.scrollY) < 100) {
              window.dispatchEvent(new Event(SectionScrolls[i]));
            }
          } else {
            console.error(`Invalid section ${SectionIds[i]} to update @Pomodoro`);
          }
        }
      }
    }

    window.addEventListener('scroll', updateSection);

    return () => {
      window.removeEventListener('scroll', updateSection);
    }
  }, [disableScrollListener]);

  return (
    <>
      <PomodoroWrapper id='case-study' $sidebarState={$sidebarState}>
        <PomodoroTitle id='case-study-title'>Pomodoro Timer</PomodoroTitle>
        <PomodoroTag id='case-study-tag'>A web-based timer designed to curb procrastination.</PomodoroTag>
        <PomodoroGraphic id='case-study-preview'>
          <img
            src={PomodoroPrev}
            alt='Tomato Pomodoro Icon'
          />
        </PomodoroGraphic>
        <PomodoroSection id='overview-section'>
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
        <PomodoroSection id='problem-section'>
          <h3>Problem</h3>
          <p>
            Engineering students need to complete giant programming assignments without getting 
            overwhelmed or burnt out. Without a way to break up work into smaller tasks and work 
            for shorter periods of time, engineering students will suffer from a lack of 
            productivity and, potentially, fail to complete assignments.
          </p>
        </PomodoroSection>
        <PomodoroSection id='background-section'>
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
        <PomodoroSection id='research-section'>
          <h3>Research</h3>
          <h4>Analyze the Competition</h4>
          <p>
            If we had been hired to create a timer—rather than assigned it in class—we would want customers 
            to use our product. To do this, we would have to position ourselves uniquely on the market and 
            find ways to prove that our solution was superior. As a team, we investigated the 6 most 
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
        <PomodoroSection id='approach-section'>
          <h3>Approach</h3>
        </PomodoroSection>
        <PomodoroSection id='design-section'>
          <h3>Design</h3>
        </PomodoroSection>
        <PomodoroSection id='final-section' style={{ marginBottom: '1rem' }}>
          <h3>Final Result</h3>
          <DynamicButtonCont>
            <DynamicButton selected={showVideo} onClick={() => setShowVideo(true)}>
              Video
            </DynamicButton>
            <DynamicButton selected={!showVideo} onClick={() => setShowVideo(false)}>
              Transcript
            </DynamicButton>
          </DynamicButtonCont>
          <DynamicVideo id="dynamic-video-container" 
            $showVideo={showVideo} 
            style={{ height: showVideo ? videoHeight : transcriptHeight }}>
            <Video id="video" ref={videoDemo} $showVideo={showVideo}>
              <iframe
                title='Pomodoro Demo'
                src='https://player.vimeo.com/video/909267598?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479'
                frameBorder='0'
                allow='autoplay; fullscreen; picture-in-picture'
              ></iframe>
              <script src='https://player.vimeo.com/api/player.js' />
            </Video>
            <Transcript id="transcript" ref={transcript} $showVideo={showVideo}>
              <p>
                When we first open the app, we see a dark screen with 6 features. From left
                to right, we have a button for settings, a label indicating a work session, a 
                timer with 25 minutes, a button to start the timer, a button for information, 
                and a button for statistics.
              </p>
              <p>
                When we click Start, the timer immediately starts to tick down from 25 minutes.
                The button that previously said <b>Start</b> has now changed to <b>Restart</b>. 
                Note that we did speed up this timer for the demo. 
              </p>
              <p>
                At 23 minutes or so, we click <b>Restart</b> to stop the timer and set it back to 25 
                minutes. This is considered an interruption and we have forfeited this pomodoro.
              </p>
              <p>
                We then open up settings, navigate to the time section and adjust the length of 
                a work session from 25 to 2. The timer now shows 2 minutes.
              </p>
              <p>
                We click <b>Start</b> and the timer begins to tick down from 2 minutes. While the timer 
                is running, we click the settings button to open the sidebar and see that all
                options, except volume, are greyed out and cannot be clicked. No distractions are
                allowed.
              </p>
              <p>
                When the timer runs out, the label for work turns to short break and we have five
                minutes on the timer. There are 4 squares below this label that previously were greyed
                out. One of these squares is now a bright green indicating one successful pomo--or 
                work session.
              </p>
              <p>
                We open settings again, this time to adjust the length of a short break to 1 minute.
                Note that settings does not allow you to input less than 1 minute or more than 60
                minutes because it would go against the pomodoro technique.
              </p>
              <p>
                We click <b>Start</b> and let the short break timer run down. Once complete, we click statistics
                to open up a display of four blocks. From left to right, the first block represents
                work sessions, then short breaks, then long breaks, and, finally, interruptions. Here, 
                we see 1 square block indicating a work session, 1 square block for a short break, and 
                1 red square for an interruption.
              </p>
              <p>
                We open up setting again and navigate to the display section. Here, we click the toggle 
                button to turn off dark mode. Now, the screen is white and the timer numbers are black.
                We start the timer to complete our second pomo--or work session.
              </p>
              <p>
                When the timer runs out, we have successfully finished that pomo and we should go into our
                second short break. We now have 2 green squares on the screen representing our work sessions.
              </p>
              <p>
                We open settings again and navigate to the display section. This time we click the toggle for
                calm mode, turning it on. Instead of showing minutes and seconds on the timer, the calm mode 
                shows only minutes. This is supposed to reduce further distractions by displaying fewer changes.
              </p>
              <p>
                With '2m' representing 2 minutes on the timer, we click <b>Start</b> and and complete our second break.
                The video ends after this.
              </p>
            </Transcript>
          </DynamicVideo>
          <DynamicDescription ref={videoDescription} $showVideo={showVideo}>
            <p>
              <b>Demo of the App.</b> See the pomodoro timer in action as we work, take breaks,
              modify settings, and explore features. For the purposes of the demonstration, we've 
              sped up the timer. If you'd prefer to try it out yourself, find 
              it <a href="https://cse110team33.netlify.app">here</a>.
            </p>
          </DynamicDescription>
        </PomodoroSection>
        <PomodoroSection id='insights-section'>
          <h3>Insights</h3>
        </PomodoroSection>
      </PomodoroWrapper>
    </>
  )
}
  
export default Pomodoro;