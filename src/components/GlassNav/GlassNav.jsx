/**
 * @fileoverview GlassNav component file. Renders a responsive, scroll-locking
 * navigation bar with optional dark/light color scheme. Based on 
 * developer.apple.com/design/human-interface-guidelines/designing-for-games.
 */

import React, { useState, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import styled from 'styled-components';
import NavTitle from './GlassNavTitle';
import NavMenu from './GlassNavMenu';
import NavAction from './GlassNavAction';
import NavPre from './GlassNavPre';

const NavWrapper = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  min-width: var(--nav-width-min);
  height: var(--nav-height-large);

  @media only screen and (max-width: 833px) {
    height: var(--nav-height-small);
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 1;

  .nav-background {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    max-height: none;
    min-height: var(--nav-height-large);
    
    background-color: ${(props) => (props.color === 'dark' ? `var(--obsidian-glassy)` : `var(--white-glassy)`)};
    border-bottom: 0.5px solid;
    border-color: ${(props) => (props.color === 'dark' ? `var(--bg-dark-border)` : `var(--bg-light-border)`)};
    
    transition: ${(props) =>
      props['data-open'] 
        ? 'background-color 0.5s ease' 
        : 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)'};
    transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;

    @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
    }

    @media only screen and (max-width: 833px) {
      min-height: ${(props) => (props['data-open'] ? 'var(--nav-dropdown-height)' : '0')};
      background-color: ${(props) => 
        props.color === 'dark' 
        ? `var(--obsidian-thick-glassy)` 
        : `var(--white-thick-glassy)`};

    }
  }

  .nav-overlay {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    opacity: 0;
    z-index: 0;

    @media only screen and (max-width: 833px) {
      &.open {
        opacity: 1;
        background-color: var(--bg-shadow);
        bottom: 0;
        transition: opacity .7s cubic-bezier(.23,1,.32,1) .2s;
        height: 100vh; // todo
      }
    }
  }

  .nav-content {
    display: flex;
    position: relative;
    max-width: var(--viewport-max-width-large);
    min-height: var(--nav-height-large);
    margin: 0 auto;
    padding: 0 22px;
    justify-content: space-between;
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-major)` : `var(--fg-light-text-major)`)};
    z-index: 2;

    @media only screen and (max-width: 833px) {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-auto-rows: minmax(min-content, max-content);
      grid-template-areas: 'pre-title title actions' 'menu menu menu';
      padding: 0 16px;
      height: var(--nav-height-small);
    }
  }
`;

/**
 * GlassNav component.
 * Renders a responsive navigation bar with optional color scheme and scroll locking.
 *
 * @function GlassNav
 * @param {React.ReactNode} props.children - Child components (NavTitle, NavMenu, etc.).
 * @param {string} [props.color='dark'] - Color variant for the nav (e.g., dark or light).
 * @returns {JSX.Element} The rendered GlassNav component.
 */
function GlassNav({ children, color='dark' }) {
  /**
   * State representing whether the nav is open. Defaults to open if viewport > 833.
   * @type {[boolean, Function]}
   */  
  const [isOpen, setIsOpen] = useState(window.innerWidth > 833);
  /**
   * Tracks previous viewport width for detecting transitions between mobile and wide.
   * @type {[number, Function]}
   */
  const [prevWidth, setPrevWidth] = useState(window.innerWidth);
  /**
   * A ref to the nav container for body-scroll-lock.
   * @type {React.MutableRefObject<null|HTMLElement>}
   */
  const navRef = useRef(null);

  /**
   * Handles viewport resizes, toggling `isOpen` based on crossing 833px threshold.
   */
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      // (A) Mobile -> Wide => must be open
      if (prevWidth <= 833 && currentWidth > 833) {
        console.log('@GlassNav, mobile -> wide => open');
        setIsOpen(true);
      }
      // (B) Wide -> Mobile => initially closed
      else if (prevWidth > 833 && currentWidth <= 833) {
        console.log('@GlassNav, wide -> mobile => closed');
        setIsOpen(false);
      }
      // (C) Wide -> More Wide => do nothing (stays open)
      // (D) Mobile -> More Mobile => do nothing (preserve user's choice)
      else {
        console.log('@GlassNav, still mobile/wide so keep ' + isOpen);
      }

      setPrevWidth(currentWidth);
    }; // Removed debounce (perf) because caused

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [prevWidth]); // Track viewport changes

  /**
   * Listens for custom events ("glass nav open" / "glass nav close") to toggle `isOpen`
   * and uses body-scroll-lock to freeze/unfreeze background scrolling when in mobile mode.
   */
  useEffect(() => {
    const mobileNavOpened = () => {
      setIsOpen(true);
      if (navRef.current) disableBodyScroll(navRef.current);
    }

    const mobileNavClosed = () => {
      setIsOpen(false);
      if (navRef.current) enableBodyScroll(navRef.current);
    }

    window.addEventListener('glass nav open', mobileNavOpened);
    window.addEventListener('glass nav close', mobileNavClosed);

    return () => {
      window.removeEventListener('glass nav open', mobileNavOpened);
      window.removeEventListener('glass nav close', mobileNavClosed);
      clearAllBodyScrollLocks();
    }
  }, []);

  return (
    <NavWrapper 
      className='glass-nav'
      color={color}  
      aria-expanded={isOpen}
      role='navigation'
      ref={navRef}
    >
      <NavContainer className='glass-nav-container' color={color} data-open={isOpen}>
        <div className='nav-background' color={color} data-open={isOpen}/>
        <div className={'nav-overlay' + (isOpen ? ' open' : '')}/>
        <div className='nav-content' color={color}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { isOpen, color })
          })}
          <NavAction isOpen={isOpen} color={color}/>
        </div>
      </NavContainer>
    </NavWrapper>
  )
}

/**
 * Attach sub-components for convenient usage like:
 * <GlassNav>
 *   <GlassNav.Pre />
 *   <GlassNav.Title />
 *   <GlassNav.Menu />
 * </GlassNav>
 */
GlassNav.Title = NavTitle;
GlassNav.Menu = NavMenu;
GlassNav.Pre = NavPre;

export default GlassNav;