import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  color: ${(props) => (props.$colorScheme === 'dark' ? `var(--stone)` : `var(--wet-concrete)`)};
  flex: 1;
  grid-area: 'title';

  @media (max-width: 767px) {
    padding-top: 0;
    height: ${navCompactHeight};
    width: 90%;
  }
`;

const LinkTitle = styled.p`
  display: inline-block;
  margin: 0;
  white-space: nowrap;
  color: inherit;
  font-family: 'SF Pro';
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;

  @media (max-width: 767px) {
    display: flex;
  }

  &:hover {
    color: ${(props) => (props.$colorScheme === 'dark' ? 'white' : 'black')};
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

function NavTitle({ $colorScheme }) {
  /**
   * If click title of the website, close any nav if open.
   */
  const closeNav = () => {
    window.dispatchEvent(new Event('close nav'));
  }

  return (
    <NavTitleWrapper id="nav-title" $colorScheme={$colorScheme}>
      <LinkTitle $colorScheme={$colorScheme}>
        <Link to={`/`} onClick={() => closeNav()}>Nicole Trappe</Link>
      </LinkTitle>
    </NavTitleWrapper>
  )
}

export default NavTitle;