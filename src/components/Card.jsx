import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCardWrapper = styled.li`
  height: 100%; // todo: get rid of?

  @media only screen and (max-width: 734px) {
    --card-width: var(--card-width-small);
    --card-min-height: var(--card-height-small);
    --flip-icon-size: var(--flip-icon-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    --card-width: var(--card-width-medium);
    --card-min-height: var(--card-height-medium);
    --flip-icon-size: var(--flip-icon-small);
  }  

  @media only screen and (min-width: 1069px) {
    --card-width: var(--card-width-large);
    --card-min-height: var(--card-height-large);
    --flip-icon-size: var(--flip-icon-large);
  }

  width: var(--card-width);
  min-height: var(--card-min-height);
`;

const StyledCardFront = styled.div`
  border: 1px solid cyan;
  opacity: 1;
  background-color: #b23b34;
  display: block;
  position: absolute;
  width: inherit;
  min-height: inherit;
  border-radius: var(--preview-border-radius);
  // Bottom of the stack, covered by back card and controls
  z-index: 1; 
`;

const StyledCardBack = styled.div`
  border: 1px solid limegreen;
  background-color: #222;
  // display: block;
  // position: relative;
  // top: 0;
  // left: 0;
  // margin-top: 0;
  width: inherit;
  min-height: inherit;
  opacity: 0;
  // Middle of the stack, covers front card
  z-index: 3;
`;

const StyledCardControls = styled.label`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  bottom: var(--card-controls-y-buffer);
  width: inherit;
  cursor: pointer;
  // Top of the stack, covers cards
  z-index: 4;
`;

const StyledCardButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-right: var(--card-controls-x-buffer);
  border-radius: var(--circle-roundness);
  justify-content: center;
  background-color: white;
  opacity: var(--go-arrow-opacity);
  transition: transform 450ms cubic-bezier(0.45,0,0.2,1);
  padding: var(--flip-icon-padding);

  .flip-icon {
    width: var(--flip-icon-size);
    height: var(--flip-icon-size);
    color: black;
    opacity: var(--go-arrow-opacity);
    /* temp translation so can be rotated */
    // transform: translateX(-50%);
  }
`;

function Card({ color='dark', border, children }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <StyledCardWrapper className={flipped ? 'card' : 'card flipped'}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { flipped });
      })}
      <StyledCardControls className='card-controls' aria-expanded={flipped}>
        <StyledCardButton className='card-flip-button'>
          <svg className='flip-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z'></path>
          </svg>
        </StyledCardButton>
      </StyledCardControls>
    </StyledCardWrapper>
  )

}

function CardFront({ color, children }) {
  return (
    <StyledCardFront className='card-front'>

    </StyledCardFront>
  )
}

function Title({ children }) {

}

function CardBack({ color, children }) {
  return (
    <StyledCardBack className='card-back'>
      
    </StyledCardBack>
  )
}


Card.Front = CardFront;
Card.Front.Title = Title;
Card.Back = CardBack;

export default Card;