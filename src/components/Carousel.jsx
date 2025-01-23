import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import NavControl from './NavControl';

const MOBILE = 734;

const StyledCarouselWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 734px) {
    --carousel-viewport-width: var(--viewport-width-small);
    --carousel-item-gap: ${(props) => (props.gap == 'spacious' ? `var(--carousel-item-gap-medium)` : `var(--carousel-item-gap-small)`)};
    --carousel-preview-width: var(--preview-width-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    --carousel-viewport-width: var(--viewport-width-medium);
    --carousel-item-gap: ${(props) => (props.gap == 'spacious' ? `var(--carousel-item-gap-large)` : `var(--carousel-item-gap-small)`)};
    --carousel-preview-width: var(--preview-width-medium);
  }  

  @media only screen and (min-width: 1069px) {
    --carousel-viewport-width: var(--viewport-width-large);
    --carousel-item-gap: ${(props) => (props.gap == 'spacious' ? `var(--carousel-item-gap-large)` : `var(--carousel-item-gap-small)`)};
    --carousel-preview-width: var(--preview-width-large);
  }
`;

const StyledScrollContainer = styled.div`
  display: block;
  overflow: scroll;
  will-change: transform;
  scroll-snap-type: x mandatory;        // Content snaps into place as you scroll
  -webkit-scroll-snap-type: x mandatory;
  scroll-padding: calc((100% - var(--carousel-viewport-width)) / 2); // TODO
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 734px) {
    scroll-padding: 0;
  }
`;

const StyledCarouselTrack = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--carousel-item-gap);
  margin: 0;
  justify-content: start;
  -webkit-flex-pack: start;
  -ms-flex-pack: start;

  /* carousel flush with sides of browser but list of items offset */
  padding-left: calc((100% - var(--carousel-viewport-width)) / 2);
  padding-right: calc((100% - var(--carousel-viewport-width)) / 2);
  width: fit-content;     /* Last item in carousel pressed against right edge */
   
  // @media only screen and (min-width: 735px) and (max-width: 1068px) {
  //   width: 2500px;
  // }

  // Adding a dividing line between snippets
  .snippet:not(:last-child)::after {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    right: calc(var(--carousel-item-gap) / -2);
    background-color: white;
    width: 1px;
  }

  .preview {
    overflow: hidden;  /* cut anything that falls outside, no ::after effects */
    position: relative;
  }

  /* Fill up space after last preview so we can shift it all the way left
   * during a 'next' button click. Otherwise, it stays flush right. 
   */
  .preview:last-child {
    @media only screen and (min-width: 735px) {
      margin-right: calc(var(--carousel-viewport-width) - var(--carousel-preview-width));
    }
  }
`;

