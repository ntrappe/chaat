import React from 'react';
import styled from 'styled-components';
import Directory from '../components/Directory.jsx';

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

    .directory {
      border-top: 1px solid;
      border-top-color: ${(props) => (props.color === 'light' ? `var(--bg-light-border)` : `var(--bg-dark-border)`)};
    }

    .directory:last-child {
      border-bottom: 1px solid;
      border-bottom-color: ${(props) => (props.color === 'light' ? `var(--bg-light-border)` : `var(--bg-dark-border)`)};
    }
  }

  .directory {
    flex-basis: 24%;
    
    @media (max-width: 833px) {
      flex-basis: auto;
    }
  }
`;

const StyledFooterAside = styled.aside`
  max-width: var(--nav-max-width);
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: var(--fg-text-size-minor);
  line-height: 2;
  color: ${(props) => (props.color === 'light' ? `var(--fg-light-text-normal)` : `var(--fg-dark-text-normal)`)};

  a {
    color: ${(props) => (props.color === 'light' ? `var(--fg-light-link)` : `var(--fg-dark-link)`)};
  }

  .footer-policies a {
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
        <Directory color={color}>
          <Directory.Heading>Design Case Studies</Directory.Heading>
          <Directory.Body>
            <Directory.Item role='internal' page={'projects/museum'}>Museum Poster</Directory.Item>
            <Directory.Item role='internal' page={'projects/rock'}>National Park App</Directory.Item>
            <Directory.Item role='internal' page={'projects/pomodoro'}>Pomodoro Timer</Directory.Item>
          </Directory.Body>
        </Directory>
        <Directory color={color}>
          <Directory.Heading>Visual Portflio</Directory.Heading>
          <Directory.Body>
            <Directory.Item role='internal' page={''}>Graphic Design</Directory.Item>
            <Directory.Item role='internal' page={''}>Photography</Directory.Item>
            <Directory.Item role='internal' page={''}>Presentations</Directory.Item>
          </Directory.Body>
        </Directory>
        <Directory color={color}>
          <Directory.Heading>Contact & Help</Directory.Heading>
          <Directory.Body>
            <Directory.Item role='external' page={'https://linkedin.com/in/ntrappe'}>
              Connect with LinkedIn
            </Directory.Item>
            <Directory.Item role='external' page={'https://github.com/ntrappe/chaat/issues'}>
              Report an Issue
            </Directory.Item>
            <Directory.Item role='external' page={'mailto:ntrappe@icloud.com'}>
              Send an Email
            </Directory.Item>
          </Directory.Body>
        </Directory>
        <Directory color={color}>
          <Directory.Heading>Inspiration</Directory.Heading>
          <Directory.Body>
            <Directory.Item role='external' page={'https://developer.apple.com/design/'}>
              Apple - Human Interface Guidelines
            </Directory.Item>
            <Directory.Item role='external' page={'https://primer.style'}>
              GitHub - Primer
            </Directory.Item>
            <Directory.Item role='external' page={'https://brand.slackhq.com/illustration'}>
              Slack - Illustration Library
            </Directory.Item>
          </Directory.Body>
        </Directory>
      </StyledGrid>
      <StyledFooterAside color={color}>
        <p>Coded in React. Tested in Cypress. View the source code at <a href='https://github.com/ntrappe/chaat'>github.com/ntrappe/chaat</a>.</p>
        <p className='footer-policies'>
          <a href='https://github.com/ntrappe/chaat/blob/main/PRIVACY.md'>Privacy Policy</a>
          <span className='footer-aside-separator'>|</span>
          <a href='https://github.com/ntrappe/chaat/blob/main/COPYRIGHT.md'>Copyright Policy</a>
        </p>
      </StyledFooterAside>
    </StyledFooterWrapper>
  ) 
}


export default Footer;