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

  img {
    display: block;
    margin: auto;
    width: 740px;
    max-width: 100%;
    border-radius: 20px;
  }  
`;

function CaseStudy({ $mode }) {
  
  return (
    <>
      <CaseStudyWrapper $mode={$mode}>
        <CaseStudyTitle id="case-study-title">Pomodoro Timer</CaseStudyTitle>
        <CaseStudyTag id="case-study-tag">A web-based timer designed to curb procrastination.</CaseStudyTag>
        <CaseStudyPreview id="case-study-preview">
          <img
            src="/src/assets/case-study-images/pomodoro-preview.png"
            alt="Tomato Pomodoro Icon"
          />
        </CaseStudyPreview>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
      </CaseStudyWrapper>
    </>
  )
}
  
export default CaseStudy;