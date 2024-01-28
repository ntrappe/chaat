import React from 'react';
import styled from 'styled-components';

const Arrow = {
  NONE: 'none',
  DOWN: 'down',
  UP: 'up',
}

const NavActionsWrapper = styled.div`
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
  display: ${(props) => (props.chevronState === Arrow.NONE ? 'none' : 'flex')};
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  width: 1.17rem;
  height: 2.8rem;
`;

const NavMenuChevron = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: 0.7rem;
  transition: transform 1s cubic-bezier(.86,0,.07,1),transform-origin 1s cubic-bezier(.86,0,.07,1);
  transform: ${(props) => (props.$chevronState === Arrow.DOWN ? 'translateY(0)' : 'translateY(-8px)')};

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: .588rem;
    width: .705rem;
    height: .0588rem;
    background: var(--wet-concrete); /* WOOOOOO TRANSITION */
    transition: transform 1s cubic-bezier(.86,0,.07,1),transform-origin 1s cubic-bezier(.86,0,.07,1);
  }

  &::before {
    transform-origin: ${(props) => (props.$chevronState === Arrow.DOWN ? '100% 100%' : '100% 0')};
    transform: ${(props) => (props.$chevronState === Arrow.DOWN ? 'rotate(40deg) scaleY(1.5)' : 'rotate(-40deg) scaleY(1.5)')};
    right: 50%;
    border-radius: .5px 0 0 .5px;
  }

  &::after {
    transform-origin: ${(props) => (props.$chevronState === Arrow.DOWN ? '0 100%' : '0 0')};
    transform: ${(props) => (props.$chevronState === Arrow.DOWN ? 'rotate(-40deg) scaleY(1.5)' : 'rotate(40deg) scaleY(1.5)')};
    left: 50%;
    border-radius: 0 .5px .5px 0;
  }
`;

function NavActions({ $chevronState, handleChevronClick }) {
  return (
    <NavActionsWrapper id="nav-actions">
      <NavMenuMobile id="nav-menu-mobile" $chevronState={$chevronState}>
        {$chevronState !== Arrow.NONE && (
          <NavMenuChevron id="chevron" 
            $chevronState={$chevronState} 
            onClick={handleChevronClick} 
          ></NavMenuChevron>
        )}
      </NavMenuMobile>
    </NavActionsWrapper>
  )
}

export default NavActions;