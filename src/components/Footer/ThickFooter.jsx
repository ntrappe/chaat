import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  position: relative;
  margin-botton: 0;
  width 100%;
  padding: 1.6rem 1.8rem;
  background-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--midnight)` : `var(--paper)`)};
  border-top: 0.6px solid red;
  border-color: ${(props) => (props.$colorScheme === 'dark'? `var(--wet-concrete)` : `var(--cloud)`)};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 stacks across */
  grid-auto-flow: row;
  gap: 2.5rem;
  padding-bottom: 1.2em;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* 2 stacks across */
    gap: 1rem;
  }
`;

const Stack = styled.ul`
  min-width: 0;
  line-spacing: 1.5;

  &:first-child {
    border-right: 1px solid;
  }

  li {
    font-family: 'SF Pro';
    font-size: 0.7em;
    font-weight: 400;
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--shark)` : `var(--concrete)`)};
    margin-bottom: 0.8em;

    @media (max-width: 767px) {
      font-size: 0.65em;
      margin-bottom: 0.65em;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }

  li b {
    font-weight: 600;
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--cloud)` : `var(--asphalt)`)};
  }

  a {
    color: inherit;
    font-weight: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const FooterAside = styled.div`
  padding-top: 1.2em;
  border-top: 1px solid red;
  border-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--pavement)` : `var(--cloud)`)};

  p {
    font-family: 'SF Pro';
    font-size: 0.65em;
    font-weight: 400;
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--shark)` : `var(--concrete)`)};

    @media (max-width: 767px) {
      font-size: 0.65em;
    }
  }

  a {
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--coral)` : `var(--scarlet)`)};
  }

  a:hover {
    text-decoration: underline;
  }
`;

function ThickFooter({ $colorScheme }) {
  return (
    <FooterWrapper $colorScheme={$colorScheme}>
      <FooterGrid $colorScheme={$colorScheme}>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Sitemap</b></li>
          <li><Link to={`/projects`}>Design Case Studies</Link></li>
          <li><Link to={`/`}>Design Philosophy</Link></li>
          <li><Link to={`/art`}>Art Portfolio</Link></li>
          <li><Link to={`/photography`}>Photo Portfolio</Link></li>
          <li><Link to={`/career`}>Career Experience</Link></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Tech Used</b></li>
          <li><a href='https://html.spec.whatwg.org'>HTML</a></li>
          <li><a href='https://www.w3schools.com/css/'>CSS</a></li>
          <li><a href='https://react.dev'>React</a></li>
          <li><a href='https://vitejs.dev'>Vite</a></li>
          <li><a href='https://www.apple.com/keynote/'>Keynote</a></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Contact</b></li>
          <li><a href='mailto:ntrappe@icloud.com'>Email</a></li>
          <li><a href='http://linkedin.com/in/ntrappe/'>LinkedIn</a></li>
          <br/>
          <li><b>Help</b></li>
          <li><a href='https://github.com/ntrappe/chaat/issues'>Report Issues</a></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Inspiration</b></li>
          <li><a href='https://developer.apple.com/design/'>apple.com</a></li>
          <li><a href='http://github.com/'>github.com</a></li>
          <br/>
          <li><b>Privacy Policy</b></li>
          <li>Google Analytics</li>
        </Stack>
      </FooterGrid>
      <FooterAside $colorScheme={$colorScheme}>
        <p>To view the source code of this website, visit <a href='https://github.com/ntrappe/chaat'>github.com/ntrappe/chaat</a>.</p>
      </FooterAside>
    </FooterWrapper>
  )
}

export default ThickFooter;