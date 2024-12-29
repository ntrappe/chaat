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

  // const dispatchPlayEvent = () => {
  //   window.dispatchEvent(new Event('autoplay play'));
  // };

  // const dispatchPauseEvent = () => {
  //   window.dispatchEvent(new Event('autoplay pause'));
  // }

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
          <svg height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg' className='play-icon'>
            <g fill='none' fillRule='evenodd'>
              <circle cx='20' cy='20' fill='#86868b' r='20'></circle>
              <path d='m0 12.348v-10.687c0-1.089.657-1.661 1.471-1.661.449 0 .731.075 1.127.318l8.713 5.132c.772.455 1.189.825 1.189 1.544 0 .72-.417 1.09-1.189 1.545l-8.713 5.132c-.396.243-.678.318-1.127.318-.814 0-1.471-.551-1.471-1.641' fill='#fff' transform='translate(15 13.0055)'></path>
            </g>
          </svg>
        )}
        {!paused && (
          <svg height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg' className='pause-icon'>
            <g fill='none' fillRule='evenodd'>
              <circle cx='20' cy='20' fill='#86868b' r='20'></circle>
              <g fill='#fff' transform='translate(13.75 13)'>
                <path d='m3 14h-1.5c-.828 0-1.5-.672-1.5-1.5v-11c0-.828.672-1.5 1.5-1.5h1.5c.828 0 1.5.672 1.5 1.5v11c0 .828-.672 1.5-1.5 1.5'></path>
                <path d='m11 14h-1.5c-.828 0-1.5-.672-1.5-1.5v-11c0-.828.672-1.5 1.5-1.5h1.5c.828 0 1.5.672 1.5 1.5v11c0 .828-.672 1.5-1.5 1.5'></path>
              </g>
            </g>
          </svg>
        )}      
      </button>
    </StyledAutoPlayControl>
  )
}

export default AutoPlayControl;