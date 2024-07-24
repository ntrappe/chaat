import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledGalleryWrapper = styled.section`
  position: relative;

  --gallery-preview-width: var(--preview-width-large);
  --gallery-snippet-width: var(--snippet-width-large);
  --gallery-viewport-width: var(--gallery-width-large);
  --gallery-trigger-width: var(--gallery-trigger-width-large);

  @media only screen and (max-width: 1068px) {
    --gallery-preview-width: var(--preview-width-medium);
    --gallery-viewport-width: var(--gallery-width-medium);
    --gallery-trigger-width: var(--gallery-trigger-width-medium);
  }

  @media only screen and (max-width: 734px) {
    --gallery-preview-width: var(--preview-width-small);
    --gallery-snippet-width: var(--snippet-width-small);
    --gallery-viewport-width: var(--gallery-width-small);
    --gallery-trigger-width: var(--gallery-trigger-width-small);
  }
`;

const StyledScrollContainer = styled.div`
  display: block;
  overflow: scroll;
  will-change: transform;
  scroll-snap-type: x mandatory;        // Content snaps into place as you scroll
  -webkit-scroll-snap-type: x mandatory;
  scroll-padding: calc((100% - 692px) / 2); // TODO
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledGalleryList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin: 0;
  padding: 0;
  justify-content: start;
  -webkit-flex-pack: start;
  -ms-flex-pack: start;
  width: var(--gallery-viewport-width);    // TODO
  padding-left: 90px;
  padding-right: 90px;

  @media only screen and (max-width: 1068px) {
    // padding-left: calc(((100% - var(--gallery-width-medium)) / 2));
    // padding-right: calc(((100% - var(--gallery-width-small)) / 2));
    padding-left: 45px;
    padding-right: 45px;
  }

  .gallery-list-item {
    position: relative;
    z-index: 1;
    list-style-type: none;
    scroll-snap-align: start;
  }

  .gallery-list-item .preview {
    width: var(--gallery-preview-width);       // TODO
    border-radius: 20px;
    overflow: hidden;  /* cut anything that falls outside, no ::after effects */
    min-height: var(--preview-min-height);  // TODO 
  }

  .gallery-list-item .snippet {
    border: 1px solid yellow;
    width: var(--gallery-snippet-width);
    max-width: var(--gallery-snippet-width);
  }

  .gallery-list-item::after {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    right: -20px;
    background-color: white;
    width: 1px;
  }

  .gallery-list-item:last-child {
    overflow: hidden;   /* cut off separator for last snippet */
  }
`;

const StyledGalleryControls = styled.div`
  border: 1px solid lime;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: var(--gallery-trigger-width);
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-end;

  button {
    color: var(--fg-dark-trigger-fill);
    opacity: 0.7;
    align-self: flex-end;
    border: 1.75px solid;
    border-radius: 50%;
    padding: 5px;
  }

  button:last-child {
    margin-left: 15px;
  }

  svg {
    width: 22px;
    height: 22px;
  }

  button:hover {
    background-color: var(--fg-dark-trigger-fill);
    opacity: 1;
    border-color: var(--fg-dark-trigger-fill);

    svg {
      color: white;
    }
  }
`;

function GalleryS({ children }) {
  return (
    <StyledGalleryWrapper>
      <StyledScrollContainer className='scrollable-gallery'>
        <StyledGalleryList className='gallery-list'>
          {/* Wrap each <Preview> component in a <li> element */}
          {React.Children.map(children, (child, index) => (
            <li className='gallery-list-item' id={'item-' + index}>{child}</li>
          ))}
        </StyledGalleryList>
      </StyledScrollContainer>
      <StyledGalleryControls>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"></path></svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg>
        </button>
      </StyledGalleryControls>
    </StyledGalleryWrapper>
  )
}

export default GalleryS;