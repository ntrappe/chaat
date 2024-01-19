import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const navCompactHeight = '2.8rem';

const NavTitleWrapper = styled.div`
  display: flex;
  height: var(--nav-height));
  align-items: center;
  cursor: default;
  line-height: 1.2;
  font-family: 'SF Pro';
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.152px;
  color: ${(props) => (props.$colorScheme === 'dark' ? `var(--stone)` : `var(--asphalt)`)};
  grid-area: ${(props) => (props.$navOpen ? 'title' : 'unset')}; /* TODO check */

  @media (max-width: var(--mobile-width)) {
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

  @media (max-width: var(--mobile-width)) {
    display: flex;
  }

  &:hover {
    color: ${(props) => (props.$colorScheme === 'dark' ? 'white' : 'black')};
  }
`;

function NavTitle({ colorScheme, navOpen }) {
  return (
    <NavTitleWrapper $navOpen={navOpen} $colorScheme={colorScheme}>
      <LinkTitle href="nicoletrappe.com" $colorScheme={colorScheme}>Nicole Trappe</LinkTitle>
    </NavTitleWrapper>
  )
}

export default NavTitle;