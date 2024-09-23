import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledMosaicWrapper = styled.section`
  border: 1px solid yellow;
  position: relative;
  margin: 0 auto;

  @media only screen and (max-width: 734px) {
    --mosaic-viewport-width: var(--viewport-width-small);
    --mosaic-item-gap: var(--mosaic-gap-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    --mosaic-viewport-width: var(--viewport-width-medium);
    --mosaic-item-gap: var(--mosaic-gap-medium);
  }

  @media only screen and (min-width: 1069px) {
    --mosaic-viewport-width: var(--viewport-width-large);
    --mosaic-item-gap: var(--mosaic-gap-large);
  }

  width: var(--mosaic-viewport-width);
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledGrid = styled.div`
  display: grid;
  width: fit-content;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  margin: 0 auto;

  @media only screen and (max-width: 734px) {
    gap: var(--mosaic-gap-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    gap: var(--mosiac-gap-large);
  }

  @media only screen and (min-width: 1069px) {
    gap: var(--mosiac-gap-large);
  }
`;

function Mosaic({ color, children }) {
  const gridRef = useRef(null);
  const [selectedTile, setSelectedTile] = useState(null);

  const setGridTemplate = () => {
    if (gridRef.current) {
      const gridItems = gridRef.current.children;
      // Ensure there is at least one child to get the width from
      if (gridItems.length > 0) {
        const childWidth = gridItems[0].getBoundingClientRect().width;

        // Apply the calculated grid-template-columns to the grid container
        gridRef.current.style.gridTemplateColumns = `repeat(auto-fit, minmax(${childWidth}px, 1fr))`;
      }
    }
  }

  setGridTemplate();
  // Fill up grid on load and resize by calc size of children
  ['load', 'tile expanded', 'resize'].forEach(event => window.addEventListener(event, setGridTemplate));

  return (
    <StyledMosaicWrapper className='mosaic'>
      <StyledGrid className='mosaic-grid' ref={gridRef}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, index);
        })}
      </StyledGrid>
    </StyledMosaicWrapper>
  )
}

export default Mosaic;