import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import NavControl from './NavControl';
import Pagination from './Pagination';

const GAP_NARROW = 40;
const GAP_SPACIOUS = 80;

const StyledCarouselWrapper = styled.section`
  position: relative;

  @media only screen and (max-width: 734px) {
    --gallery-snippet-width: var(--snippet-width-small);
    --carousel-viewport-width: var(--carousel-width-small);
    --gallery-trigger-width: var(--gallery-trigger-width-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    --carousel-viewport-width: var(--carousel-width-medium);
    --gallery-trigger-width: var(--gallery-trigger-width-medium);
  }  

  @media only screen and (min-width: 1069px) {
    --gallery-snippet-width: var(--snippet-width-large);
    --carousel-viewport-width: var(--carousel-width-large);
    --gallery-trigger-width: var(--gallery-trigger-width-large);
  }
`;

const StyledScrollContainer = styled.div`
  border: 1px solid skyblue;
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
  border: 1px solid orange;
  display: grid;
  grid-auto-flow: column;
  margin: 0;
  justify-content: start;
  -webkit-flex-pack: start;
  -ms-flex-pack: start;

  /* carousel flush with sides of browser but list of items offset */
  padding-left: calc((100% - var(--carousel-viewport-width)) / 2);
  padding-right: calc((100% - var(--carousel-viewport-width)) / 2);
  width: fit-content;     /* Last item in carousel pressed against right edge */

  .snippet::after {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    right: calc(var(--carousel-item-gap-spacious) / -2);
    background-color: white;
    width: 1px;
  }

  @media only screen and (max-width: 734px) {
    grid-gap: var(--carousel-item-gap-narrow);
    .snippet::after {
      right: calc(var(--carousel-item-gap-narrow) / -2);
    }
  }

  @media only screen and (min-width: 735px) {
    grid-gap: var(--carousel-item-gap-spacious);
  }

  .carousel-track-item .preview {
    border-radius: 20px;
    overflow: hidden;  /* cut anything that falls outside, no ::after effects */
    min-height: var(--preview-min-height);  // TODO 
  }

  
`;

function Carousel({ children, gap='spacious' }) {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);
  const [itemInFocus, setItemInFocus] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const numCarouselItems = React.Children.count(children);

  // const moveForward = () => {
  //   console.log('move forward')
  //   let scrollDistance = gap === 'spacious' ? GAP_SPACIOUS : GAP_NARROW;

  //   if (trackRef.current) {
  //     // Get the width of the first child element
  //     const firstChild = trackRef.current.children[0];
  //     scrollDistance += firstChild.offsetWidth;
  //   }

  //   scrollRef.current.scrollBy({
  //     left: scrollDistance,
  //     behavior: 'smooth'
  //   });

  //   const newItem = currentItem + 1;
  //   setCurrentItem(newItem);
  //   setDisablePrev(newItem < 1);
  //   setDisableNext(newItem > 8);
  // }

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

        setCurrentItem(newItem);
        setDisablePrev(newItem < 1);
        setDisableNext(newItem > (numCarouselItems - 1));
      }
    }
  }

  const moveBackward = () => {
    console.log('move backward')
    let scrollDistance = gap === 'spacious' ? GAP_SPACIOUS : GAP_NARROW;

    if (trackRef.current) {
      // Get the width of the first child element
      const firstChild = trackRef.current.children[0];
      scrollDistance += firstChild.offsetWidth;
    }

    scrollRef.current.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth'
    });
  }

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

  useEffect(() => {
    if (itemInFocus === 0) {
      setDisablePrev(true);
    } else if (itemInFocus === (numCarouselItems - 1)) {
      setDisableNext(true);
    } else {
      setDisablePrev(false);
      setDisableNext(false);
    }
  }, [itemInFocus])

  return (
    <StyledCarouselWrapper>
      <StyledScrollContainer className='carousel-container' ref={scrollRef}>
        <StyledCarouselTrack className='carousel-track' ref={trackRef}>
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
      <p style={{color:'white'}}>item: {currentItem}</p>
      <p style={{color:'cyan'}}>focus: {itemInFocus}</p>
    </StyledCarouselWrapper>
  )
}

export default Carousel;