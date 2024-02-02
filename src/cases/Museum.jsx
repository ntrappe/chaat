import React, { useEffect } from 'react';
import styled from 'styled-components';
import MuseumPrev from '../assets/case-study-images/museum/museum-wall.png';
import FinalPoster from '../assets/case-study-images/museum/poster-official.png';
import ContentReq from '../assets/case-study-images/museum/content-req.png';
import HouseOriginal from '../assets/case-study-images/museum/HouseOriginal.png';
import HouseLines from '../assets/case-study-images/museum/HouseLines.png';
import HouseRender from '../assets/case-study-images/museum/HouseRender.png';
import RoughMockups from '../assets/case-study-images/museum/RoughMockups.png';
import BWMock1 from '../assets/case-study-images/museum/BWMockup1.png';
import BWMock2 from '../assets/case-study-images/museum/BWMockup2.png';
import BWMock3 from '../assets/case-study-images/museum/BWMockup3.png';
import TitleMock from '../assets/case-study-images/museum/TitleMockup.png';
import ColorMock1 from '../assets/case-study-images/museum/ColorMockup1.png';
import ColorMock2 from '../assets/case-study-images/museum/ColorMockup2.png';
import FinalMaybe from '../assets/case-study-images/museum/FinalMaybe.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MuseumWrapper = styled.div`
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

const MuseumTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const MuseumTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const MuseumGraphic = styled.div`
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
    border-radius: ${(props) => (props.$orientation === 'vertical' ? '7px' : '20px')};
    border: ${(props) => (props.$orientation === 'vertical' ? `1px solid var(--cloud)` : 'none')};
  }  
`;

