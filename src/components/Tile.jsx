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

function Tile({ color, bg='grey', children }) {
  return (
    <StyledTileWrapper className='tile' bg={bg}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, color, bg);
      })}
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