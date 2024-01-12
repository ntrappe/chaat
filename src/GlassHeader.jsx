import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Dark Scheme Colors */
const darkBorder = '#444';
const darkTitle = '#999';
const darkTitleHover = 'white';
const darkActions = '#515154';
const darkHighBlue = '#388eff';
const darkActionBorder = 'rgba(81,81,84,0.7)';
const darkHoverBack = '#515154';
const darkSideHover = '#e8e8ed';
const darkNavBack = 'rgba(13,13,13,0.6)';

/* Light Scheme Colors */
const lightBorder = '#d2d2d2';
const lightTitle = '#515154';
const lightTitleHover = 'black';
const lightActions = lightTitle;
const lightHighBlue = '#0066cc';
const lightActionBorder = 'rgba(185,186,187,0.3)';
const lightChevron = lightTitle;
const lightHoverBack = '#f1f2f5';
const lightSideHover = '#1d1d1f';
const lightNavBack = 'rgba(255,255,255,0.6)';

/* General Style Variables */
const navHeight = '2.75rem'
const navCompactHeight = '2.8rem';
const asphalt = '#1D1D1F';
const concrete = '#515154';
const mutedGrey = '#515154';
const highlightBlue = 'rgb(0,102,204)';
const lightGrey = '#f1f2f5';

const NavHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight};
  border-bottom: ${(props) => (props.$colorScheme === 'dark' ? darkBorder : lightBorder)};

  @media and (max-width: 767px) {
    min-width: 320px;
    height: ${navCompactHeight};
  }
`;

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
  background-color: ${(props) => (props.$colorScheme === 'dark' ? darkNavBack : lightNavBack)};
  transition: background-color .5s ease;
  transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  border-bottom: 0.8px solid;
  border-color: ${(props) => (props.$colorScheme === 'dark' ? darkBorder : lightBorder)};

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color .5s ease;
    transition-property: background-color,backdrop-filter,-webkit-backdrop-filter;
  }

  @media (max-width: 767px) {
    min-height: ${(props) => (props.$status === 'open' ? '17em' : '100%')};
    background-color: ${(props) => (props.$status === 'open' ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.6)')};
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
  color: ${(props) => (props.$colorScheme === 'dark' ? darkTitle : lightTitle)};
  grid-area: ${(props) => (props.$status === 'open' ? 'title' : 'unset')}; /* TODO check */

  @media (max-width: 767px) {
    padding-top: 0;
    height: ${navCompactHeight};
    width: 90%;
  }
`;

const LinkTitle = styled.a`
  display: inline-block;
  margin: 0;
  white-space: nowrap;
  color: inherit;
  font-family: 'SF Pro';
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;

  @media (max-width:767px) {
    display: flex;
  }

  &:hover {
    color: ${(props) => (props.$colorScheme === 'dark' ? darkTitleHover : lightTitleHover)};
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
  color: ${(props) => (props.$colorScheme === 'dark' ? darkActions : lightActions)};

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
  color: inherit;

  &:hover {
    color: ${(props) => (props.$colorScheme === 'dark' ? darkHighBlue : lightHighBlue)};
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
    border-color: ${(props) => (props.$colorScheme === 'dark' ? darkActionBorder : lightActionBorder)};
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
    background: ${lightChevron}; /* WOOOOOO TRANSITION */
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
  color: ${(props) => (props.$colorScheme === 'dark' ? darkActions : lightActions)};
  direction: ltr;
  text-align: left;

  &:hover #sidenav-icon-wrapper {
    background-color: ${(props) => (props.$colorScheme === 'dark' ? darkHoverBack : lightHoverBack)};
    color: ${(props) => (props.$colorScheme === 'dark' ? darkSideHover : lightSideHover)};
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
  background: ${(props) => (props.$colorScheme === 'dark' ? darkTitle : lightTitle)};
  align-self: center;
  margin: 0 1.3rem;
`;