const MuseumSection = styled.section`
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

function Museum() {
  
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

    const moveToFinal = () => {
      const finalSect = document.getElementById('final-section');
      if (finalSect) {
        window.scrollTo({
          top: finalSect.offsetTop - navHeight,
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
    window.addEventListener('final click', moveToFinal);

    return () => {
      window.removeEventListener('overview click', moveToOverview);
      window.removeEventListener('problem click', moveToProblem);
      window.removeEventListener('background click', moveToBackground);
      window.removeEventListener('research click', moveToResearch);
      window.removeEventListener('approach click', moveToApproach);
      window.removeEventListener('design click', moveToDesign);
      window.removeEventListener('final click', moveToFinal);
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
      const finalSect = document.getElementById('final-section');

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
      if (finalSect) {
        if ((finalSect.offsetTop - window.scrollY) < 100) {
          window.dispatchEvent(new Event('final scroll'));
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
      <MuseumWrapper>
        <MuseumTitle id='case-study-title'>Museum Poster</MuseumTitle>
        <MuseumTag id='case-study-tag'>An app to explore national parks and find the ideal hike.</MuseumTag>
        <MuseumGraphic id='case-study-preview'>
          <img
            src={MuseumPrev}
            alt='Three iphones lined up. The first with the Museum app opening up. Second with 
              a list of national parks. Third with a national park, Zion, selected and basic
              information about the park.'
          />
        </MuseumGraphic>
        <MuseumSection id="overview-section">
          <OverviewGrid>
            <OverviewBox>
              <h4>Duration</h4>
              <p>1 week</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Team Size</h4>
              <p>N/A (Solo)</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Domain</h4>
              <p>Graphic Design</p>
            </OverviewBox>
            <OverviewBox>
              <h4>Download It</h4>
              <p><a href={FinalPoster} download>poster.png</a></p>
            </OverviewBox>
          </OverviewGrid>
        </MuseumSection>
        <MuseumSection id="problem-section">
          <h3>Problem</h3>
          <p>
              The Canadian Centre for Architecture would like to encourage people to visit their newest 
              exhibit: The Origins of the Avant-Garde in America. The event is free on a first-come, 
              first-serve basis. Ideally, it will inspire novel forms of architecture in the community, 
              provide more support for the Centre, and be accessible to a broad audience.
          </p>
        </MuseumSection>
        <MuseumSection id="background-section">
          <h3>Background</h3>
          <p>
            The first assignment in my Prototyping course at UC San Diego was to understand 
            how to use underlying grid systems. We were told to create a digital poster with
            the following requirements:
          </p>
          <ul>
            <li>Must be a static digital dislay</li>
            <li>Dimensions must be 1024px wide and 1600px tall</li>
            <li>Must use an underlying grid system</li>
            <li>Use at least one image from a folder (modifications allowed)</li>
            <li>Have to use all of the text provided</li>
          </ul>
          <p>This initially was a major challenge for the vast amount of text we would HAVE to 
            incorporate:
          </p>
          <MuseumGraphic>
            <img
              src={ContentReq}
              alt='3 pages of text for the museum poster'
            />
          </MuseumGraphic>
        </MuseumSection>
        <MuseumSection id="research-section">
          <h3>Research</h3>
          <p>
            Unlike most projects I've worked on, we never get to communicate with the shareholders 
            nor do we know much about our target audience. We were told nothing about who this poster 
            should target. So, I made my own assumptions.
          </p>
          <p>According to the text given, the event was to be held on the following dates and times:</p>
          <ul>
            <li>Thursday, 5:30pm-7:30pm</li>
            <li>Friday, 9:00am-12:15pm, 2:00pm-4:45pm, 5:30pm-6:30pm</li>
            <li>Saturday, 9:00am-12:30pm</li>
          </ul>
          <p>The event was primarily held on the week, not weekend, during working hours. That would 
            mean that those working a standard 9 to 5 would miss out on nearly the whole exhibit. For 
            that reason, I made assumption #1: this is for retirees.
          </p>
        </MuseumSection>
        <MuseumSection id="approach-section">
          <h3>Approach</h3>
          <p>
            Given that this was going to be a poster for retirees to get them interested in learning 
            about architecture I had <b>5</b> things to keep in mind:
          </p>
          <h4>Bad Eyesight</h4>
          <p>
            On the young to old scale, I was going to take a safe assumption that our retirees were 
            leaning towards the latter. That meant I'd be going up against visual impairements and 
            would have to ensure that I had large text, high contrast, and a legible font. Not the 
            simplest task with 3 pages worth of content to fit.
          </p>
          <h4>Integrate Images</h4>
          <p>
            I had to incorporate at least 1 image from a folder of architectural marvels. The problem
            with avant-garde buildings is that they can distract from all the other information. I had 
            to find a way to mesh my poster design with the images.
          </p>
          <h4>Warmth</h4>
          <p>
            Modern architecture is usually critiqued for being cold and unwelcoming. I wanted the poster
            to counter this assumption by leaning warm and rich. Also, I wanted to poster to warrant 
            attention but not enough to give our retirees a heart attack.
          </p>
          <h4>Block It Out</h4>
          <p>
            Whenever I have a lot of text, it can feel overwhelming. The best way to comabt this problem
            is to sub-divide the entire poster into smaller blocks. By grouping content or creating visual
            divides, the eye can move around and it's easier to take in information.
          </p>
          <h4>Add Some Spice</h4>
          <p>
            Meeting the requirements wasn't enough for me. I felt like there was something missing.
          </p>
          <ul>
            <li><b>Location. </b>This event was located in New York City on a college campus. Even with Google 
            Maps, that would be a challenge to find. So, I needed to add a map or some sort of guide.</li>
            <li><b>Diversity. </b>Did our speakers cover a range of nationalities, races, and genders? If so,
            I wanted to know. Another thing to add.</li>
          </ul>
        </MuseumSection>
        <MuseumSection id="design-section">
          <h3>Design</h3>
          <h4>The Photos</h4>
          <p>
            The easiest challenge for me to tackle was how to integrate at least 1 photo of a building from
            the collection we were given. We were allowed to modify or add to the image but we had to include
            one as an example. I dropped one of the images in Keynote, lowered the opacity to better see the 
            edges and started laying down lines.
          </p>
          <MuseumGraphic>
            <img
              src={HouseOriginal}
              alt='Modern building that looks like it is made of stacked blocks and glass'
            />
          </MuseumGraphic>
          <MuseumGraphic>
            <img
              src={HouseLines}
              alt='Previous image but more faint and with a few lines outlining the edges'
            />
          </MuseumGraphic>
          <p>
            Once I'd added enough lines, I removed the original image and what I had left looked like the original
            architect's render.
          </p>
          <MuseumGraphic>
            <img
              src={HouseRender}
              alt='Lines outlining the edges and shapes of the previous image'
            />
          </MuseumGraphic>
          <h4>The Layout</h4>
          <p>
            I initially started with some VERY rough ideas of layouts. I just wanted to get all my ideas
            on the table and then I could refine. I didn't enjoy this part of the process because I wanted
            the text to dictate the spacing I could have rather than forcing the text to fit into the spaces
            I'd created.
          </p>
          <MuseumGraphic>
            <img
              src={RoughMockups}
              alt='Pencil and paper outlines of the poster layout'
            />
          </MuseumGraphic>
          <p>
            My preferred technique is to throw all the text, images, and map on the screen and move things 
            around until there's a flow or spacing that feels right. I did about 7 black-and-white versions 
            (so color wouldn't distract) until I found one that made more sense. 
          </p>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={BWMock1}
              alt='Layout of poster with speaker names at top, map in center, and sessions in 2 columns'
            />
          </MuseumGraphic>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={BWMock2}
              alt='Layout of poster with speaker names at top, map on left, and sessions in two columns'
            />
          </MuseumGraphic>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={BWMock3}
              alt='Layout of poster with speaker names in a box with map and sessions in 3 columns'
            />
          </MuseumGraphic>
          <h4>Title</h4>
          <p>
            I even tried some more "avant-garde" stylings of the title before settling on a simple, bold
            design that would be more legible to our audience. The first had part of an image in the letters 
            and the second used buildings to form the letters.
          </p>
          <MuseumGraphic>
          <img
            src={TitleMock}
            alt='Layout of poster with speaker names in a box with map and sessions in 3 columns'
          />
          </MuseumGraphic>
          <h4>Colors</h4>
          <p>I then played around with a number of shades in warm reddish browns, greys, and oranges.</p>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={ColorMock1}
              alt='Layout of poster with a grey-peach background, brown-grey block for map.'
            />
          </MuseumGraphic>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={ColorMock2}
              alt='Layout of poster with a grey-peach background, peach block for map.'
            />
          </MuseumGraphic>
          <h4>Final Design...? Maybe?</h4>
          <p>
            I needed to settle on one of these designs since I only had a week. I initially picked the 
            design below but I still wasn't 100% sold on the colors. I'd also been doubting if it was necessary 
            to add the map and 2 (instead of 1) image since it made the layout a bit more confusing.
          </p>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={FinalMaybe}
              alt='Layout of poster with a grey-peach background, grey block for map'
            />
          </MuseumGraphic>
        </MuseumSection>
        <MuseumSection id="final-section">
          <h3>Final Result</h3>
          <p>
            I tried to warm up the poster more, remove some unnecessary color blocks behind the hours, and 
            isolate the details from the map.
          </p>
          <MuseumGraphic $orientation={'vertical'}>
            <img
              src={FinalPoster}
              alt='Final poster has 3 columns for sessions, 2 renders of buildings, a section at the bottom for info and the map'
            />
          </MuseumGraphic>
        </MuseumSection>
     </MuseumWrapper>
    </>
  )
}
  
export default Museum;