import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAutoPlayControl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.75rem;
  justify-content: flex-end;

  @media only screen and (max-width: 734px) {
    width: ${(props) => (props.width ? props.width : `var(--viewport-width-small)`)};
    --icon-size: var(--autoplay-icon-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    width: ${(props) => (props.width ? props.width : `var(--viewport-width-medium)`)};
    --icon-size: var(--autoplay-icon-large);
  }

  @media only screen and (min-width: 1069px) {
    width: ${(props) => (props.width ? props.width : `var(--viewport-max-width-large)`)};
    --icon-size: var(--autoplay-icon-large);
  }

  button {
    align-self: flex-end;
    width: var(--icon-size);
    height: calc(var(--icon-size) + 1);
    opacity: var(--go-arrow-opacity);
  }

  button:hover {
    opacity: 1;
  }

  svg {
    width: inherit;
    height: inherit;
  }
`;

/**
 * Controls to play/pause that automatically start in play mode.
 * @param {String} color scheme is either dark or light (optional)
 * @param {Number} width width of the control section (optional)
 * @returns auto-play control section
 */
function AutoPlayControl({ color='dark', width=null, triggerPause, triggerPlay }) {
  const [paused, setPaused] = useState(false);

  return (
    <StyledAutoPlayControl className='autoplay-control' color={color} width={width}>
      <button 
        className={`play-pause-button ${paused ? 'paused' : 'playing'}`} 
        onClick={() => {
          // paused ? dispatchPlayEvent() : dispatchPauseEvent()
          paused ? triggerPlay() : triggerPause()
          setPaused(!paused); // Toggle the paused state
        }}
      >
        {paused && (
          <svg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' className='play-icon'>
            <circle fill='var(--circle-fill, none)' stroke='var(--circle-stroke, #86868b)' strokeWidth='2' cx='18' cy='18' r='17'></circle>
            <path fill='var(--icon-fill, #86868b)' d='m14.563 24.61 10.099-6.032c.688-.403.681-1.33 0-1.745l-10.099-6.055c-.695-.41-1.588-.084-1.588.684v12.46c0 .76.85 1.13 1.588.689Z'></path>
          </svg>
        )}
        {!paused && (
          <svg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' className='pause-icon'>
            <g fill='var(--icon-fill, none)' stroke='var(--icon-stroke, #86868b)' strokeWidth='2' strokeLinecap='round'>
              <g strokeWidth='2.3'>
                <path d='M14.8 11.75 v11.9'></path>
                <path d='M21.1 11.75 v11.9'></path>
              </g>
              <circle fill='var(--circle-fill, none)' stroke='var(--circle-stroke, #86868b)' cx='18' cy='18' r='17'></circle>
            </g>
          </svg>
        )}      
      </button>
    </StyledAutoPlayControl>
  )
}

export default AutoPlayControl;