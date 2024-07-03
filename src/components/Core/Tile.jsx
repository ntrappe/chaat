import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  grid-column-start: span 2;

  .tile {
    background-color: blue;
    min-height: 718px;
    height: 100%;
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 1;
    will-change: transform, opacity;
    clip-path: inset(1px 1px 1px 1px round 30px);
    width: 100%;
    z-index: 1;

    @media (max-width: 1260px) {
      min-height: 550px;
    }

    @media (max-width: 734px) {
      min-height: 565px;
    }
  }

  .tile[data-border='true'] {
    border: 1px solid navy;
  }

  .tile-labels {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 4;
    cursor: pointer;
  }

  .tile-button {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 20px;
    right: 20px;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    justify-content: center;
    cursor: pointer;
    z-index: 4;
    background: rgba(210, 210, 215, 0.64);
    color: rgba(0, 0, 0, 0.56);
    transition: transform 450ms cubic-bezier(0.45,0,0.2,1)
  }

  .card-expanded .tile-button {
    transform: rotate(45deg);
    transform-origin: center;
    transition-delay: 0s, 0s;
  }

  .tile-icon {
      position: absolute;
      /* slightly offset x so it can be rotated */
      inset-inline-start: 50%;
      /* temp translation so can be rotated */
      transform: translateX(-50%);
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
  }
`;

const StyledTileFront = styled.div`
  display: block;
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  transition: opacity 0.2s ease;

  .tile-front-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 8.3%;
    opacity: 0.76;
    background-color: black;

    @media (max-width: 1068px) {
      padding: 48px;
    }
  }
  
  .tile-title {
    display: block;
    opacity: .6;
    font-size: 28px;
    line-height: 1.15;
    font-weight: 500;
    color: rgb(245, 245, 247);
    margin-bottom: .4em;
  }

  .tile-subtitle {
    font-size: 60px;
    line-height: 1.05;
    font-weight: 500;
    color: rgb(245, 245, 247);
  }
`;

const StyledTileBack = styled.div`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 0;
  z-index: 3;

  .tile-back-content {
    width: 100%;
    height: 100%;
    align-self: center;
    visibility: hidden;
    opacity: 0;
    transition-delay: 0s;
    transition: opacity 450ms cubic-bezier(0.45,0,0.01,1) 450ms,visibility 0s linear 100ms;
    // color: #86868b;
    color: red;
    background-color: #f5f5f7;

    @media (max-width: 926px) {
      padding: 55px;
    }
  }

  .card-expanded {
    visibility: visible;
    opacity: 1;
  }

  .tile-description {
    font-size: 17px;
    line-height: 1.25;
    font-weight: 500;
  }
`;

function Tile({ border, children }) {
  const [expanded, setExpanded] = useState(false);


  return (
    <>
      <StyledTile>
        <div className={expanded ? 'tile card-expanded' : 'tile card'} data-border={border}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, { expanded });
          })}
          {/* {children} */}
          <label className='tile-labels' aria-expanded={expanded}>
            <span className='tile-button' onClick={() => setExpanded(!expanded)}>
              <svg className='tile-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z'></path>
              </svg>
            </span>
          </label>
        </div>
      </StyledTile>
    </>
  ) 
}

// function Visual({ children }) {
//   return <span className='Tile-Visual'>{children}</span>
// }

function TileFront({ children, expanded }) {

  return (
    <>
      <StyledTileFront className='tile-front' aria-hidden={expanded}>
        <div className='tile-front-content'>
          {children}
        </div>
      </StyledTileFront>
    </>
  )
}

function TileBack({ children, expanded }) {
  return (
    <>
      <StyledTileBack className='tile-back' aria-hidden={!expanded}>
        <div className={'tile-back-content' + (expanded ? ' card-expanded' : '')}>
          {children}
        </div>
      </StyledTileBack> 
    </>
  )
}

function Title({ children }) {
  return <h3 className='tile-title'>{children}</h3>;
}

function Subtitle({ children }) {
  return <h4 className='tile-subtitle'>{children}</h4>;
}

function Description({ children }) {
  return <p className='tile-description'>{children}</p>
}

// Named exports for direct access (no nested)
Tile.Front = TileFront;
Tile.Back = TileBack;
Tile.Front.Title = Title;
Tile.Front.Subtitle = Subtitle;
Tile.Back.Description = Description;

export default Tile;