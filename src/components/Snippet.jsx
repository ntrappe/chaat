import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// const StyledSnippetWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: var(--snippet-width-large);
//   max-width: var(--snippet-width-large);

//   @media only screen and (max-width: 734px) {
//     width: var(--snippet-width-small);
//     max-width: var(--snippet-width-small);
//   }
// `;

const StyledSnippetWrapper = styled.li`
border: 1px solid yellow;
  display: flex;
  flex-direction: column; 
  position: relative;
  z-index: 1;
  list-style-type: none; 
 
  @media only screen and (max-width: 734px) {
    width: var(--snippet-width-small);
    max-width: var(--snippet-width-small);
    scroll-snap-align: center;
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    width: var(--snippet-width-medium);
    max-width: var(--snippet-width-medium);
    scroll-snap-align: start;
  }

  @media only screen and (min-width: 1069px) {
    width: var(--snippet-width-large);
    max-width: var(--snippet-width-large);
    scroll-snap-align: start;
  }
`;

const StyledHeading = styled.h2`
  align-item: flex-start;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-heading)` : `var(--fg-light-text-major)`)};
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const StyledDescription = styled.p`
  flex-grow: 1;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-major)` : `var(--fg-light-text-major)`)};
  font-size: 19px;
  line-height: 1.4;
  font-weight: 300;
  margin: 0.8em 0;
`;

const StyledPrimaryAction = styled.p`
  align-item: flex-end;
  // margin-top: auto;
  font-size: 17px;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-link)` : `var(--fg-light-link)`)};

  a, span {
    color: inherit;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// function Snippet({ color='dark', size, children }) {
//   return (
//     <StyledSnippetWrapper className='snippet' color={color} size={size}>
//       {React.Children.map(children, child => {
//         return React.cloneElement(child, { color });
//       })}
//     </StyledSnippetWrapper>
//   )
// }

function Snippet({ index, color='dark', divider=true, children}) {
  return (
    <StyledSnippetWrapper index={index} className='snippet carousel-item' color={color} divider={divider}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {color});
      })}
    </StyledSnippetWrapper>
  )
}

function Heading({ color, children }) {
  return (
    <StyledHeading className='snippet-heading' color={color}>
      {children}
    </StyledHeading>
  )
}

function Description({ color, children }) {
  return (
    <StyledDescription className='snippet-description' color={color}>
      {children}
    </StyledDescription>
  )
}

function PrimaryAction({ color, href, children }) {
  return (
    <StyledPrimaryAction className='snippet-primary-action' color={color}>
      <a href={href}>
        <span className='snippet-more' aria-label={'more information on ' + children}>
          {children}
        </span>
        <span className='more-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg>
        </span>
      </a>
    </StyledPrimaryAction>
  )
}

Snippet.Heading = Heading;
Snippet.Description = Description;
Snippet.PrimaryAction = PrimaryAction;

export default Snippet;