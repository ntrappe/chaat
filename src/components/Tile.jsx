import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledTileWrapper = styled.li`
  background-color: ${(props) => (props.bg)};
  border-radius: 12px;
  list-style-type: none; 

  @media only screen and (max-width: 734px) {
    width: var(--tile-size-small);
    height: var(--tile-size-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    width: var(--tile-size-medium);
    height: var(--tile-size-medium);
  }

  @media only screen and (min-width: 1069px) {
    width: var(--tile-size-large);
    height: var(--tile-size-large);
  }
`;

const StyledTileControls = styled.span`
`;

function Tile({ color, bg='grey', children }) {
  const tileRef = useRef(null);

  const change = () => {
    window.dispatchEvent(new Event('tile expanded'));

    if (tileRef.current) {
      const currSize = tileRef.current.getBoundingClientRect().width;
      const currPadding = window.innerWidth < 735 ? 12 : 20;
      tileRef.current.style.backgroundColor = 'cyan';
      tileRef.current.style.gridColumn = 'span 2';
      tileRef.current.style.gridRow = 'span 2';
      tileRef.current.style.borderRadius = '14px';
      // Multiply the current size by 2 and set the new width and height in pixels
      tileRef.current.style.width = `${currSize * 2 + currPadding}px`;
      tileRef.current.style.height = `${currSize * 2 + currPadding}px`;
    }
  }

  return (
    <StyledTileWrapper className='tile' bg={bg} ref={tileRef} onClick={() => change()}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, color, bg);
      })}
      <StyledTileControls className='tile-controls'>
        x
      </StyledTileControls>
    </StyledTileWrapper>
  )
}

function Icon({ color, bg, children }) {
}

function Description({ color, children }) {

}

Tile.Icon = Icon;
Tile.Description = Description;

export default Tile;