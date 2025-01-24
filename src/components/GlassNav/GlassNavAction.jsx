/**
 * @fileoverview GlassNavAction component file. Renders a responsible toggle to
 * open or close the nav. Based on 
 * developer.apple.com/design/human-interface-guidelines/designing-for-games.
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const NavActionWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 833px) {
    grid-area: actions;
    justify-content: flex-end;
  }

  .nav-toggle-button {
    display: none;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    width: 1.17rem;
    height: var(--nav-height-small);

    @media only screen and (max-width: 833px) {
      display: flex;
    }
  }

  .chevron {
    display: block;
    position: relative;
    width: 100%;
    height: .7rem;
    transition: transform 1s cubic-bezier(.86,0,.07,1),transform-origin 1s cubic-bezier(.86,0,.07,1);
    transform: ${(props) => (props['data-open'] ? 'translateY(-8px)' : 'translateY(0)')};

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: .588rem;
      width: .705rem;
      height: .0588rem;
      background: ${(props) => (props['data-color'] === 'dark' ? `var(--fg-dark-icon)` : `var(--fg-light-icon)`)};
      opacity: 0.9;
      transition: transform 1s cubic-bezier(.86,0,.07,1),transform-origin 1s cubic-bezier(.86,0,.07,1);
    }

    &::before {
      right: 50%;
      border-radius: .5px 0 0 .5px;
      transform-origin: ${(props) => (props['data-open'] ? '100% 0' : '100% 100%')};
      transform: ${(props) => (props['data-open'] ? 'rotate(-40deg) scaleY(1.5)' : 'rotate(40deg) scaleY(1.5)')};
    }

    &::after {
      left: 50%;
      border-radius: 0 .5px .5px 0;
      transform-origin: ${(props) => (props['data-open'] ? '0 0' : '0 100%')};
      transform: ${(props) => (props['data-open'] ? 'rotate(40deg) scaleY(1.5)' : 'rotate(-40deg) scaleY(1.5)')};
    }
  }
`;

/**
 * GlassNavAction component.
 * Renders a responsive button to toggle the nav opened and closed.
 *
 * @function GlassNavAction
 * @param {string} props.color - Color variant for the nav (e.g., dark or light).
 * @param {boolean} props.isOpen - Whether the nav is open or not.
 * @returns {JSX.Element} The rendered GlassNavAction component.
 */
function GlassNavAction({ color, isOpen }) {
  /**
   * State representing whether the viewport is compact/mobile or not.
   * @type {[boolean, Function]}
   */  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);  
  
  /**
   * Handles viewport resizes to update `isMobile`.
   */
  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 833);
    }, 200); // Debounce resize events

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]); // Track viewport changes

  /**
   * Fires an event to open the nav.
   */
  const triggerNavOpen = () => window.dispatchEvent(new Event('glass nav open'));
  /**
   * Fires an event to close the nav.
   */
  const triggerNavClose = () => window.dispatchEvent(new Event('glass nav close'));

  return (
    <NavActionWrapper 
      className='nav-actions' 
      data-open={isOpen} 
      data-color={color}
    >
      <a 
        className='nav-toggle-button' aria-hidden={!isOpen}
        onClick={() => isOpen ? triggerNavClose() : triggerNavOpen()}
      >
        <span className={'chevron ' + (isOpen ? 'up' : 'down')}/>
      </a>
    </NavActionWrapper>
  )
}

export default GlassNavAction;