/**
 * @fileoverview GlassNavMenu component file. Renders a responsive menu with a list
 * of subpages. Based on 
 * developer.apple.com/design/human-interface-guidelines/designing-for-games.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavMenuWrapper = styled.div`
  display: flex;
  flex: 1 1 auto; // Can grow and shrink with space
  justify-content: flex-end;
  min-width: 0;
  font-family: 'SF Pro';
  font-size: .7rem;
  font-weight: 300;
  letter-spacing: -.01em;

  @media only screen and (max-width: 833px) {
    grid-area: menu;
  }

  .nav-menu-tray {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (max-width: 833px) {
      display: block;
      width: 100%;
      overflow: hidden;
      visibility: hidden;
      max-height: 0;
      transition-property: max-height, visibility;
      transition-duration: 0.5s, 0s;
      // transition: max-height 1s cubic-bezier(.28,.11,.32,1) .5s,visibility 0s linear 1s;
      transition-delay: 1s, 2s;

      &.open {
        visibility: visible;
        max-height: calc(100vh - var(--nav-height-small));
        overflow-y: auto;
        transition-duration: 0s;
        transition-delay: 0s;
      }
    }
  }

  .nav-menu-items {
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 833px) {
      display: block;
      padding: 1rem 1.9rem 1.65rem 1.9rem;
      transition: transform 0.5s ease, opacity 0.5s ease; 
      transform: translateY(${(props) => (props['data-open'] ? '0' : '-250px')});
      opacity: ${(props) => (props['data-open'] ? '1' : '0')};
      transition-delay: 0s;
    }
  }

  li {
    margin-left: 1.4rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => (props['data-color'] ? 'var(--fg-dark-link)' : 'var(--fg-light-link)')};
    }

    @media only screen and (max-width: 833px) {
      margin: 0;
      padding: 18px 0;
      opacity: ${(props) => (props['data-open'] ? '1' : '0')};
    
      &:not(:last-child) {
        border-bottom: 1px solid;
        border-color: ${(props) => (props['data-color'] === 'dark' ? `var(--bg-dark-border)` : `var(--bg-light-border)`)};
      }
    }

    a, a:hover, a:visited {
      color: inherit;
    }
  }
`;

/**
 * GlassNavMenu component.
 * Renders a list of subpages.
 *
 * @function GlassNavMenu
 * @param {React.ReactNode} props.children - Child components (NavTitle, NavMenu, etc.).
 * @param {string} props.color - Color variant for the nav (e.g., dark or light).
 * @param {boolean} props.isOpen - Whether the nav is open or not.
 * @returns {JSX.Element} The rendered GlassNavMenu component.
 */
const GlassNavMenu = ({ children, color, isOpen }) => {
  return (
    <NavMenuWrapper 
      className='nav-menu' 
      data-open={isOpen} 
      aria-expanded={isOpen}
      data-color={color}
    >
      <div className={'nav-menu-tray' + (isOpen ? ' open' : '')} aria-hidden={!isOpen}>
        <ul className='nav-menu-items'>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { isOpen, color })
          })}
        </ul>
      </div>
    </NavMenuWrapper>
  );
};

/**
 * GlassNavItem component.
 * Renders a single list item representing a subpage.
 *
 * @function GlassNavItem
 * @param {React.ReactNode} props.children - Name of subpage (e.g., 'Home')
 * @param {string} props.color - Color variant for the nav (e.g., dark or light).
 * @param {boolean} props.isOpen - Whether the nav is open or not.
 * @param {string} props.link - Link for the subpage (e.g., 'Home'). 
 * @returns {JSX.Element} The rendered GlassNavMenu component.
 */
const GlassNavItem = ({ children, color, isOpen, link }) => {
  /**
   * Fires an event to close the nav.
   */
  const triggerNavClose = () => window.dispatchEvent(new Event('glass nav close'));

  return (
    <li className='nav-menu-item' data-open={isOpen} color={color}>
      <Link to={`/${link}`} onClick={() => triggerNavClose()}>{children}</Link>
    </li>
  );
};

GlassNavMenu.Item = GlassNavItem;

export default GlassNavMenu;