import React from 'react';
import styled from 'styled-components';

const StyledMarqueeRowWrapper = styled.ul`
  display: inline-block;  /* elements appear on same line */
  margin-bottom: 20px;
  height: 100%;
  margin: 0;
  list-style: none;
  white-space: nowrap;
  font-size: 0;   /* Hides text given to list element */

  @media only screen and (max-width: 734px) {
    --item-width: var(--marquee-width-small);
    --item-height: var(--marquee-height-small);
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    --item-width: var(--marquee-width-medium);
    --item-height: var(--marquee-height-medium);
  }

  @media only screen and (min-width: 1069px) {
    --item-width: var(--marquee-width-large);
    --item-height: var(--marquee-height-large);
  }

  .marquee-item {
    display: inline-block;  /* needed here too to be on same line */
    margin-inline: 10px; // or 20px
    border-radius: 18px;
    width: var(--item-width);
    height: var(--item-height);
    background-repeat: no-repeat;
    background-position: center center; /* Centers both horizontally and vertically */
    background-size: cover;
  }
  
  .border {
    border: 1px solid #444;
  }
`;

/**
 * A horizontally scrolling row designed for marquee effects.
 * Automatically applies styling to ensure children are displayed inline and responsive.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to display within the marquee row.
 * @returns {JSX.Element} The rendered marquee row component.
 */
function MarqueeRow({ children }) {
  return (
    <StyledMarqueeRowWrapper className='marquee-row'>
      {children}
    </StyledMarqueeRowWrapper>
  )
}

/**
 * An individual item in the marquee row.
 * Displays a background image and optionally a border.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Optional child elements to render inside the marquee item.
 * @param {string} [props.visual='placeholder.png'] - Path to the image used as the background.
 * @param {boolean} [props.border=false] - Whether to display a border around the item.
 * @returns {JSX.Element} The rendered marquee item.
 */
function MarqueeItem({ children, visual='placeholder.png', border=false }) {
  return (
    <li 
      className={`marquee-item ${border ? 'border' : ''}`}
      style={{ backgroundImage: `url('public/${visual}')` }}
    >
      {children}
    </li>
  )
}

MarqueeRow.Item = MarqueeItem;

export default MarqueeRow;