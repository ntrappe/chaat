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
  border-color: ${(props) => (props.$colorScheme === 'dark'? `var(--asphalt)` : `var(--cloud)`)};
`;

const FooterGrid = styled.div`
  display: grid;
  /* Sitemap no longer takes up 2 stacks, so specify 5 stacks total */
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  gap: 1.25rem;
  padding-bottom: 1.2em;

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
`;

const Stack = styled.ul`
  min-width: 0;
  line-spacing: 1.5;

  li {
    font-family: 'SF Pro';
    font-size: 0.7em;
    font-weight: 400;
    color: ${(props) => (props.$colorScheme === 'dark' ? `var(--shark)` : `var(--concrete)`)};
    margin-bottom: 0.8em;
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
          <li><Link to={`/career`}>Work Experience</Link></li>
          <li><Link to={`/visual`}>Visual Portfolio</Link></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Contact & Help</b></li>
          <li><a href='mailto:ntrappe@icloud.com'>Email</a></li>
          <li><a href='http://linkedin.com/in/ntrappe/'>LinkedIn</a></li>
          <li><a href='https://github.com/ntrappe/chaat/issues'>Report an Issue</a></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Tech Used</b></li>
          <li><a href='https://react.dev'>React</a></li>
          <li><a href='https://vitejs.dev'>Vite</a></li>
          <li><a href='https://www.cypress.io'>Cypress</a></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Inspiration</b></li>
          <li><a href='https://developer.apple.com/design/'>Apple</a></li>
          <li><a href='https://primer.style'>Primer</a></li>
          <li><a href='https://brand.slackhq.com/illustration'>Slack</a></li>
        </Stack>
        <Stack $colorScheme={$colorScheme}>
          <li><b>Policies</b></li>
          <li><a href='https://github.com/ntrappe/chaat/blob/main/PRIVACY.md'>Privacy</a></li>
          <li><a href='https://github.com/ntrappe/chaat/blob/main/COPYRIGHT.md'>Copyright</a></li>
        </Stack>
      </FooterGrid>
      <FooterAside $colorScheme={$colorScheme}>
        <p>To view the source code of this website, visit <a href='https://github.com/ntrappe/chaat'>github.com/ntrappe/chaat</a>.</p>
      </FooterAside>
    </FooterWrapper>
  )
}

export default ThickFooter;