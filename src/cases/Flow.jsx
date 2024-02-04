import React from 'react';
import styled from 'styled-components';
import FlowPreviewImg from '../assets/case-study-images/flow-preview.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const FlowWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;
  background-color: yellow;
  width: 700px;

  @media (max-width: 1023px) {
    min-width: 100%:
    width: 100%:
    position: ${(props) => (props.$sidebarState === States.EXPANDED ? 'fixed' : 'relative')};
    overflow: ${(props) => (props.$sidebarState === States.EXPANDED ? 'hidden' : 'unset')};
  }
`;

const FlowTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const FlowTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const FlowPreview = styled.div`
  display: flex;
  justify-content: center;
  min-width: 0;
  width: 100%;

  img {
    display: block;
    margin: auto;
    width: 600px;
    max-width: 100%;
    border-radius: 20px;
  }  
`;

/**
 * Component for the 'Flow' Project. It is in progress so it just has the 
 * title, tagline, and image.
 *  
 * @param {string} $sidebarState If sidebar is open, closed, or narrow. 
 * @returns Flow component to be passed to Page
 */
function Flow({ $sidebarState }) {
  return (
    <>
      <FlowWrapper id='case-study' $sidebarState={$sidebarState}>
        <FlowTitle id='case-study-title'>Flow Controller</FlowTitle>
        <FlowTag id='case-study-tag'>Coming soon.</FlowTag>
        <FlowPreview id='case-study-preview'>
          <img
            src={FlowPreviewImg}
            alt='Gas flowing through a sensor array'
          />
        </FlowPreview>
      </FlowWrapper>
    </>
  )
}
  
export default Flow;