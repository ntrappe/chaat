/**
 * @fileoverview GlassNavTitle component file. Renders a title. Based on 
 * developer.apple.com/design/human-interface-guidelines/designing-for-games.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavTitleWrapper = styled.h2`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0 auto;
  padding: 0;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-major)` : `var(--fg-light-text-major)`)};
  opacity: 0.8;
  line-height: 1.2;
  font-family: 'SF Pro';
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -.01em;

  @media only screen and (max-width: 833px) {
    grid-area: title;
    padding-top: 0;
    height: var(--nav-height-small);
    width: 90%;
    margin: 0;
  }

  a {
    color: inherit;
    transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);

    &:hover {
      opacity: 1;
    }
  }
`;

/**
 * GlassNavTitle component.
 * Renders a title.
 *
 * @function GlassNavTitle
 * @param {React.ReactNode} props.children - Name of site (e.g., 'Hello World')
 * @param {string} props.color - Color variant for the nav (e.g., dark or light).
 * @param {string} props.link - Link for the site (e.g., '/'). 
 * @returns {JSX.Element} The rendered GlassNavMenu component.
 */
function GlassNavTitle({ children, color, link='/' }) {
  /**
   * Fires an event to close the nav.
   */
  const triggerNavClose = () => window.dispatchEvent(new Event('glass nav close'));

  return (
    <NavTitleWrapper className='nav-title' color={color}>
      <Link to={`${link}`} onClick={() => triggerNavClose()}>{children}</Link>
    </NavTitleWrapper>
  )
}

export default GlassNavTitle;