function GlassHeader({ colorScheme }) {

  const [sideBarOpen, setSideBarOpen] = useState('closed');
  const [direction, setDirection] = useState('down');
  const [status, setStatus] = useState('closed');


  const handleSideBarClick = () => {
    setSideBarOpen((prevState) => (prevState === 'closed' ? 'open' : 'closed'));
  }

  const handleChevronClick = () => {
    const newDirection = direction === 'up' ? 'down' : 'up';
    console.log('click on ' + direction + ' --> ' + newDirection);
    setDirection(newDirection);
    setStatus(newDirection === 'down' ? 'closed' : 'open');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
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
      <NavHeader $colorScheme={colorScheme}>
        <NavWrapper $status={status}>
          <NavBackground id="nav-background" $status={status} $colorScheme={colorScheme}></NavBackground>
          <NavContent id="nav-content" $status={status}>
            <NavPre id="nav-pre">
              <SideNavToggleWrapper>
                <SideNavToggle id="sidenav-toggle" $status={sideBarOpen === 'closed' ? 'closed' : 'open'} onClick={handleSideBarClick} $colorScheme={colorScheme}>
                  <SideNavIconWrapper id="sidenav-icon-wrapper">
                    <svg 
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlnsXlink="http://www.w3.org/1999/xlink" 
                      id="sidenav-icon" 
                      viewBox="0 0 14 14" 
                      height="14" 
                      data-v-9b3da902=""
                      ><path data-v-b5c5049e="" d="M11.632 11.991c0.577 0 1.010-0.143 1.299-0.43 0.287-0.286 0.432-0.713 0.432-1.278v-6.562c0-0.565-0.145-0.991-0.433-1.28s-0.721-0.433-1.298-0.433h-9.264c-0.569 0-1 0.144-1.292 0.43s-0.439 0.714-0.439 1.283v6.562c0 0.569 0.147 0.996 0.439 1.28s0.723 0.427 1.292 0.427h9.264zM4.837 11.030h-2.43c-0.258 0-0.455-0.068-0.591-0.205s-0.206-0.34-0.206-0.609v-6.425c0-0.269 0.068-0.472 0.205-0.609s0.335-0.205 0.592-0.205h2.43v8.053zM11.593 11.030h-5.828v-8.053h5.827c0.258 0 0.458 0.068 0.598 0.205s0.211 0.34 0.211 0.609v6.425c0 0.27-0.070 0.473-0.211 0.609s-0.339 0.205-0.597 0.205zM3.791 4.963c0.091 0 0.168-0.033 0.233-0.1 0.060-0.057 0.097-0.138 0.097-0.228s-0.037-0.17-0.097-0.228l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.057-0.097 0.138-0.097 0.228s0.037 0.17 0.097 0.228l0 0c0.064 0.067 0.14 0.1 0.227 0.1h1.132zM3.791 6.379c0.091 0 0.168-0.032 0.233-0.097 0.060-0.057 0.098-0.137 0.098-0.226s-0.037-0.17-0.098-0.226l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.057-0.097 0.137-0.097 0.226s0.037 0.169 0.097 0.226l0 0c0.057 0.060 0.137 0.097 0.226 0.097 0 0 0.001 0 0.001 0h1.132zM3.791 7.796c0.091 0 0.168-0.032 0.233-0.097 0.059-0.056 0.096-0.135 0.097-0.222v-0c0-0.002 0-0.004 0-0.007 0-0.088-0.037-0.168-0.096-0.224l-0-0c-0.058-0.058-0.139-0.094-0.228-0.094-0.002 0-0.004 0-0.005 0h-1.132c-0.001-0-0.002-0-0.003-0-0.088 0-0.168 0.036-0.225 0.094l-0 0c-0.060 0.056-0.097 0.136-0.097 0.224 0 0.002 0 0.005 0 0.007l-0-0c0 0.083 0.032 0.158 0.097 0.222 0.057 0.060 0.137 0.097 0.225 0.097 0.001 0 0.001 0 0.002-0h1.132z"></path></svg>
                  </SideNavIconWrapper>
                </SideNavToggle>
                <SideNavToggleSeparator className="separator" $colorScheme={colorScheme}></SideNavToggleSeparator>
              </SideNavToggleWrapper>
            </NavPre>
            <NavTitle id="nav-title" $status={status} $colorScheme={colorScheme}>
              <LinkTitle href="nicoletrappe.com" $colorScheme={colorScheme}>Nicole Trappe</LinkTitle>
            </NavTitle>
            <NavMenu id="nav-menu" $status={status} $colorScheme={colorScheme}>
              <NavMenuTray id="nav-menu-tray" $status={status}>
                <NavMenuOptions id="nav-menu-options" $status={status}>
                  <NavOption $status={status} $colorScheme={colorScheme}>About</NavOption>
                  <NavOption $status={status} $colorScheme={colorScheme}>Projects</NavOption>
                  <NavOption $status={status} $colorScheme={colorScheme}>Career</NavOption>
                  <NavOption $status={status} $colorScheme={colorScheme}>Art</NavOption>
                  <NavOption $status={status} $colorScheme={colorScheme}>Resume</NavOption>
                </NavMenuOptions>
              </NavMenuTray>
            </NavMenu>
            <NavActions id="nav-actions">
              <NavMenuMobile>
                <NavMenuChevron id="chevron" $direction={direction} onClick={handleChevronClick} $colorScheme={colorScheme}>
                </NavMenuChevron>
              </NavMenuMobile>
            </NavActions>
          </NavContent>
        </NavWrapper>
      </NavHeader>
    </>
  )
}
  
export default GlassHeader;