function Carousel({ children, gap='spacious' }) {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [itemInFocus, setItemInFocus] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const numCarouselItems = React.Children.count(children);

  const calculateScrollBy = (childIndex) => {
    if (!trackRef.current) {
      return -1;
    }

    const carouselItems = trackRef.current.children;
    const itemLeftRef = carouselItems[childIndex].getBoundingClientRect().left;
    let itemMoveOffset = 0;

    /* When mobile size, center item's center with the middle of the screen.
     * Otherwise, align left corner of the item with the left of the screen.
     */
    if (window.innerWidth < 735) {
      // Get the location of the center of the item on the window
      const itemCenterRef = itemLeftRef + (carouselItems[childIndex].offsetWidth / 2);
      // Calculate how much the center of the item needs to move to be centered
      itemMoveOffset = (window.innerWidth / 2) - itemCenterRef;
    } else {
      // Calculate left corner to become flush with
      const leftPadding = (window.innerWidth - (window.innerWidth < 1069 ? 692 : 940)) / 2;
      itemMoveOffset = itemLeftRef - leftPadding;
    }

    return Math.abs(Math.round(itemMoveOffset));
  }

  const moveForward = () => {
    if (trackRef.current) {
      // Get next child
      const newItem = itemInFocus + 1;
      const scrollLeftBy = calculateScrollBy(newItem);
      console.log(trackRef.current.getBoundingClientRect());

      if (scrollLeftBy > 0) {
        scrollRef.current.scrollBy({
          left: scrollLeftBy,
          behavior: 'smooth'
        });

        setItemInFocus(newItem);
      }
    }
  }

  const moveBackward = () => {
    if (trackRef.current) {
      // Get next child
      const newItem = itemInFocus - 1;
      const scrollLeftBy = calculateScrollBy(newItem);
      console.log(trackRef.current.getBoundingClientRect());

      if (scrollLeftBy > 0) {
        scrollRef.current.scrollBy({
          left: -scrollLeftBy,
          behavior: 'smooth'
        });

        setItemInFocus(newItem);
      }
    }
  }

  /**
   * When the carousel track has a scroll, we need to enable/disable the prev and next controls.
   * 
   * (A) If the first child is within the visible viewport, prev is disabled. Otherwise, if it has
   * moved beyond the screen (left), enable it. (B) On mobile, the last child will be flush with the
   * right side of the screen. So, if it's still beyond the screen (right), next button is
   * still enabled. If it's fully in the viewport, next is disabled. (C) Not mobile, the last child
   * will be flush with the left of the screen. Next is only disabled if it's fully in the viewport
   * AND left of the center of the viewport.
   */
  useEffect(() => {
    scrollRef.current.addEventListener('scroll', () => {
      if (trackRef.current) {
        const carouselItems = trackRef.current.children;
        const firstChildLeft = carouselItems[0].getBoundingClientRect().left;
        const lastChildLeft = carouselItems[numCarouselItems - 1].getBoundingClientRect().left;
        const lastChildRight = lastChildLeft + carouselItems[numCarouselItems - 1].offsetWidth;

        // First child past left side of window --> prev ok
        // First child still in window --> no prev
        if (firstChildLeft < 0) {
          setDisablePrev(false);
        } else if (firstChildLeft < (window.innerWidth / 2)) {
          setDisablePrev(true);
        }

        let browserWidth = window.innerWidth;
        let browserCenter = browserWidth / 2;

        if (browserWidth <= MOBILE) {
          // [Mobile] Last child past right side of window --> next ok
          // [Mobile] Last child within viewport --> no next
          if (lastChildRight > browserWidth) {
            setDisableNext(false);
          } else if (lastChildRight > browserCenter) {
            setDisableNext(true);
          }
        } else {
          // [Not mobile] Last child right of center --> next ok
          // [Not mobile] Last child left of center --> no next
          if (lastChildRight < browserCenter) {
            setDisableNext(true);
          } else {
            setDisableNext(false);
          }
        }
      }
    })
  })

  useEffect(() => {
    scrollRef.current.addEventListener('scroll', () => {
      if (trackRef.current) {
        const carouselItems = trackRef.current.children;
        for (let i = 0; i < numCarouselItems; ) {
          const item = carouselItems[i];
          const xPos = item.getBoundingClientRect().left;
          if (xPos < 0) {
            i++;
          } else {
            setItemInFocus(i);
            break;
          }
        }
      }
    });
  })

  return (
    <StyledCarouselWrapper gap={gap}>
      <StyledScrollContainer className='carousel-container' gap={gap} ref={scrollRef}>
        <StyledCarouselTrack className='carousel-track' gap={gap} ref={trackRef}>
          {/* Wrap each <Preview> component in a <li> element */}
          {/* {React.Children.map(children, (child, index) => (
            <li className='carousel-track-item' id={'item-' + index}>{child}</li>
          ))} */}
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, index);
          })}
        </StyledCarouselTrack>
      </StyledScrollContainer>
      <NavControl
        triggerPrev={moveBackward}
        triggerNext={moveForward}
        disablePrev={disablePrev}
        disableNext={disableNext}
      />
      {/* <p style={{color:'cyan'}}>focus: {itemInFocus}</p> */}
    </StyledCarouselWrapper>
  )
}

export default Carousel;