import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const NavMenuWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  font-size: .7rem;
  line-height: 1.1;
  font-weight: 300;
  letter-spacing: -0.12px;
  color: ${(props) => (props.$colorScheme === 'dark' ? `var(--shark)` : `var(--wet-concrete)`)};

  @media (max-width: 767px) {
    overflow: hidden;
    letter-spacing: -0.28px;
    display: ${(props) => (props.$navState === States.EXPANDED ? 'flex' : 'none')};
    grid-area: ${(props) => (props.$navState === States.EXPANDED ? 'menu' : 'unset')};
    font-size: ${(props) => (props.$navState === States.EXPANDED ? '14px' : '.7rem')};
  }
`;

const NavMenuTray = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: flex-end;
  align-items: center;
  visibility: visible;

  @media (max-width: 767px) {
    /* hide list of options to have chevron */
    pointer-events: ${(props) => (props.$navState === States.EXPANDED ? 'auto' : 'none')};
    visibility: ${(props) => (props.$navState === States.EXPANDED ? 'visible' : 'hidden')};
    max-height: ${(props) => (props.$navState === States.EXPANDED ? '(100vh - 42px)' : '0')};
    display: ${(props) => (props.$navState === States.EXPANDED ? 'block' : 'flex')};
  }

  @media (max-width: 300px) { /* TODO check auto */
    max-height: ${(props) => (props.$navState === States.EXPANDED ? '100vh' : 'auto')};
    overflow-y: ${(props) => (props.$navState === States.EXPANDED ? 'auto' : 'hidden')};
  }
`;

const NavMenuOptions = styled.ul`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: block;
    padding: 0.88rem 1.88rem 1rem 1.88rem;
    opacity: ${(props) => (props.$navState === States.EXPANDED ? '1' : '0')};
    transform: ${(props) => (props.$navState === States.EXPANDED ? 'translateZ(0)' : 'translate3d(0,-150px,0)')};
    // transition-delay: ${(props) => (props.$navState === States.EXPANDED ? '.2s,.4s' : '0s,0s')};
  }
`;

const NavOption = styled.li`
  margin-left: 1.3rem;
  min-width: 0;
  cursor: pointer;
  color: ${(props) => (props.$colorScheme === 'dark' ? `var(--shark)` : `var(--wet-concrete)`)};

  &:hover {
    text-decoration: underline;
  }

  a, a:visited {
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--shark)` : `var(--wet-concrete)`)};
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    transition: .5 ease;
    transition-property: transform, opacity;
    padding: 0;
    line-height: 46px;
    border-bottom: 1px solid;
    white-space: no-wrap;
    font-weight: 300;
    border-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--dark-nav-border)` : `var(--light-nav-border)`)};
    opacity: ${(props) => (props.$navState === States.EXPANDED ? '1' : '0')};
    transform: ${(props) => (props.$navState === States.EXPANDED ? 'translateZ(0)' : 'translate3d(0,-25px,0)')};
    visibility: ${(props) => (props.$navState === States.EXPANDED ? 'visible' : 'hidden')};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      text-decoration: none;
      color: ${(props) => (props.$colorScheme === 'dark' ? `var(--coral)` : `var(--scarlet)`)};
      a, a:visited {
        color: ${(props) => (props.$colorScheme === 'dark' ? `var(--coral)` : `var(--scarlet)`)};
      }
    }
  }
`;

function NavMenu({ $colorScheme, $navState }) {
  return (
    <NavMenuWrapper id="nav-menu" $navState={$navState} $colorScheme={$colorScheme}>
      <NavMenuTray id="nav-menu-tray" $navState={$navState}>
        <NavMenuOptions id="nav-menu-options" $navState={$navState}>
          <NavOption $navState={$navState} $colorScheme={$colorScheme}>
            <Link to={`/`}>Home</Link>
          </NavOption>
          <NavOption $navState={$navState} $colorScheme={$colorScheme}>
            <Link to={`/projects`}>Projects</Link>
          </NavOption>
          <NavOption $navState={$navState} $colorScheme={$colorScheme}>
            <Link to={`/career`}>Career</Link>
          </NavOption>
          <NavOption $navState={$navState} $colorScheme={$colorScheme}>
            <Link to={`/art`}>Art</Link>
          </NavOption>
          <NavOption $navState={$navState} $colorScheme={$colorScheme}>
            <Link to={`/photography`}>Photography</Link>
          </NavOption>
        </NavMenuOptions>
      </NavMenuTray>
    </NavMenuWrapper>
  )
}

export default NavMenu;