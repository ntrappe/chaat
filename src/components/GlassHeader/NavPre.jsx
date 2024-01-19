import React from 'react';
import styled from 'styled-components';

const NavPreWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding-left: 0;
  margin-left: -0.8rem;

  @media (max-width: 1023px) {
    padding-left: 1.3rem;
    margin-left: -1.3rem;
  }

  @media (max-width: 767px) {
    overflow: visible;
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
  color: ${(props) => (props.$colorScheme === 'dark' ? `var(--concrete)` : `var(--wet-concrete)`)};
  direction: ltr;
  text-align: left;

  &:hover #sidenav-icon-wrapper {
    background-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--wet-concrete)` : `var(--snow)`)};
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--snow)` : `var(--midnight)`)};
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
  background: ${(props) => (props.$colorScheme === 'dark' ? `var(--stone)` : `var(--asphalt)`)};
  align-self: center;
  margin: 0 1.3rem;
`;

function NavPre({ $colorScheme, handleSideBarClick, $showSideBar }) {
  return (
    <NavPreWrapper id="nav-pre">
      {$showSideBar && (
        <SideNavToggleWrapper>
          <SideNavToggle id="sidenav-toggle" 
            onClick={handleSideBarClick} 
            $colorScheme={$colorScheme}>
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
          <SideNavToggleSeparator id="separator" 
            $colorScheme={$colorScheme}
          ></SideNavToggleSeparator>
        </SideNavToggleWrapper>
      )}
    </NavPreWrapper>
  )
}

export default NavPre;