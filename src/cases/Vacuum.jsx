import React from 'react';
import styled from 'styled-components';
import VacuumPreviewImg from '../assets/case-study-images/vacuum-preview.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const VacuumWrapper = styled.div`
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

const VacuumTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const VacuumTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const VacuumPreview = styled.div`
  display: flex;
  justify-content: center;
  min-width: 0;
  width: 100%;

  img {
    display: block;
    margin: auto;
    width: 740px;
    max-width: 100%;
    border-radius: 20px;
  }  
`;

/**
 * Component for the 'Vacuum' Project. It is in progress so it just has the 
 * title, tagline, and image.
 *  
 * @param {string} $sidebarState If sidebar is open, closed, or narrow. 
 * @returns Vacuum component to be passed to Page
 */
function Vacuum({ $sidebarState, }) {
  return (
    <>
      <VacuumWrapper id='case-study' $sidebarState={$sidebarState}>
        <VacuumTitle id='case-study-title'>Vacuum Redesign</VacuumTitle>
        <VacuumTag id='case-study-tag'>Coming soon.</VacuumTag>
        <VacuumPreview id='case-study-preview'>
          <img
            src={VacuumPreviewImg}
            alt='A badly designed vacuum left of the redesign'
          />
        </VacuumPreview>
      </VacuumWrapper>
    </>
  )
}
  
export default Vacuum;