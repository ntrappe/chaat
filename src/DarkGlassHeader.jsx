import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Custom Colors */
const borderGrey = '#444';
const navHeight = '2.75rem'
const asphalt = '#232128';
const concrete = '#999';
const mutedGrey = '#515154';
const snow = '#e8e8ed';
const highlightBlue = '#388eff';

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 1;
`;

const NavBackground = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(13,13,13,0.6);
  transition: background-color .5s ease;
  transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  border-bottom: 0.8px solid #444;
  // border-bottom: ${(props) => (props.$status === 'open' ? 'none' : '0.8px solid #444')};

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color .5s ease;
    transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  }

  @media (max-width: 767px) {
    min-height: ${(props) => (props.$status === 'open' ? '17em' : '100%')};
    background-color: ${(props) => (props.$status === 'open' ? 'rgb(13,13,13)' : 'rgba(13,13,13,0.6)')};
    // border-bottom: ${(props) => (props.$status === 'open' ? '0.8px solid #444' : 'none')};
  }
}
`;

const NavContent = styled.div`
  display: flex;
  padding: 0 1.3rem;
  max-width: 950px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: grid;
    padding: 0 0 0 .94rem;
    grid-template-columns: auto 1fr auto;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-areas: "pre-title title actions" "menu menu menu";
  }
`;

const NavPre = styled.div`
  display: flex;
  overflow: hidden;
  padding-left: 0;
  margin-left: -0.8rem;

  @media (max-width: 1023px) {
    padding-left: 1.3rem;
    margin-left: -1.3rem;
  }

  @media (max-width: 767) {
    overflow: visible;
  }
`;

const NavTitle = styled.div`
  display: flex;
  height: ${navHeight});
  align-items: center;
  cursor: default;
  line-height: 1.2;
  font-family: 'SF Pro';
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.152px;
  color: ${concrete};
  grid-area: ${(props) => (props.$status === 'open' ? 'title' : 'unset')}; /* TODO check */

  @media (max-width: 767px) {
    padding-top: 0;
    height: 2.8rem;
    width: 90%;
  }
`;

const LinkTitle = styled.a`
  display: inline-block;
  margin: 0;
  white-space: nowrap;
  color: ${concrete};
  font-family: 'SF Pro';
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;

  @media (max-width:767px) {
    display: flex;
  }

  &:hover {
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  font-size: .7rem;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -0.12px;
  color: ${mutedGrey};

  @media (max-width:767px) {
    overflow: hidden;
    letter-spacing: -0.28px;
    display: ${(props) => (props.$status === 'open' ? 'flex' : 'none')};
    grid-area: ${(props) => (props.$status === 'open' ? 'menu' : 'unset')};
    font-size: ${(props) => (props.$status === 'open' ? '14px' : '.7rem')};
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
    pointer-events: ${(props) => (props.$status === 'open' ? 'auto' : 'none')};
    visibility: ${(props) => (props.$status === 'open' ? 'visible' : 'hidden')};
    max-height: ${(props) => (props.$status === 'open' ? '(100vh - 42px)' : '0')};
    display: ${(props) => (props.$status === 'open' ? 'block' : 'flex')};
  }

  @media (max-width: 300px) { /* TODO check auto */
    max-height: ${(props) => (props.$status === 'open' ? '100vh' : 'auto')};
    overflow-y: ${(props) => (props.$status === 'open' ? 'auto' : 'hidden')};
  }
`;

const NavMenuOptions = styled.ul`
  display: flex;
  justify-content: flex-end;

  @media (max-width:767px) {
    display: block;
    padding: 0.88rem 1.88rem 1rem 1.88rem;
    opacity: ${(props) => (props.$status === 'open' ? '1' : '0')};
    transform: ${(props) => (props.$status === 'open' ? 'translateZ(0)' : 'translate3d(0,-150px,0)')};
    // transition-delay: ${(props) => (props.$status === 'open' ? '.2s,.4s' : '0s,0s')};
  }
`;

const NavOption = styled.li`
  margin-left: 1.4rem;
  min-width: 0;
  cursor: pointer;

  &:hover {
    color: ${highlightBlue};
    font-weight: 400;
  }

  @media screen and (max-width:767px) {
    margin-left: 0;
    width: 100%;
    transition: .5 ease;
    transition-property: transform, opacity;
    padding: 0;
    line-height: 46px;
    border-bottom: 1px solid;
    border-color: rgba(81,81,84,0.7);
    white-space: no-wrap;
    font-weight: 300;

    &:last-child {
      border-bottom: none;
    }

    opacity: ${(props) => (props.$status === 'open' ? '1' : '0')};
    transform: ${(props) => (props.$status === 'open' ? 'translateZ(0)' : 'translate3d(0,-25px,0)')};
    visibility: ${(props) => (props.$status === 'open' ? 'visible' : 'hidden')};
  }
`;

const NavActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 767px) {
    padding-right: .9rem;
    grid-area: actions;
    padding-right: .94rem;
  }
`;

const NavMenuMobile = styled.a`
  display: none;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  width: 1.17rem;
  height: 2.8rem;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const NavMenuChevron = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: 0.7rem;
  transition: transform 1s cubic-bezier(.86,0,.07,1),transform-origin 1s cubic-bezier(.86,0,.07,1);
  transform: ${(props) => (props.$direction === 'down' ? 'translateY(0)' : 'translateY(-8px)')};

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: .588rem;
    width: .705rem;
    height: .0588rem;
    background: ${mutedGrey}; /* WOOOOOO TRANSITION */
    transition: transform 1s cubic-bezier(.86,0,.07,1),transform-origin 1s cubic-bezier(.86,0,.07,1);
  }

  &::before {
    transform-origin: ${(props) => (props.$direction === 'down' ? '100% 100%' : '100% 0')};
    transform: ${(props) => (props.$direction === 'down' ? 'rotate(40deg) scaleY(1.5)' : 'rotate(-40deg) scaleY(1.5)')};
    right: 50%;
    border-radius: .5px 0 0 .5px;
  }

  &::after {
    transform-origin: ${(props) => (props.$direction === 'down' ? '0 100%' : '0 0')};
    transform: ${(props) => (props.$direction === 'down' ? 'rotate(-40deg) scaleY(1.5)' : 'rotate(40deg) scaleY(1.5)')};
    left: 50%;
    border-radius: 0 .5px .5px 0;
  }
`;

const SideNavToggleWrapper = styled.div`
  display: none;
  margin-top: 1px;

  @media (max-width: 1023px) {
    display: flex;
    margin-top: 1px;
  }
`;

const SideNavToggle = styled.button`
  position: relative;
  align-self: center;
  margin: 0 -5px;
  color: ${concrete};
  direction: ltr;
  text-align: left;

  &:hover #sidenav-icon-wrapper {
    background-color: ${mutedGrey};
    color: ${snow};
  }
`;

const SideNavIconWrapper = styled.span`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  #sidenav-icon {
    width: 20px;
    height: 20px;
  }
`;

const SideNavToggleSeparator = styled.span`
  height: 0.8em;
  width: 1px;
  background: ${mutedGrey};
  align-self: center;
  margin: 0 1.3rem;
`;

function GlassHeader() {

  const [direction, setDirection] = useState('down');
  const [status, setStatus] = useState('closed');
  
  const handleChevronClick = () => {
    const newDirection = direction === 'up' ? 'down' : 'up';
    console.log('click on ' + direction + ' --> ' + newDirection);
    setDirection(newDirection);
    setStatus(newDirection === 'down' ? 'closed' : 'open');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setDirection('down');
        setStatus('closed');
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <>
      <NavWrapper $status={status}>
        <NavBackground id="nav-background" $status={status}></NavBackground>
        <NavContent id="nav-content" $status={status}>
          <NavPre id="nav-pre">
          </NavPre>
          <NavTitle id="nav-title" $status={status}>
            <LinkTitle href="nicoletrappe.com">Nicole Trappe</LinkTitle>
          </NavTitle>
          <NavMenu id="nav-menu" $status={status}>
            <NavMenuTray id="nav-menu-tray" $status={status}>
              <NavMenuOptions id="nav-menu-options" $status={status}>
                <NavOption $status={status}>About</NavOption>
                <NavOption $status={status}>Projects</NavOption>
                <NavOption $status={status}>Career</NavOption>
                <NavOption $status={status}>Art</NavOption>
                <NavOption $status={status}>Resume</NavOption>
              </NavMenuOptions>
            </NavMenuTray>
          </NavMenu>
          <NavActions id="nav-actions">
            <NavMenuMobile>
              <NavMenuChevron id="chevron" $direction={direction} onClick={handleChevronClick}>
              </NavMenuChevron>
            </NavMenuMobile>
          </NavActions>
        </NavContent>
      </NavWrapper>
    </>
  )
}
  
export default GlassHeader;