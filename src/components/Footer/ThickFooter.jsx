import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stack from '../Core/Stack';

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
  grid-template-columns: repeat(auto-fit, minmax(var(--min-stack-width), 1fr));
  grid-auto-flow: row;
  gap: var(--stack-gap);
`;

const FooterAside = styled.div`
  margin-top: 1em;
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
        <Stack color={$colorScheme}>
          <Stack.Heading>Sitemap</Stack.Heading>
          <Stack.InternalPage page={'projects'}>Design Case Studies</Stack.InternalPage>
          <Stack.InternalPage page={'career'}>Work Experience</Stack.InternalPage>
          <Stack.InternalPage page={'visual'}>Visual Portfolio</Stack.InternalPage>
        </Stack>
        <Stack color={$colorScheme}>
          <Stack.Heading>Contact & Help</Stack.Heading>
          <Stack.ExternalLink page={'mailto:ntrappe@icloud.com'}>Email</Stack.ExternalLink>
          <Stack.ExternalLink page={'http://linkedin.com/in/ntrappe'}>LinkedIn</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/issues'}>Report an Issue</Stack.ExternalLink>
        </Stack>
        <Stack color={$colorScheme}>
          <Stack.Heading>Tech Used</Stack.Heading>
          <Stack.ExternalLink page={'https://react.dev'}>React</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://vitejs.dev'}>Vite</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://www.cypress.io'}>Cypress</Stack.ExternalLink>
        </Stack>
        <Stack color={$colorScheme}>
          <Stack.Heading>Inspiration</Stack.Heading>
          <Stack.ExternalLink page={'https://developer.apple.com/design/'}>Apple</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://primer.style'}>Primer</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://brand.slackhq.com/illustration'}>Slack</Stack.ExternalLink>
        </Stack>
        <Stack color={$colorScheme}>
          <Stack.Heading>Policies</Stack.Heading>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/blob/main/PRIVACY.md'}>Privacy</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/blob/main/COPYRIGHT.md'}>Copyright</Stack.ExternalLink>
        </Stack>
      </FooterGrid>
      <FooterAside $colorScheme={$colorScheme}>
        <p>To view the source code of this website, visit <a href='https://github.com/ntrappe/chaat'>github.com/ntrappe/chaat</a>.</p>
      </FooterAside>
    </FooterWrapper>
  )
}

export default ThickFooter;