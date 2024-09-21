import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  // background-color: pink;
  
  @media only screen and (max-width: 734px) {
    padding-top: 100px;
    padding-bottom: 30px;
  }

  @media only screen and (min-width: 735px) and (max-width: 1068px) {
    padding-top: 140px;
    padding-bottom: 40px;
  }

  @media only screen and (min-width: 1069px) {
    padding-top: 170px;
    padding-bottom: 60px;
  }

  .section-heading {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;
    font-weight: 500;
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-heading)` : `var(--fg-light-text-heading)`)};
    
    @media only screen and (max-width: 734px) {
      font-size: var(--fg-size-title-minor);
      line-height: 1.08;
      width: var(--viewport-width-small);
    }

    @media only screen and (min-width: 735px) and (max-width: 1068px) {
      font-size: var(--fg-size-title-normal);
      line-height: 1.06;
      width: var(--viewport-width-medium);
    }

    @media only screen and (min-width: 1069px) {
      font-size: var(--fg-size-title-major);
      line-height: 1.055;
      width: var(--viewport-width-large);

    }
  }
`;


function Section({ color='dark', children }) {
  return (
    <StyledSection color={color}>
      {children}
    </StyledSection>
  )
} 

function Heading({ children }) {
  return <h1 className='section-heading'>{children}</h1>;
}

Section.Heading = Heading;

export default Section;