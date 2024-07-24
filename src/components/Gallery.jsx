import React, { useState, useEffect, useRef } from 'react';
import { scroller } from 'react-scroll';
import styled from 'styled-components';

const PREVIEW_WIDTH_L = 425;
const PREVIEW_WIDTH_M = 360;
const PREVIEW_WIDTH_S = 330;

const StyledGalleryWrapper = styled.section`
  position: relative;

  --gallery-preview-width: var(--preview-width-large);
  --gallery-viewport-width: var(--gallery-width-large);

  @media only screen and (max-width: 1068px) {
    --gallery-preview-width: var(--preview-width-medium);
    --gallery-viewport-width: var(--gallery-width-medium);
  }

  @media only screen and (max-width: 734px) {
    --gallery-preview-width: var(--preview-width-small);
    --gallery-viewport-width: var(--gallery-width-medium);
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
  grid-gap: var(--gallery-items-gap);
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
    overflow: hidden;
    z-index: 1;
    list-style-type: none;
    scroll-snap-align: start;
    min-height: var(--preview-min-height);  // TODO
    width: var(--gallery-preview-width);       // TODO
    border-radius: 20px;
  }

  .gallery-list-item .preview {
    
  }
`;

const StyledGalleryControls = styled.div`
  .gallery-trigger {
    position: absolute;
    bottom: 50%;
    border: none;
    border-radius: 50%;
    background-color: #6D6D73;
    opacity: 0.6;
    padding: 10px;    // top right bottom left
    z-index: 3;
    overflow: hidden;
    scroll: none;

    &:hover {
      background-color: #91929C;
      opacity: 0.8;
    }

    &:disabled {
      opacity: 0.4;
      cursor: default;

      svg {
        opacity: 0.4;
      }
    }
  }

  .arrow-previous {
    left: 20px;
  }

  .arrow-next {
    right: 20px;
  }

  svg {
    color: white;
    opacity: 0.9;
    width: var(--gallery-chevron-icon-size);
    height: var(--gallery-chevron-icon-size);
    align-items: center;        /* vertically center in icon */
    justify-content: center;    /* horizontally center in icon */

    $:hover {
      opacity: 1;
    }
  }
`;

function Gallery({ children }) {
  const scrollContainerRef = useRef(null);
  const [previewWidth, setPreviewWidth] = useState(window.innerWidth < 734 ? PREVIEW_WIDTH_S : (window.innerWidth > 1068 ? PREVIEW_WIDTH_L : PREVIEW_WIDTH_M));
  const [scrollPosition, setScrollPosition] = useState(scrollContainerRef.current ? scrollContainerRef.current.scrollLeft : 0);
  const [disablePrev, setDisablePrev] = useState(true);

  useEffect(() => {
    scrollContainerRef.current.addEventListener('scroll', () => {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
      setDisablePrev(scrollContainerRef.current.scrollLeft < previewWidth);
    });
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 734) {
        setPreviewWidth(PREVIEW_WIDTH_S);
      } else if (window.innerWidth > 1068) {
        setPreviewWidth(PREVIEW_WIDTH_L);
      } else {
        setPreviewWidth(PREVIEW_WIDTH_M);
      }
    })
  })

  const moveToNext = () => {
    scrollContainerRef.current.scrollBy({
      left: 310,
      behavior: 'smooth'
    });
  }

  const moveToPrev = () => {
    scrollContainerRef.current.scrollBy({
      left: -previewWidth,
      behavior: 'smooth'
    });
  }

  return (
    <StyledGalleryWrapper>
      <StyledScrollContainer ref={scrollContainerRef} className='scrollable-gallery'>
        <StyledGalleryList className='gallery-list'>
          {/* Wrap each <Preview> component in a <li> element */}
          {React.Children.map(children, (child, index) => (
            <li className='gallery-list-item' id={'item-' + index}>{child}</li>
          ))}
        </StyledGalleryList>
      </StyledScrollContainer>
      <StyledGalleryControls>
        <button 
          className='gallery-trigger arrow-previous' 
          aria-label='previous'
          onClick={() => moveToPrev()}
          disabled={disablePrev}
        >
          <svg className='left-chevron' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
            <path d='M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z'>
            </path>
          </svg>
        </button>
        <button 
          className='gallery-trigger arrow-next' 
          aria-label='next'
          onClick={() => moveToNext()}
        >
          <svg className='right-chevron' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
            <path d='M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z'>
            </path>
          </svg>
        </button>
        <h3 style={{color: 'white'}}>{scrollPosition}</h3>
      </StyledGalleryControls>
    </StyledGalleryWrapper>
  )
}

export default Gallery;