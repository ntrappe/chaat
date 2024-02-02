import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookPre from '../../assets/project-previews/book-preview.png';
import PomodoroPre from '../../assets/project-previews/pomodoro-preview.png';
import MountainPre from '../../assets/project-previews/mountain-preview.png';
import VacuumPre from '../../assets/project-previews/vacuum-preview.png';
import FlowPre from '../../assets/project-previews/flow-preview.png';
import CalPre from '../../assets/project-previews/calendar-preview.png';
import MuseumPre from '../../assets/project-previews/museum-preview.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const DesignCases = ['museum', 'calendar', 'pomodoro', 'rock', 'vacuum'];
const EngCases = ['bookify', 'flow'];
const Topics = ['design', 'engineering'];

const GridWrapper = styled.div`
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
  cursor: pointer;

  @media (max-width: 767px) {
    grid-column: span 2;
  }
`;

const CardLabel = styled.h4`
  font-size: 0.8rem;
  padding: 10px 0; 
  color: var(--wet-concrete);

  &:hover {
    color: var(--asphalt);
    text-decoration: underline;
  }

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
    aspect-ratio: 16/9;
    max-width: 100%;
    object-position: center;
    object-fit: cover;
    margin: 0;
    width: 100%;
  }

  &:hover {
    border: 3px solid rgba(0,0,0,.25);
  }

  @media (max-width: 735px) {
    grid-column: span 1;
  }
`;

function ProjectGrid({ $mode }) {

  /**
   * When a case study is clicked, set it in local storage. Sidebar is listening to changes
   * to storage and will update the selected item.
   * 
   * @param {string} index case study name
   */
  const setItem = (index) => {
    // save that case study item to local storage
    if (DesignCases.includes(index) || EngCases.includes(index)) {
      window.localStorage.setItem('case-study', index);
    } else {
      console.error(`Error @ProjectGrid: Unexpected child given ${index}`);
    }
    
    // save the parent of the case study to local storage
    if (DesignCases.includes(index)) {
      localStorage.setItem('case-topic', Topics[0])
    } else if (EngCases.includes(index)) {
      localStorage.setItem('case-topic', Topics[1]);
    } else {
      console.error('Error @ProjectGrid: Child does not belong to any case topic');
    }
    // Dispatch event notification AFTER everything has been loaded into storage
    window.dispatchEvent(new Event('storage'));
  }

  return (
    <>
      <GridWrapper id="project-grid" $mode={$mode}>
        <GridTitle>Projects</GridTitle>
        <GridTag>Dive into case studies unveiling creative problem-solving journeys.</GridTag>
        <GridCardsTitle>Recently Updated</GridCardsTitle>
        <GridCards>
          <Card>
            <Link to={`/projects/museum`} onClick={() => setItem(DesignCases[0])}>
              <CardImage>
                <img 
                  src={MuseumPre}
                  alt="Bust of a man with his head and neck on a purple-pink background"
                />
              </CardImage>
              <CardLabel>Museum Poster</CardLabel>
            </Link>
          </Card>
          <Card>
            <Link to={`/projects/pomodoro`} onClick={() => setItem(DesignCases[2])}>
              <CardImage>
                <img 
                  src={PomodoroPre}
                  alt="tomato representing a pomodoro on a red background"
                />
              </CardImage>
              <CardLabel>Pomodoro Timer</CardLabel>
            </Link>
          </Card>
          <Card>
            <Link to={`/projects/rock`} onClick={() => setItem(DesignCases[3])}>
              <CardImage>
                <img 
                  src={MountainPre}
                  alt="mountain with two peaks on a blue background"
                />
              </CardImage>
              <CardLabel>Rock App</CardLabel>
            </Link>
          </Card>
        </GridCards>
        <GridCardsTitle>Coming Soon</GridCardsTitle>
        <GridCards>
          <Card>
            <Link to={`/projects/bookify`} onClick={() => setItem(EngCases[0])}>
              <CardImage>
                <img 
                  src={BookPre}
                  alt="open book on a green background"
                />
              </CardImage>
              <CardLabel>Bookify App</CardLabel>
            </Link>
          </Card>
          <Card>
            <Link to={`/projects/flow`} onClick={() => setItem(EngCases[1])}>
              <CardImage>
                <img 
                  src={FlowPre}
                  alt="tomato representing a pomodoro on a red background"
                />
              </CardImage>
              <CardLabel>Flow Controller</CardLabel>
            </Link>
          </Card>
          <Card>
            <Link to={`/projects/calendar`} onClick={() => setItem(DesignCases[1])}>
              <CardImage>
                <img 
                  src={CalPre}
                  alt="calendar icon with date january 20th on a cyan background"
                />
              </CardImage>
              <CardLabel>NPS 2025 Calendar</CardLabel>
            </Link>
          </Card>
          <Card>
            <Link to={`/projects/vacuum`} onClick={() => setItem(DesignCases[4])}>
              <CardImage>
                <img 
                  src={VacuumPre}
                  alt="side profile of a vacuum on a purple background"
                />
              </CardImage>
              <CardLabel>Vaccum Redesign</CardLabel>
            </Link>
          </Card>
        </GridCards>
      </GridWrapper>
    </>
  )
}
  
export default ProjectGrid;