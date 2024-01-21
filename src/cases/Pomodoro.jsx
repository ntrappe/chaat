import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HID = 'hidden';

const PomodoroWrapper = styled.div`
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

const PomodoroTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);
`;

const PomodoroTag = styled.h2`
  letter-spacing: .007em;
  margin-bottom: 30px;
  color: var(--wet-concrete);
`;

const PomodoroPreview = styled.div`
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

function Pomodoro({ $mode }) {
  
  return (
    <>
      <PomodoroWrapper $mode={$mode}>
        <PomodoroTitle id="case-study-title">Pomodoro Timer</PomodoroTitle>
        <PomodoroTag id="case-study-tag">A web-based timer designed to curb procrastination.</PomodoroTag>
        <PomodoroPreview id="case-study-preview">
          <img
            src="/src/assets/case-study-images/pomodoro-preview.png"
            alt="Tomato Pomodoro Icon"
          />
        </PomodoroPreview>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
      </PomodoroWrapper>
    </>
  )
}
  
export default Pomodoro;