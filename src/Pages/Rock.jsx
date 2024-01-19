import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HID = 'hidden';

const CaseStudyWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === HID ? 'none' : 'flex')};
  }

  p {
    font-family: 'SF Pro Display';
    font-size: 17px;
    line-height: 25px;
    font-weight: 400;
  }
`;

const CaseStudyTitle = styled.h1`
  font-family: 'SF Pro Display';
  font-size: 2.2rem;
  line-height: 1.1;
  letter-spacing: -.003em;
  font-weight: 600;
  margin-bottom: 32px;
  color: rgb(29, 29, 31);
`;

const CaseStudyTag = styled.h2`
  font-family: 'SF Pro Display';
  font-size: 1.5rem;
  line-height: 1.142;
  font-weight: 200;
  letter-spacing: .007em;
  margin-bottom: 30px;
`;

const CaseStudyPreview = styled.div`
  display: flex;
  justify-content: center;
  min-width: 0;
  width: 100%;
  margin-bottom: 30px;

  img {
    display: block;
    margin: auto;
    width: 740px;
    max-width: 100%;
    border-radius: 20px;
  }  
`;

function Rock({ $mode }) {
  
  return (
    <>
      <CaseStudyWrapper $mode={$mode}>
        <CaseStudyTitle id="case-study-title">Rock</CaseStudyTitle>
        <CaseStudyTag id="case-study-tag">An app to explore national parks and find the ideal hike.</CaseStudyTag>
        <CaseStudyPreview id="case-study-preview">
        </CaseStudyPreview>
        <p>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</p>
      </CaseStudyWrapper>
    </>
  )
}
  
export default Rock;