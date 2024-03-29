import React from 'react';
import styled from 'styled-components';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const CalendarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;

  @media (max-width: 1023px) {
    min-width: 100%:
    width: 100%:
    position: ${(props) => (props.$sidebarState === States.EXPANDED ? 'fixed' : 'relative')};
    overflow: ${(props) => (props.$sidebarState === States.EXPANDED ? 'hidden' : 'unset')};
  }
`;

const CalendarTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const CalendarTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

/**
 * Component for the 'Calendar' Project. It is in progress so it just has the 
 * title, tagline, and image.
 *  
 * @param {string} $sidebarState If sidebar is open, closed, or narrow. 
 * @returns Calendar component to be passed to Page
 */
function Calendar({ $sidebarState }) {
  return (
    <>
      <CalendarWrapper id='case-study' $sidebarState={$sidebarState}>
        <CalendarTitle id='case-study-title'>National Park Service 2025 Calendar</CalendarTitle>
        <CalendarTag id='case-study-tag'>Coming soon.</CalendarTag>
      </CalendarWrapper>
    </>
  )
}
  
export default Calendar;