import React from 'react';
import styled from 'styled-components';
import Stack from '../components/Stack.jsx';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-botton: 0;
  width 100%;
  align-items: center;
  padding: 1.6rem 1.8rem;
  background-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--midnight)` : `var(--paper)`)};
  border-top: 0.6px solid;
  border-color: ${(props) => (props.$colorScheme === 'dark'? `var(--asphalt)` : `var(--cloud)`)};
`;

const FooterGrid = styled.div`
  display: flex; /* Used to be grid but flex stretch helps make cols touch edges */
  flex-wrap: wrap; /* Items move to next line auto */
  max-width: var(--nav-max-width-content);
  gap: var(--stack-gap);
  width: 100%;
  align-self: center;
  justify-content: space-between; /* Space between Stacks */
  align-items: stretch; /* Fill space end to end */
`;

const FooterAside = styled.div`
  padding-top: var(--stack-gap);
  border-top: 1px solid;
  border-color: ${(props) => (props.$colorScheme === 'dark' ? `var(--pavement)` : `var(--cloud)`)};
  width: 100%;

  p {
    font-family: 'SF Pro';
    font-size: 0.65em;
    font-weight: 400;
    line-height: 1.5;
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

/**
 * Footer for this website using the Stack element to create lists of helpful links.
 * @param {String} colorScheme Optional prop for colorscheme of component.
 * @returns footer component
 */
function Footer({ colorScheme = 'light' }) {
  return (
    <FooterWrapper $colorScheme={colorScheme}>
      <FooterGrid $colorScheme={colorScheme}>
        <Stack color={colorScheme}>
          <Stack.Heading>Sitemap</Stack.Heading>
          <Stack.InternalPage page={'projects'}>Design Case Studies</Stack.InternalPage>
          <Stack.InternalPage page={'career'}>Work Experience</Stack.InternalPage>
          <Stack.InternalPage page={'visual'}>Visual Portfolio</Stack.InternalPage>
        </Stack>
        <Stack color={colorScheme}>
          <Stack.Heading>Contact & Help</Stack.Heading>
          <Stack.ExternalLink page={'mailto:ntrappe@icloud.com'}>Email</Stack.ExternalLink>
          <Stack.ExternalLink page={'http://linkedin.com/in/ntrappe'}>LinkedIn</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/issues'}>Report an Issue</Stack.ExternalLink>
        </Stack>
        <Stack color={colorScheme}>
          <Stack.Heading>Policies</Stack.Heading>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/blob/main/PRIVACY.md'}>Privacy</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/blob/main/COPYRIGHT.md'}>Copyright</Stack.ExternalLink>
        </Stack>
        <Stack color={colorScheme}>
          <Stack.Heading>Inspiration</Stack.Heading>
          <Stack.ExternalLink page={'https://developer.apple.com/design/'}>Apple</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://primer.style'}>Primer</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://brand.slackhq.com/illustration'}>Slack</Stack.ExternalLink>
        </Stack>
        <FooterAside $colorScheme={colorScheme}>
        <p>Coded in React. Tested in Cypress. View the source code at <a href='https://github.com/ntrappe/chaat'>github.com/ntrappe/chaat</a>.</p>
      </FooterAside>
      </FooterGrid>
      
    </FooterWrapper>
  )
}

export default Footer;