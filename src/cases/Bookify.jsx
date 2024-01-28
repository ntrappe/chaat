import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BookifyWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;
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

function Bookify() {
  
  return (
    <>
      <BookifyWrapper>
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