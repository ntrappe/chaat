import React, { useEffect } from 'react';
import styled from 'styled-components';
import RockPrev from '../assets/case-study-images/rock/rock-preview.png';
import Pinnacles from '../assets/case-study-images/rock/pinnacles.jpg';
import MarketResearch from '../assets/case-study-images/rock/MarketResearch.png';
import PreviewTestA from '../assets/case-study-images/rock/PreviewTestA.png';
import PreviewTestB from '../assets/case-study-images/rock/PreviewTestB.png';
import PreviewTestC from '../assets/case-study-images/rock/PreviewTestC.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const RockWrapper = styled.div`
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

const RockTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const RockTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const RockGraphic = styled.div`
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

const RockSection = styled.section`
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

const Quote = styled.h5`
  font-family: 'SF Pro Display';
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0;
  margin-top: 1.3em;
  margin-bottom: 1.3em;
  color: var(--lichen);

  em {
    font-size: 30px;
    color: var(--moss);
    line-height: 1.2;
  }
`;

function Rock() {
  
  useEffect(() => {
    const navHeight = 3 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert rem to pixels

    const moveToOverview = () => {
      console.log('move to overview');
      const overviewSect = document.getElementById('overview-section');
      if (overviewSect) {
        window.scrollTo({
          top: overviewSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToProblem = () => {
      console.log('move to problem');
      const problemSect = document.getElementById('problem-section');
      if (problemSect) {
        window.scrollTo({
          top: problemSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToBackground = () => {
      console.log('move to background');
      const backgroundSect = document.getElementById('background-section');
      if (backgroundSect) {
        window.scrollTo({
          top: backgroundSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToResearch = () => {
      console.log('move to research');
      const researchSect = document.getElementById('research-section');
      if (researchSect) {
        window.scrollTo({
          top: researchSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToApproach = () => {
      const approachSect = document.getElementById('approach-section');
      if (approachSect) {
        window.scrollTo({
          top: approachSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    const moveToDesign = () => {
      const designSect = document.getElementById('design-section');
      if (designSect) {
        window.scrollTo({
          top: designSect.offsetTop - navHeight,
          behavior: 'smooth',
        })
      }
    };

    window.addEventListener('overview click', moveToOverview);
    window.addEventListener('problem click', moveToProblem);
    window.addEventListener('background click', moveToBackground);
    window.addEventListener('research click', moveToResearch);
    window.addEventListener('approach click', moveToApproach);
    window.addEventListener('design click', moveToDesign);

    return () => {
      window.removeEventListener('overview click', moveToOverview);
      window.removeEventListener('problem click', moveToProblem);
      window.removeEventListener('background click', moveToBackground);
      window.removeEventListener('research click', moveToResearch);
      window.removeEventListener('approach click', moveToApproach);
      window.removeEventListener('design click', moveToDesign);
    }
  }, []);

  useEffect(() => {
    const updateSection = () => {
      const overviewSect = document.getElementById('overview-section');
      const problemSect = document.getElementById('problem-section');
      const backgroundSect = document.getElementById('background-section');
      const researchSect = document.getElementById('research-section');
      const approachSect = document.getElementById('approach-section');
      const designSect = document.getElementById('design-section');

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
      if (approachSect) {
        if ((approachSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('approach scroll'));
        }
      }
      if (designSect) {
        if ((designSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('design scroll'));
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
      <RockWrapper>
        <RockTitle id='case-study-title'>Rock </RockTitle>
        <RockTag id='case-study-tag'>An app to explore national parks and find the ideal hike.</RockTag>
        <RockGraphic id='case-study-preview'>
          <img
            src={RockPrev}
            alt='Three iphones lined up. The first with the Rock app opening up. Second with 
              a list of national parks. Third with a national park, Zion, selected and basic
              information about the park.'
          />
        </RockGraphic>
        <RockSection id="overview-section">
          <OverviewGrid>
            <OverviewBox>
              <h4>Duration</h4>
              <p>2 months</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Team Size</h4>
              <p>3 members</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Role</h4>
              <p>Lead</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Format</h4>
              <p>Mobile App</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Try It</h4>
              <p><a href='https://www.figma.com/proto/ywP4mSyfwGENQ4pwyzv1vW/A4-National-Park-App?type=design&node-id=675-6029&t=g8QpYQoQiVCjQTzi-1&scaling=scale-down&page-id=580%3A4841&starting-point-node-id=580%3A4846&show-proto-sidebar=1&mode=design'>Figma</a></p>
            </OverviewBox>
          </OverviewGrid>
        </RockSection>
        <RockSection id="problem-section">
          <h3>Problem</h3>
          <p>
            Millennials visit national parks less than any other previous generation. Because of this, the 
            National Park System (NPS) is concerned about securing enough funding (as most is generated 
            through visitation). Millennials are overwhelmed with the process of selecting a national park 
            to visit. They don’t know how to select a park, what to look for, and which hikes are suitable.
          </p>
        </RockSection>
        <RockSection id="background-section">
          <h3>Background</h3>
          <p>
            Two months before this project began, I was waiting in line for the shuttle at Pinnacles National 
            Park. It’s a park full of towering cinnamon-colored talus rocks, hidden caves, deep gulches, and 
            enormous condors. I ended up speaking to a very chatty Park Ranger about the state of affairs at 
            Pinnacles. Here, I learned two things. First, the few very well recognized parks (e.g. Yosemite) 
            were getting the bulk of visitors, leaving lesser-known parks (e.g. Pinnacles) with less 
            visitation (and therefore less funding). Second, there was a clear generation gap in that most of 
            the visitors were older folks who’d grown up hiking.
          </p>
          <RockGraphic id='case-study-preview'>
            <img
              src={Pinnacles}
              alt='A mound of cinnamon-colored rocks backed by a blue sky'
            />
          </RockGraphic>
        </RockSection>
        <RockSection id="research-section">
          <h3>Research</h3>
          <h4>Articles & Interviews</h4>
          <p>
            When I was presented with the opportunity to create an app for anything, I knew I had to dig deeper 
            into that conversation. To determine whether there was a clear problem to be solved, my team and I 
            dove into research. We sifted through news articles and interviews to understand whether (a) the parks 
            were suffering financially and (b) if a lack of millennials was the problem. No quote could better back 
            this up than one given by the National Park Service (NPS) director. 
          </p>
          <Quote>
            <em>“If we were a business and [millennials were] our clientele, then over the long term, we would probably 
            be out of business.”</em> — Jonathan Jarvis
          </Quote>
          <p>
            All the evidence we collected indicated that (a) millennials were visiting parks less than baby boomers and 
            (b) visiting national parks were the best ways to support the parks. So, now we knew that there was 
            definitely a problem. But what was causing it? Why weren’t millennials visiting National Parks?
          </p>
          <h4>Surveys</h4>
          <p>
            To investigate this, we surveyed <b>50</b> millennials across a variety of demographics. You can check out our 
            survey <a href='https://forms.gle/h2bxRMqGSMJAn3pt6'>here</a>. Four key trends emerged when we analyzed  
            the data:
          </p>
          <ul>
            <li><b>77%</b> of respondents had a desire to go to a National Park</li>
            <li><b>74%</b> of respondents agreed more people should visit National Parks</li>
            <li><b>55%</b> of respondents had <b>not</b> visited a Park in the past 12 months</li>
            <li><b>80%</b> of respondents were <b>not</b> confident in their knowledge of the Parks nearest to them</li>
          </ul>
          <p>Now, this was more confusing. Millennials cared about the environment and wanted to go to National Parks 
            but … weren’t? We had to dig a little deeper and interview respondents about what was motivating them or 
            discouraging them from visiting the parks. While time was often a consideration, a major trend emerged: 
            planning. They didn’t know where to start. What park? What to bring? What to see? 
          </p>
          <Quote>
            <em>“I’m not confident in my ability to go to a national park by myself (deriving, planning, directions, 
              packing, etc.)”</em> — Daniel Wang (p)
          </Quote>
          <p>
            Our key findings suggested that millennials want to visit parks but are frustrated with the process of 
            how to do so. They both needed lots of information—where to go, what hike to do, what to bring, what 
            weather conditions—but not enough to be overwhelmed.
          </p>
          <Quote>
            <em>“I’m confused on the process of going. I believe you may have to book in advance to go to Yosemite? 
              I know there’s more steps to the process but I’m not sure how to start.”</em> — Melissa Roberts (p)
          </Quote>
          <h4>Market Research</h4>
          <p>
            Millennials were clearly asking for a centralized hub of information. Before we built our own, we 
            wanted to see what the market had to offer. Maybe this was just a problem of awareness? Did an app 
            already exist that could support planning visits to National Parks? 
          </p>
          <p>
            Kinda? We compared the <b>10</b> most popular apps and websites and found that many provided lists 
            of hikes, directions, and photos, but weren’t solving our problem. The majority lacked a comprehensive 
            guide for each park geared towards a novice who didn’t know what to look for. Many didn’t provide 
            pertinent information on conditions, closures, filters for difficulty, equipment requirements, and 
            more. If you’d like to see our full breakdown, you can find it on 
            this <a href='https://docs.google.com/document/d/1eKqaEfm-ZcYMHUdmKS3_RhwLTFxx08vJjQCDKVrxwAA/edit?usp=sharing'>Google Doc</a>.
          </p>
          <RockGraphic id='case-study-preview'>
            <img
              src={MarketResearch}
              alt='A mound of cinnamon-colored rocks backed by a blue sky'
            />
          </RockGraphic>
        </RockSection>
        <RockSection id="approach-section">
          <h3>Approach</h3>
          <p>When thinking about designing the app, I focused on five questions:</p>
          <ol>
            <li>How do we make it fun?</li>
            <li>How do we appeal across millennials?</li>
            <li>How do we get people interested in a park?</li>
            <li>How much information do we want to provide?</li>
            <li>When will they be using this?</li>
          </ol>
          <h4>Hiking is Fun</h4>
          <p>
            First, millennials were feeling overwhelmed and stressed so we wanted our app to evoke the opposite 
            feelings. We wanted them to feel excited, adventurous, and happy. We wanted them to be in awe of 
            the parks not in dread. The first concept of fun was color. How could we bring in pops of color to 
            the app?
          </p>
          <h4>Broad Appeal</h4>
          <p>
            Second, we had a broad audience. We were targeting a large demographic across genders, socioeconomic 
            statuses, and races. For that reason, we also wanted the app to feel minimalist, modern, and fairly 
            neutral in its core color scheme. We wanted it to feel familiar and intuitive.
          </p>
          <h4>Show Don't Tell</h4>
          <p>
            Third, the best way to sell a park is to show a park. The National Parks are gorgeous and impressive 
            and we were going to lean heavily into photography.
          </p>
          <h4>The Challenge</h4>
          <p>
            Fourth, the most challenging part—and arguably most important part—of this application would be how 
            much information to provide and how to display it. We needed to find a balance of educating our 
            audience without overwhelming them. We had to provide novices they might not know to check without 
            making them feel uncomfortable.
          </p>
          <h4>Set the Scene</h4>
          <p>
            Fifth, as a Software Engineer, I always ask the context around the use of an application. This app 
            could be used at home while debating on going to a National Park, on the drive to a Park checking 
            conditions, or even in the Park while on a hike. Given that National Parks rarely have good cellular 
            connection, our app would have to provide all the information someone might need without network. 
            This meant we would want to have offline maps, trail details, and more.
          </p>
        </RockSection>
        <RockSection id="design-section">
          <h3>Design</h3>
          <h4>Designing the Fun</h4>
          <p>
            Our initial challenge in design was to find a balance between minimalism and fun. The bulk of our mockups
            were actually high-fidelity because we wanted to nail the look and feel of our previews. We needed to 
            find a balance of how much color to use to make it fun but not distract from the parks. To determine our 
            design, we conducted three rounds of A/B testing and iterated through a number of designs.
          </p>
          <RockGraphic id='case-study-preview'>
            <img
              src={PreviewTestA}
              alt='Four National Park preview component designs. The first has a drop shadow and the preview is a full
              color. The second uses a drop shadow but more diffused with a white background. The third uses no shadow 
              but a thin outline and colorful backgrounds. The fourth uses a thin outline and no color.'
            />
          </RockGraphic>
          <p>We also played around with the size of the previews, what information to display, and a light vs dark mode.</p>
          <RockGraphic id='case-study-preview'>
            <img
              src={PreviewTestB}
              alt='More National Park previews. Half with soft pastel backgrounds and half with a dark grey.'
            />
          </RockGraphic>
          <p>
            With the feedback we received from users, we decided that the photo of the National Park should take up the 
            full width of the preview. While having colorful backgrounds—even half-height colorful backgrounds—were fun, 
            we didn’t want to take away from the parks. Those photos had enough color and we wanted them to be the focal 
            point. So we increased the size of the photos and removed the unnecessary colorful additions.
          </p>
        </RockSection>
        <RockGraphic id='case-study-preview'>
            <img
              src={PreviewTestC}
              alt='Four National Park preview component designs. The first has a drop shadow and the preview is a full
              color. The second uses a drop shadow but more diffused with a white background. The third uses no shadow 
              but a thin outline and colorful backgrounds. The fourth uses a thin outline and no color.'
            />
          </RockGraphic>
      </RockWrapper>
    </>
  )
}
  
export default Rock;