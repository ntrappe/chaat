import React from 'react';
import styled from 'styled-components';

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
    background: var(--wet-concrete); /* WOOOOOO TRANSITION */
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

function NavActions({ $direction, handleChevronClick, $showChevron }) {
  return (
    <NavActionsWrapper id="nav-actions">
      <NavMenuMobile>
        {$showChevron && (
          <NavMenuChevron id="chevron" 
            $direction={$direction} 
            onClick={handleChevronClick} 
          ></NavMenuChevron>
        )}
      </NavMenuMobile>
    </NavActionsWrapper>
  )
}

export default NavActions;