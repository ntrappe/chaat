import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledPreviewWrapper = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  -webkit-box-orient: vertical;   // Apple extension of layout
  height: 100%;
  border-radius: var(--preview-border-radius);

  // min height helps keep go-button separated fro text

  @media only screen and (max-width: 734px) {
    width: var(--preview-width-small);
    min-height: var(--preview-height-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    width: var(--preview-width-medium);
    min-height: var(--preview-height-medium);
  }

  @media only screen and (min-width: 1069px) {
    width: var(--preview-width-large);
    min-height: var(--preview-height-large);
  }
`;

const StyledContentWrapper = styled.div`
  order: 2;
  flex-grow: 1;             // Take up available space after video
  background-color: ${(props) => (props.$bg)};

  .preview-heading {
    font-weight: 500;
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-major)` : `var(--fg-dark-text-major)`)};

    @media only screen and (max-width: 734px) {
      font-size: var(--fg-size-subtitle-minor);
      line-height: 1.14;
      padding: 25px 23px;
    }

    @media only screen and (min-width: 735px) and (max-width: 1068px) {
      font-size: var(--fg-size-subtitle-normal);
      line-height: 1.125;
      padding: 29px 30px;
    }

    @media only screen and (min-width: 1069px) {
      font-size: var(--fg-size-subtitle-major);
      line-height: 1.1;
      padding: 37px 26px 36px 40px;
    }
  }

  .preview-trigger {
    background-color: red;
    position: absolute;
    bottom: var(--go-arrow-pos-bottom);
    right: var(--go-arrow-pos-right);
    border: none;
    border-radius: var(--circle-roundness);
    background-color: white;
    opacity: var(--go-arrow-opacity);
    padding: var(--go-arrow-padding);

    &:hover {
      opacity: 1;
    }
  }

  .go-arrow {
    color: black;
    opacity: var(--go-arrow-opacity);
    width: var(--go-arrow-icon-large);
    height: var(--go-arrow-icon-large);
    align-items: center;        /* vertically center in icon */
    justify-content: center;    /* horizontally center in icon */
    
    @media only screen and (max-width: 1068px) {
      width: var(--go-arrow-icon-small);
      height: var(--go-arrow-icon-small);
    }
`;

const StyledVideoWrapper = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;

  // Video takes up specific space
  @media only screen and (max-width: 734px) {
    min-height: var(--preview-video-height-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    min-height: var(--preview-video-height-medium);
  }

  @media only screen and (min-width: 1069px) {
    min-height: var(--preview-video-height-large);
  }
`;

const StyledMediaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: none;

  .image-startframe {
    position: absolute;
    top: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background-size: cover;
    background-image: url('/public/project-previews/${props => props.placeholder}-preview-placeholder.png');
    z-index: 3;
    opacity: ${(props) => (props.play ? '0' : '1')};
  }

  .preview-video {
    position: absolute;
    top: -1;
    height: calc(100% + 2px);
    width: 100%;
    opacity: ${(props) => (props.play ? '1' : '0')};
    object-fit: cover;
    justify-content: center;
  }
`;

const StyledPlaybackControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  text-align: center;
  z-index: 3;
  bottom: 20px;

  .play-button,
  .stop-button {
    color: white;
    width: var(--play-icon-large);
    height: var(--play-icon-large);
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    @media only screen and (max-width: 1068px) {
      width: var(--play-icon-small);
      height: var(--play-icon-small);
    }
  }
`;

function Preview({ color='dark', index, children }) {
  return (
    <StyledPreviewWrapper index={index} className='preview carousel-item' color={color}>
      {children}
    </StyledPreviewWrapper>
  )
}

function Content({ background='#222', children }) {
  return (
    <StyledContentWrapper $bg={background}>
      <p className='preview-heading'>{children}</p>
      <button className='preview-trigger'>
        <svg className='go-arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
          <path d='M4.53 4.75A.75.75 0 0 1 5.28 4h6.01a.75.75 0 0 1 .75.75v6.01a.75.75 0 0 1-1.5 0v-4.2l-5.26 5.261a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L9.48 5.5h-4.2a.75.75 0 0 1-.75-.75Z'>
          </path>
        </svg>
      </button>
    </StyledContentWrapper>
  )
}

function Video({ placeholder='building', media='building', children }) {
  const [playVideo, setPlayVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleStopReset);

    return () => {
      videoElement.removeEventListener('ended', handleStopReset);
    }
  });

  const handleStopReset = () => {
    const videoElement = videoRef.current;
    videoElement.pause();
    videoElement.currentTime = 0;
    setPlayVideo(false);
  }

  const handleReplay = () => {
    const videoElement = videoRef.current;
    videoElement.currentTime = 0;
    videoElement.play();
    setPlayVideo(true);
  }

  return (
    <StyledVideoWrapper placeholder={placeholder} play={playVideo}>
      <StyledMediaWrapper placeholder={placeholder} play={playVideo}>
        <figure className='image-startframe' play={playVideo} role='img'/>
        <video 
          ref={videoRef}
          className='preview-video' 
          role='presentation' 
          aria-hidden={!playVideo}
          src={`/public/project-videos/${media}-preview-video.mp4`}
          autoPlay muted
          preload='auto'
        />
        <StyledPlaybackControl play={playVideo}>
          <button 
            className='playback-trigger' 
            label={(playVideo ? 'stop ' : 'play ') + placeholder + ' animation'}
            onClick={playVideo ? handleStopReset : handleReplay}
          >
            {!playVideo && (
              <svg className='play-button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                <path d='M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z'></path><path d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5Z'>
                </path>
              </svg>
            )}
            {playVideo && (
              <svg className='stop-button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                <path d='M17.28 7.78a.75.75 0 0 0-1.06-1.06l-9.5 9.5a.75.75 0 1 0 1.06 1.06l9.5-9.5Z'>
                </path>
                <path d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z'>
                </path>
              </svg>
            )}
          </button>
        </StyledPlaybackControl>
      </StyledMediaWrapper>
    </StyledVideoWrapper>
  )
}

Preview.Content = Content;
Preview.Video = Video;

export default Preview;