import React from 'react';
import styled from 'styled-components';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const BookifyWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  height: 100%;
  padding-top: 2.35rem;
  background-color: ${(props) => {
    if (props.$projectState === States.NARROW) {
      return 'purple';
    } else if (props.$projectState === States.EXPANDED) {
      return 'orange';
    } else {
      return 'grey';
    }
  }};
  
  @media (max-width: 1023px) {
    min-width: 100%:
    width: 100%:
    position: ${(props) => (props.$sidebarState === States.EXPANDED ? 'fixed' : 'relative')};
    overflow: ${(props) => (props.$sidebarState === States.EXPANDED ? 'hidden' : 'unset')};
  }
`;

const BookifyTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const BookifyTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const BookifyPreview = styled.div`
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

function Bookify({ $sidebarState, $projectState }) {
  
  return (
    <>
      <BookifyWrapper 
        id="case-study" 
        $sidebarState={$sidebarState}
        $projectState={$projectState}
      >
        <BookifyTitle id="case-study-title">Bookify</BookifyTitle>
        <BookifyTag id="case-study-tag">Finding books.</BookifyTag>
        <BookifyPreview id="case-study-preview">
          <img
            src="/src/assets/case-study-images/book-preview.png"
            alt="Tomato Pomodoro Icon"
          />
        </BookifyPreview>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
      </BookifyWrapper>
    </>
  )
}
  
export default Bookify;