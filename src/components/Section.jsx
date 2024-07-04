import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

/* -------------- Start Constants -------------- */
const IN_FOCUS_RANGE = 90;          // pixels from top of page
const NO_IDX = '-1';
const SCROLL_MOVE_DURATION = 250;   // in miliseconds
const NAV_HEIGHT = 3.1;             // in rem
const ASIDE_TOP = 70;        // in px
/* --------------- End Constants -------------- */

const StyledSection = styled.section`
  margin-top: ${(props) => {
    if (props.$gap === 'spacious') return `var(--sect-gap-spacious)`;
    else if (props.$gap === 'condensed') return `var(--sect-gap-condensed)`;
    else return `var(--sect-gap-normal)`;
  }}
  background-color: yellow;
`;

const StyledHeading = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 0.2rem;
`;

const StyledSubheading = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--asphalt);
  margin-top: 1.8em;
`;

const StyledText = styled.p`
  font-family: 'SF Pro';
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.47;
  letter-spacing: -0.022px;
  margin-top: 0.5em;
  margin-bottom: 1.2em;
  color: var(--asphalt);

  b {
    font-weight: 400;
  }

  a {
    color: var(--scarlet);
  }

  a:hover {
    text-decoration: underline;
  }
`;

const StyledUnList = styled.ul`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.2rem;

  li {
    list-style-type: disc;
    font-family: 'SF Pro';
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 300;
    padding-left: 0.2rem;
    color: var(--asphalt);
  }

  li b {
    font-weight: 400;
  }
`;

const StyledOrList = styled.ol`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.2rem;

  li {
    list-style-type: number;
    font-family: 'SF Pro';
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 300;
    padding-left: 0.2rem;
    color: var(--asphalt);
  }

  li b {
    font-weight: 400;
  }
`;

const StyledGrid = styled.div`
  display: flex;
`;

function Section({ color='light', gap='normal', index=NO_IDX, children }) {
  const sectionRef = useRef(null);
  const [disableScrollListener, setDisableScrollListener] = useState(false);

  window.addEventListener('aside-click-0', () => console.log('click 0'));
  window.addEventListener('aside-click-1', () => console.log('click 1'));
  window.addEventListener('aside-click-2', () => console.log('click 2'));
  /**
   * Triggered on a scroll. Ignores automatic scrolling due to moving the page because a 
   * section heading was clicked in aside (via disableScrollListener). For manual scrolling,
   * will check if the section is within range of the top of the page and, therefore, in focus.
   * Doesn't bother listening if no ID is given. ID associates a section to a heading in aside.
   */
  useEffect(() => {
    const checkInFocus = () => {
      // Only listens for manual scrolling (not auto from a clicked section heading)
      if (!disableScrollListener && sectionRef.current && index != NO_IDX) {
        // If the section is within the range, fire an event
        if ((sectionRef.current.offsetTop - window.scrollY) < IN_FOCUS_RANGE) {
          window.dispatchEvent(new Event('section-scroll-' + index));
        }
      }
    }

    window.addEventListener('scroll', checkInFocus);

    return () => {
      window.removeEventListener('scroll', checkInFocus);
    }
  }, []);

  /**
   * When an item is clicked in the list of sections in Aside, is sends an event of which
   * section was clicked. We listen for which section was clicked and will scroll the window to
   * the start of that section. We add additional logic to make it a smoother (less jerky) scroll.
   * Dependency on disableScrollListener which is enabled when manually scrolling.
   */
  useEffect(() => {
    const moveSectionIntoFocus = () => {
      if (sectionRef && index != NO_IDX) {
        /* Need to disable the scroll listener because when we jump to a section, this is technically
         * a scroll and aside will be listening and show us jumping through every section between
         * the current and next which looks jerky. Temporarily disable while we're manually scrolling
         */
        setDisableScrollListener(true);
 
        // Scroll this section to just below the nav
        window.scrollTo({
          top: sectionRef.current.offsetTop - ASIDE_TOP,
          behavior: 'smooth',
        });

        /**
         * Only let us disable listening to scrolls for the duration of moving the section to the 
         * top of our window. (About 250 miliseconds). Then renable it.
         */
        setTimeout(() => {
          setDisableScrollListener(false);
        }, SCROLL_MOVE_DURATION);
      } else {
        console.error('Invalid section reference. Cannot move into focus @Section');
      }
    }

    window.addEventListener('aside-click-' + index, moveSectionIntoFocus);
      
    return () => {
      window.removeEventListener('aside-click-' + index, moveSectionIntoFocus)
    }
  }, []);

  return (
    <StyledSection ref={sectionRef} $gap={gap}>
      {children}
    </StyledSection>
  )
  // {React.Children.map(children, (child, index) => {
  //         return React.cloneElement(child, { selectedItem, handleItemClick, index });
  //       })}
}

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

function Subheading({ children }) {
  return <StyledSubheading>{children}</StyledSubheading>;
}

function TextBlock({ children }) {
  return <StyledText>{children}</StyledText>
}

function List({ children, type='unordered' }) {
  return (
    <>
    {type === 'unordered' && (
      <StyledUnList>{children}</StyledUnList>
    )}
    {type !== 'unordered' && (
      <StyledOrList>{children}</StyledOrList>
    )}
    </>
  )
}

function Item({ children }) {
  return <li>{children}</li>
}

function Grid({ children }) {

}

// Named exports for direct access (no nested)
Section.Heading = Heading;
Section.Subheading = Subheading;
Section.Text = TextBlock;
Section.List = List;
Section.Grid = Grid;
Section.Grid.Item = Item;


export default Section;