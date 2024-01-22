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

const PomodoroSection = styled.section`
  margin-top: var(--proj-sect-gap);

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-family: 'SF Pro';
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.47;
    letter-spacing: -0.022px;
    margin-top: 0.8em;
    color: var(--asphalt);
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
        <PomodoroSection>
          <h3>Problem</h3>
          <p>Engineering students need to complete giant programming assignments without getting overwhelmed or burnt out. Without a way to break up work into smaller tasks and work for shorter periods of time, engineering students will suffer from a lack of productivity and, potentially, fail to complete assignments.</p>
        </PomodoroSection>
      </PomodoroWrapper>
    </>
  )
}
  
export default Pomodoro;