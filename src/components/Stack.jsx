import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledStack = styled.div`
  pointer-events: auto;
  box-sizing: border-box;

  @media (max-width: 833px) {
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
`;

const StyledSectionTitle = styled.h3`
  float: none;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-major)` : `var(--fg-light-text-major)`)};
  pointer-events: auto;

  .dir-section-title {
    display: block;
    font-size: 13px;
    line-height: 1.3;
    font-weight: 500;
    margin-bottom: .8em;
    margin-inline-end: 20px;
    color: inherit;

    @media (max-width: 833px) {
      display: none;
    }
  }

  .dir-section-title-button {
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
    font-size: 13px;
    line-height: 1.3;
    font-weight: 400;
    width: 100%;
    text-align: start;
    color: inherit;
    z-index: 2;
    background-color: ${(props) => (props.color === 'dark' ? `var(--bg-dark-footer)` : `var(--bg-light-footer)`)};
    
    display: none;

    @media (max-width: 833px) {
      display: block;
    }
  }

  .dir-section-title-button > .dir-section-title {
    display: none;

    @media (max-width: 833px) {
      display: inline;
    }
  }

  .dir-section-title-icon {
    float: right;
    width: 11px;
    align-items: center;        /* vertically center in icon */
    justify-content: center;    /* horizontally center in icon */
    margin-top: 5px;            /* push down vertically to center */
    font-size: 14px;
    color: inherit;
    transition: transform 0.2s;
    display: none;

    @media (max-width: 833px) {
      display: flex;
    }
  }

  .dir-section-title-icon[direction='up'] {
    transform: rotate(180deg);
  }

`;

const StyledDirectory = styled.ul`
  font-size: 13px;
  font-weight: 300;
  padding-right: 5px;
  width: 100%;
  list-style: none;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-normal)` : `var(--fg-light-text-normal)`)};

  li {
    margin-bottom: .8em;
    pointer-events: auto;
    cursor: pointer;
  }

  @media (max-width: 833px) {
    margin: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    overflow: hidden;
    padding-top: 5px;
    padding-bottom: 16px;
    position: ${(props) => (props.$show ? 'static' : 'absolute')};;
    top: 100%;
    width: 100%;
    z-index: ${(props) => (props.$show ? '1' : '-1')};
    visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
    transform: ${(props) => (props.$show ? 'none' : 'translateY(-100px)')};
    transition: ${(props) => (props.$show ? 'transform 300ms ease' : 'none')};
    will-change: transform;
  }

  @media (max-width: 833px) {
    li {
      margin-bottom: 0;
      padding: 6px 14px;
    }
  }

  li:hover {
    text-decoration: underline;
  }
`;

/**
 * Creates an unordered list with text and/or links.
 * @param {String} color Passes along the colorscheme to match
 * @param {*} children Text and/or links passed from parent 
 * @returns unordered list element
 */
function Stack({ color='dark', children }) {
  const [showdir, setShowDir] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 833) {
        setShowDir(false);
      }
    })
  })

  return (
    <StyledStack color={color} className='stack'>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { color, showdir, setShowDir });
      })}
    </StyledStack>
  ) 
}

/**
 * Creates a the first element with bolded text (title)
 * @param {String} children Text passed from parent 
 * @returns list element
 */
function Heading({ color, showdir, setShowDir, children }) {
  return (
    <StyledSectionTitle color={color} className='stack-heading'>
      <span className='dir-section-title'>
        {children}
      </span>
      <button 
        className='dir-section-title-button' 
        aria-expanded={showdir}
        onClick={() => setShowDir(!showdir)}
      >
        <span className='dir-section-title'>{children}</span>
        <span className='dir-section-title-icon' direction={showdir ? 'up' : 'down'}>
          <svg className='footer-icon-svg' width='11' height='6' viewBox='0 0 11 6'>
            <polyline data-footer-icon-shape='' 
              stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' 
              fill='none' fillRule='evenodd' 
              points='10.075 0.675 5.5 5.323 0.925 0.675'
            >
              <animate data-footer-animate='expand' attributeName='points' 
                values='10.075 0.675 5.5 5.323 0.925 0.675;
                        10.075 3 5.5 3 0.925 3;
                        10.075 5.325 5.5 0.676 0.925 5.325' 
                dur='320ms' begin='indefinite' fill='freeze' 
                keyTimes='0; 0.5; 1' calcMode='spline' 
                keySplines='0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1'
              ></animate>
              <animate data-footer-animate='collapse' attributeName='points'
                values='10.075 5.325 5.5 0.676 0.925 5.325;
                        10.075 3 5.5 3 0.925 3;
                        10.075 0.675 5.5 5.323 0.925 0.675' 
                dur='320ms' begin='indefinite' fill='freeze' 
                keyTimes='0; 0.5; 1' calcMode='spline' 
                keySplines='0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1'
              ></animate>
            </polyline>
          </svg>
        </span>
      </button>
    </StyledSectionTitle>
  )
}

function Directory({ color, showdir, children }) {
  return (
    <StyledDirectory color={color} $show={showdir}>
      {children}
    </StyledDirectory>
  )
}

/**
 * Creates a list element. Can add a link to a page on this site or an external site.
 * @param {*} children Text passed from parent
 * @param {String} page Name of page to redirect to
 * @param {String} role Specify the type of list element
 * @returns list element
 */
function Item({ role='text', page, children}) {
  return (
    <li className={'stack-' + role}>
      {role === 'text' && (
        {children}
      )}
      {role === 'internal' && (
        <Link to={`/${page}`}>{children}</Link>
      )}
      {role === 'external' && (
        <a href={page}>{children}</a>
      )}
    </li>
  )
}

// Named exports for direct access (no nested)
Stack.Heading = Heading;
Stack.Directory = Directory;
Stack.Item = Item;

export default Stack;