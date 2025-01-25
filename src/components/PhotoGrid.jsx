import React from 'react';
import styled from 'styled-components';

const GridCardsTitle = styled.h3`
  margin-top: 2.2em;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-major)` : `var(--fg-light-text-major)`)};

  @media (max-width: 767px) {
    font-size: 1.35rem;
    margin-top: 1.4em;
  }
`;

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px)); /* 2 cards across */
  grid-auto-flow: row;
  gap: 20px;
  margin-top: 0.8em;

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* 1 card across */
  }
`;

const Card = styled.div`
  grid-column: span 1;
  min-width: 0;

  @media (max-width: 767px) {
    grid-column: span 2;
  }
`;

const CardLabel = styled.h4`
  padding: 15px 0; 
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-normal)` : `var(--fg-light-text-normal)`)};
  font-size: 0.85rem;
`;

const CardImage = styled.div`
  display: block;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: 18px;
  overflow: hidden;
  grid-column: span 2;
  align-items: center;
  overflow: hidden;

  img {
    display: block;
    aspect-ratio: 10/7;
    max-width: 100%;
    object-position: center;
    object-fit: cover;
    margin: 0;
    width: 100%;
  }

  @media (max-width: 735px) {
    grid-column: span 1;
  }
`;

function PhotoGrid({ children, color='light' }) {
  return (
    <GridCards className='photo-grid'>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { color })
      })}
    </GridCards>
  )
}

function Photo({ children, color, src, alt='No description provided.' }) {
  return (
    <Card>
      <CardImage className='photo-grid-card'>
        <img src={src} alt={alt} />
      </CardImage>
      <CardLabel aria-label='photo-description' color={color}>{children}</CardLabel>
    </Card>
  )
}

function Title({ children, color }) {
  return <GridCardsTitle color={color}>{children}</GridCardsTitle>;
}

/**
 * Attach sub-components for convenient usage like:
 * <PhotoGrid.Title />
 * <PhotoGrid>
 *   <PhotoGrid.Photo />
 *   <PhotoGrid.Photo />
 * </PhotoGrid>
 */
PhotoGrid.Photo = Photo;
PhotoGrid.Title = Title;

export default PhotoGrid;