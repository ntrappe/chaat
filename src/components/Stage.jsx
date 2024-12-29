import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AutoPlayControl from './AutoPlayControl';

const SPEED = 60; // 60 pixels per second
const FPS = 60; // Frames per second

const StyledStageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;   /* Stacks rows top to bottom */

  .slider {
    will-change: transform;
  }
`;

// Inside of a row, content is laid out left to right
const StyledStageRow = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * A container component that manages rows (`StageRow`) for a scrolling animation.
 * Provides play/pause controls that affect all child rows.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The rows (`StageRow`) to display within the stage.
 * @returns {JSX.Element} The rendered stage component.
 */
function Stage({ children }) {
  const [isPaused, setIsPaused] = useState(false);

  const startPlay = () => setIsPaused(false);
  const startPause = () => setIsPaused(true);

  return (
    <StyledStageWrapper className='stage'>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { isPaused })
      })}
      <AutoPlayControl triggerPlay={startPlay} triggerPause={startPause}/>
    </StyledStageWrapper>
  );
}

/**
 * A row component that scrolls its content horizontally in an infinite loop.
 * Handles pausing, playing, and resetting its position when the content scrolls off-screen.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to display within the row.
 * @param {boolean} props.isPaused - Whether the animation is currently paused.
 * @returns {JSX.Element} The rendered stage row component.
 */
function StageRow({ children, isPaused }) {
  const rowRef = useRef(null);
  let scrollOffset = useRef(0); // Persist offset across renders
  let animationFrameId = useRef(null); // Persist frame ID across renders

  /**
   * Calculates rightmost edge of an element. 
   */
  const getRightEdge = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.x + rect.width;
  };

  /**
   * Continuously updates the horizontal position of the row for a scrolling effect.
   * Resets the position when the original content has fully scrolled off-screen.
   */
  function animate() {
    if (isPaused) return; // Stop animation when paused

    // Decrease position based on speed (100 pixels/sec) and frame rate (60 FPS)
    scrollOffset.current -= SPEED / FPS; // Move by speed per sec (60 frames/sec)
    
    if (rowRef.current) {
      // Access the original list and calculate its right edge
      const originalList = rowRef.current.children[0];
      const originalListRightEdge = getRightEdge(originalList);
      
      // Reset position if the right edge of the original list is off-screen
      if (originalListRightEdge < 0) {
        scrollOffset.current = 0;
      }

      // Apply the updated position to the row
      rowRef.current.style.transform = `translateX(${scrollOffset.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(animate); // Persist ID
  }
  
  /**
   * Start or stop the animation when `isPaused` changes.
   * Clean up the animation frame on unmount.
   */
  useEffect(() => {
    if (!isPaused) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrameId.current);
    }
    return () => cancelAnimationFrame(animationFrameId.current); // Cleanup on unmount
  }, [isPaused]);

  return (
    <StyledStageRow className='stage-row' ref={rowRef}>
      {children}
      {children}
    </StyledStageRow>
  );
}


Stage.Row = StageRow;

export default Stage;