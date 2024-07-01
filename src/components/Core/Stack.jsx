import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledStack = styled.ul`
  width: fit-content;

  li {
    font-family: 'SF Pro';
    font-size: 0.7em;
    margin-bottom: 0.8em;
    color: ${(props) => (props.color === 'dark' ? `var(--shark)` : `var(--concrete)`)};
    cursor: pointer;
  }

  .stack-heading {
    font-weight: 600;
    color: ${(props) => (props.color === 'dark' ? `var(--cloud)` : `var(--asphalt)`)};
  }

  .stack-text {
    cursor: text;
    font-weight: 600;
    font-weight: 400;
  }

  .stack-internal-page,
  .stack-external-link {
    cursor: pointer;
    font-weight: 400;
  }

  a {
    color: inherit;
    font-weight: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 676px) {
    li {
      font-size: 0.75em;
    }
  }
`;

/**
 * Creates an unordered list with text and/or links.
 * @param {String} color Passes along the colorscheme to match
 * @param {*} children Text and/or links passed from parent 
 * @returns unordered list element
 */
function Stack({ color, children }) {
  return (
    <StyledStack $color={color} className='stack'>
      {children}
    </StyledStack>
  ) 
}

/**
 * Creates a the first element with bolded text (title)
 * @param {String} children Text passed from parent 
 * @returns list element
 */
function Heading({ children }) {
  return (
    <li className='stack-heading'>
      {children}
    </li>
  )
}

/**
 * Creates a list element for just a text description
 * @param {*} children Text passed from parent
 * @returns list element
 */
function Text({ children }) {
  return (
    <li className='stack-text'>
      {children}
    </li>
  )
}

/**
 * Creates a list element that links to a page in the site
 * @param {*} children Text passed from parent
 * @param {String} page Name of page to redirect to
 * @returns list element
 */
function InternalPage({ children, page }) {
  return (
    <li className='stack-internal-page'>
      <Link to={`/${page}`}>{children}</Link>
    </li>
  )
}

/**
 * Creates a list element that links to a website
 * @param {*} children Text passed from parent
 * @param {String} link url 
 * @returns list element
 */
function ExternalLink({ children, link }) {
  return (
    <li className='stack-external-link'>
      <a href={link}>{children}</a>
    </li>
  )
}

// Named exports for direct access (no nested)
Stack.Heading = Heading;
Stack.Text = Text;
Stack.ExternalLink = ExternalLink;
Stack.InternalPage = InternalPage;

export default Stack;