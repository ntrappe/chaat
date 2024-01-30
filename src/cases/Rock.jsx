import React, { useEffect } from 'react';
import styled from 'styled-components';
import RockPrev from '../assets/case-study-images/rock/rock-preview.png';

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

const RockPreview = styled.div`
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
  line-height: 1.2;
  letter-spacing: 0;
  margin-top: 1.3em;
  margin-bottom: 1.3em;
  color: var(--concrete);

  em {
    font-size: 30px;
    color: var(--pavement);
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
        <RockPreview id='case-study-preview'>
          <img
            src={RockPrev}
            alt='Three iphones lined up. The first with the Rock app opening up. Second with 
              a list of national parks. Third with a national park, Zion, selected and basic
              information about the park.'
          />
        </RockPreview>
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
              <p><a href='https://www.figma.com/proto/ywP4mSyfwGENQ4pwyzv1vW/A4-National-Park-App?type=design&node-id=580-4846&t=DVSwa6gAjz1CVh71-1&scaling=scale-down&page-id=580%3A4841&starting-point-node-id=580%3A4846&show-proto-sidebar=1&mode=design'>Figma</a></p>
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
            To investigate this, we surveyed 50 millennials across a variety of demographics. You can check out our 
            survey <a href='https://forms.gle/h2bxRMqGSMJAn3pt6'>here</a>. Four key trends emerged when we analyzed the 
            data. First, 77% of respondents had a desire to go to a National Park. Second, 74% of respondents agreed 
            more people should visit National Parks. Third, 55% of respondents had not visited a Park in the past 12 
            months. Lastly, 20% of respondents were confident in their knowledge of the Parks nearest to them.
          </p>
          <p>Now, this was more confusing. Millennials cared about the environment and wanted to go to National Parks 
            but … weren’t? We had to dig a little deeper and interview respondents about what was motivating them or 
            discouraging them from visiting the parks. While time was often a consideration, a major trend emerged: 
            planning. They didn’t know where to start. What park? What to bring? What to see? 
          </p>
          <Quote>
            <em>“I’m not confident in my ability to go to a national park by myself (deriving, planning, directions, 
              packing, etc.)”</em> — Daniel Wang (pseudonym)
          </Quote>
          <p>
            Our key findings suggested that millennials want to visit parks but are frustrated with the process of 
            how to do so. They both needed lots of information—where to go, what hike to do, what to bring, what 
            weather conditions—but not enough to be overwhelmed.
          </p>
          <Quote>
            <em>“I’m confused on the process of going. I believe you may have to book in advance to go to Yosemite? 
              I know there’s more steps to the process but I’m not sure how to start.”</em> — Melissa Roberts (pseudonym)
          </Quote>
          <h4>Market Research</h4>
          <p>
            We wanted to see what was already available on the market. Was there already an app that could solve all 
            our problems? Nope. Definitely not. We compared the most popular apps related to outdoor adventures and 
            experiences: NPS App, NPS Page, CA Parks + Rec, Google Search, HipCamp, AllTrails, Apple Maps, Yelp, 
            Wanderlog, and TripAdvisor.
          </p>
          <p>
            While many of these applications touched upon features we knew would be necessary, the majority lacked a 
            comprehensive guide to each park. Many didn’t have information on conditions or closures, filters for 
            difficulty or proximity, equipment needed, nor weather.
          </p>
        </RockSection>
        <RockSection id="approach-section">
          <h3>Approach</h3>
          <h4>Previews Sell</h4>
          <p>
            As this was part of a Design class, we were obligated to create mood boards, personas, story lines, wireframes,
            and low-fidelity mockups. However, that didn’t feel right for this project. I immediately went into 
            high-fidelity mockups because I need to find the balance of information that would be helpful but not overwhelming. 
            The key part of this project was what information to present, how much to present, and how to present it.
          </p>
        </RockSection>
        <RockSection id="design-section">

        </RockSection>
      </RockWrapper>
    </>
  )
}
  
export default Rock;