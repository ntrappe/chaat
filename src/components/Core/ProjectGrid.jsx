import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HID = 'hidden';

const GridWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === HID ? 'none' : 'flex')};
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

  @media (max-width: 767px) {
    grid-column: span 2;
  }
`;

const CardLabel = styled.h4`
  font-size: 0.8rem;
  padding: 10px 0; 
  color: var(--wet-concrete);

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
  }

  @media (max-width: 735px) {
    grid-column: span 1;
  }
`;

function ProjectGrid({ $mode }) {
  
  return (
    <>
      <GridWrapper $mode={$mode}>
        <GridTitle>Projects</GridTitle>
        <GridTag>Dive into case studies unveiling creative problem-solving journeys.</GridTag>
        <GridCardsTitle>Recently Updated</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src="/src/assets/project-previews/pomodoro-preview.png"
                alt="tomato representing a pomodoro on a red background"
              />
            </CardImage>
            <CardLabel>Pomodoro Timer</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src="/src/assets/project-previews/mountain-preview.png"
                alt="mountain with two peaks on a blue background"
              />
            </CardImage>
            <CardLabel>Rock App</CardLabel>
          </Card>
        </GridCards>
        <GridCardsTitle>Coming Soon</GridCardsTitle>
        <GridCards>
          <Card>
            <CardImage>
              <img 
                src="/src/assets/project-previews/vacuum-preview.png"
                alt="side profile of a vacuum on a purple background"
              />
            </CardImage>
            <CardLabel>Vaccum Redesign</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src="/src/assets/project-previews/book-preview.png"
                alt="open book on a green background"
              />
            </CardImage>
            <CardLabel>Bookify App</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src="/src/assets/project-previews/flow-preview.png"
                alt="tomato representing a pomodoro on a red background"
              />
            </CardImage>
            <CardLabel>Flow Controller</CardLabel>
          </Card>
          <Card>
            <CardImage>
              <img 
                src="/src/assets/project-previews/calendar-preview.png"
                alt="calendar icon with date january 20th on a cyan background"
              />
            </CardImage>
            <CardLabel>NPS 2025 Calendar</CardLabel>
          </Card>
        </GridCards>
      </GridWrapper>
    </>
  )
}
  
export default ProjectGrid;