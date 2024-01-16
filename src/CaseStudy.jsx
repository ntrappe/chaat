import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EXP = 'expanded';
const COL = 'collapsed';
const HID = 'hidden';

const CaseStudyWrapper = styled.div`
  background-color: burlywood;
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === HID ? 'none' : 'flex')};
  }
`;

function CaseStudy({ $mode }) {
  
  return (
    <>
      <CaseStudyWrapper $mode={$mode}>
        <h1>Human Interface Guidelines</h1>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
      </CaseStudyWrapper>
    </>
  )
}
  
export default CaseStudy;