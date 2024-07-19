import React from 'react';
import styled from 'styled-components';
import Stack from '../components/Stack.jsx';

const StyledFooterWrapper = styled.div`
  position: relative;
  margin-botton: 0;
  padding: 0 25px;
  background-color: ${(props) => (props.color === 'light' ? `var(--bg-light-footer)` : `var(--bg-dark-footer)`)};
`;

const StyledGrid = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  padding-top: 30px;
  box-sizing: content-box;
  max-width: 980px;
  margin: 0 auto;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  border-color: ${(props) => (props.color === 'light' ? `var(--bg-light-border)` : `var(--bg-dark-border)`)};

  @media (max-width: 833px) {
    flex-direction: column;
    border-bottom: none;
    padding-bottom: 0;

    .stack {
      border-top: 1px solid;
      border-top-color: ${(props) => (props.color === 'light' ? `var(--bg-light-border)` : `var(--bg-dark-border)`)};
    }

    .stack:last-child {
      border-bottom: 1px solid;
      border-bottom-color: ${(props) => (props.color === 'light' ? `var(--bg-light-border)` : `var(--bg-dark-border)`)};
    }
  }

  .stack {
    flex-basis: 24%;
    
    @media (max-width: 833px) {
      flex-basis: auto;
    }
  }
`;

const StyledFooterAside = styled.aside`
  max-width: 980px;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 13px;
  line-height: 2;
  color: ${(props) => (props.color === 'light' ? `var(--fg-light-text-normal)` : `var(--fg-dark-text-normal)`)};

  a {
    color: ${(props) => (props.color === 'light' ? `var(--fg-light-link)` : `var(--fg-dark-link)`)};
  }

  p + p {
      color: ${(props) => (props.color === 'light' ? `var(--fg-light-text-minor)` : `var(--fg-dark-text-minor)`)};

  }

  .footer-aside-separator {
    color: ${(props) => (props.color === 'light' ? `var(--bg-light-border)` : `var(--bg-dark-border)`)};
    font-weight: 500;
    padding-left: 7px;
    padding-right: 7px;
  }
`;

/**
 * Creates an unordered list with text and/or links.
 * @param {String} color Passes along the colorscheme to match
 * @param {*} children Text and/or links passed from parent 
 * @returns unordered list element
 */
function Footer({ color='dark', children }) {
  return (
    <StyledFooterWrapper color={color}>
      <StyledGrid>
        <Stack color={color} className='stack'>
          <Stack.Heading>Design Case Studies</Stack.Heading>
          <Stack.Directory>
            <Stack.Item role='internal' page={'projects/museum'}>Museum Poster</Stack.Item>
            <Stack.Item role='internal' page={'projects/rock'}>National Park App</Stack.Item>
            <Stack.Item role='internal' page={'projects/pomodoro'}>Pomodoro Timer</Stack.Item>
          </Stack.Directory>
        </Stack>
        <Stack color={color} className='stack'>
          <Stack.Heading>Visual Portflio</Stack.Heading>
          <Stack.Directory>
            <Stack.Item role='internal' page={''}>Graphic Design</Stack.Item>
            <Stack.Item role='internal' page={''}>Photography</Stack.Item>
            <Stack.Item role='internal' page={''}>Presentations</Stack.Item>
          </Stack.Directory>
        </Stack>
        <Stack color={color} className='stack'>
          <Stack.Heading>Contact & Help</Stack.Heading>
          <Stack.Directory>
            <Stack.Item role='external' page={'https://linkedin.com/in/ntrappe'}>
              Connect with LinkedIn
            </Stack.Item>
            <Stack.Item role='external' page={'https://github.com/ntrappe/chaat/issues'}>
              Report an Issue
            </Stack.Item>
            <Stack.Item role='external' page={'mailto:ntrappe@icloud.com'}>
              Send an Email
            </Stack.Item>
          </Stack.Directory>
        </Stack>
        <Stack color={color} className='stack'>
          <Stack.Heading>Inspiration</Stack.Heading>
          <Stack.Directory>
            <Stack.Item role='external' page={'https://developer.apple.com/design/'}>
              Apple - Human Interface Guidelines
            </Stack.Item>
            <Stack.Item role='external' page={'https://primer.style'}>
              GitHub - Primer
            </Stack.Item>
            <Stack.Item role='external' page={'https://brand.slackhq.com/illustration'}>
              Slack - Illustration Library
            </Stack.Item>
          </Stack.Directory>
        </Stack>
     {/* 
        <Stack color={color} className='stack'>
          <Stack.Heading>Policies</Stack.Heading>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/blob/main/COPYRIGHT.md'}>Copyright</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://github.com/ntrappe/chaat/blob/main/PRIVACY.md'}>Privacy</Stack.ExternalLink>
        </Stack>
        <Stack color={color} className='stack'>
          <Stack.Heading>Inspiration</Stack.Heading>
          <Stack.ExternalLink page={'https://developer.apple.com/design/'}>Apple</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://primer.style'}>Primer</Stack.ExternalLink>
          <Stack.ExternalLink page={'https://brand.slackhq.com/illustration'}>Slack</Stack.ExternalLink>
        </Stack> */}
      </StyledGrid>
      <StyledFooterAside color={color}>
        <p>Coded in React. Tested in Cypress. View the source code at <a href='https://github.com/ntrappe/chaat'>github.com/ntrappe/chaat</a>.</p>
        <p>Privacy Policy<span className='footer-aside-separator'>|</span>Copyright Policy</p>
      </StyledFooterAside>
    </StyledFooterWrapper>
  ) 
}


export default Footer;