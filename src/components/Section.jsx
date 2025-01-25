import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  
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

  h1, h2, h3, .badges-container {
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 734px) {
      width: var(--viewport-width-small);
    }

    @media only screen and (min-width: 735px) and (max-width: 1068px) {
      width: var(--viewport-width-medium);
    }

    @media only screen and (min-width: 1069px) {
      width: var(--viewport-width-large);
    }
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 500;
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-heading)` : `var(--fg-light-text-heading)`)};
    
    @media only screen and (max-width: 734px) {
      font-size: var(--fg-size-title-minor);
      line-height: 1.08;
    }

    @media only screen and (min-width: 735px) and (max-width: 1068px) {
      font-size: var(--fg-size-title-normal);
      line-height: 1.06;
    }

    @media only screen and (min-width: 1069px) {
      font-size: var(--fg-size-title-major);
      line-height: 1.055;
    }
  }

  .section-subheading {
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-normal)` : `var(--fg-light-text-normal)`)};

    @media only screen and (max-width: 734px) {
      font-size: 19px;
      line-height: 1.38;
      letter-spacing: .231px;
    }

    @media only screen and (min-width: 735px) and (max-width: 1068px) {
      font-size: 21px;
      line-height: 1.38;
      letter-spacing: .011em;
    }

    @media only screen and (min-width: 1069px) {
      font-size: 24px;
      line-height: 1.34;
      letter-spacing: .009em;
    }
  }

  .section-callout {
    font-weight: 600;
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-minor)` : `var(--fg-light-text-minor)`)};

    @media only screen and (max-width: 734px) {
      font-size: 14px;
      line-height: 1.42;
      letter-spacing: 0em;
    }

    @media only screen and (min-width: 735px) and (max-width: 1068px) {
      font-size: 19px;
      line-height: 1.21;
      letter-spacing: 0em;
    }

    @media only screen and (min-width: 1069px) {
      font-size: 21px;
      line-height: 1.38;
      letter-spacing: .011em;
    }
  }
`;

const DynamicHeadingWrapper = styled.h1`
  .section-dynamic-word {
    opacity: 1;
    transition: opacity 1s ease;
  }

  .section-dynamic-word.fade {
    opacity: 0.2;
  }
`;

const BadgesWrapper = styled.div`
  display: block;
  margin-bottom: 80px;
  margin-top: 58px;
  font-weight: 600;
  flex-wrap: wrap;

  @media only screen and (max-width: 734px) {
    display: flex;
    margin-bottom: 75px;
    margin-top: 9px;
    font-size: 19px;
    line-height: 1.21;
    letter-spacing: .012em;
  }
`;

const BadgeWrapper = styled.figure`
  display: inline-block;
  position: relative;
  margin-right: 85px;
  margin-bottom: 60px;
  font-size: 20px;
  min-width: 5em;
  z-index: 1;

  @media only screen and (max-width: 734px) {
    display: block;
    /* top | right | bottom | left */
    margin: 10px 30px 30px 0;
  }

  @media only screen and (min-width: 1069px) {
    margin-bottom: 0px;
  }

  .badge-content {
    position: relative;
    margin: 1em 0;
    padding-top: 4px;
    padding-bottom: 2px;
    z-index: 1;
    width: auto;
  }
`;

const CaptionWrapper = styled.span`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
  font-size: 17px;
  line-height: 1.23;
  letter-spacing: -.022em;
  font-weight: 600;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-trigger-fill)` : `var(--fg-light-trigger-fill)`)};

  &:first-child {
    top: auto;
    bottom: 100%;
  }

  @media only screen and (max-width: 734px) {
    font-size: 14px;
    line-height: 1.285;
    letter-spacing: -.016em;
  }
`;

const ValueWrapper = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
  z-index: 1;
  left: -2px;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -.009em;
  color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-text-heading)` : `var(--fg-light-text-heading)`)};

  @media only screen and (max-width: 734px) {
    font-size: 48px;
    letter-spacing: -.003em;
  }
`;

function Section({ color='dark', children }) {
  // Clone each direct child of <Page> and pass color
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  // Return the processed children
  return <StyledSection color={color}>{processedChildren}</StyledSection>;
} 

function Heading({ children, color }) {
  return <h1 className='section-heading' color={color}>{children}</h1>;
}

function Subheading({ children, color }) {
  return <h2 className='section-subheading' color={color}>{children}</h2>;
}

function DynamicHeading({ words = [], children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  
  useEffect(() => {
    const cycleText = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(cycleText);
  }, [words]);

  return (
    <DynamicHeadingWrapper className='section-dynamic-heading'>
      <span className={`section-dynamic-word ${fade ? 'fade' : ''}`}>{words[currentIndex]}</span>
      <span className='section-static-word'>{children}</span>
    </DynamicHeadingWrapper>
  )
}

function Callout({ children, color }) {
  return <h3 className='section-callout' color={color}>{children}</h3>;
}

function Badges({ children, color }) {
  // Clone each direct child of <Page> and pass color
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  return (
    <BadgesWrapper className='badges-container' color={color}>
      {processedChildren}
    </BadgesWrapper>
  );
}

function Badge({ children, color }) {
  // Clone each direct child of <Page> and pass color
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  // Return the processed children
  return (
    <BadgeWrapper className='badge' color={color}>
      <div className='badge-content' color={color}>
        {processedChildren}
      </div>
    </BadgeWrapper>
  );
}

function Caption({ children, color }) {
  return <CaptionWrapper className='badge-caption' color={color}>{children}</CaptionWrapper>;
}

function Value({ children, color }) {
  return <ValueWrapper className='badge-value' color={color}>{children}</ValueWrapper>;
}



Section.Heading = Heading;
Section.Subheading = Subheading;
Section.DynamicHeading = DynamicHeading;
Section.Callout = Callout;
Section.Badges = Badges;
Section.Badges.Badge = Badge;
Section.Badges.Badge.Caption = Caption;
Section.Badges.Badge.Value = Value;


export default Section;