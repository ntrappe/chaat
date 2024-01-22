import React from 'react';
import styled from 'styled-components';

const NoteWrapper = styled.div`
  width: fit-content;
  border: 1px solid var(--violet);
  border-radius: 12px;
  background-color: var(--lilac);
  padding: 15px;
  
  h5 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--violet);
    padding-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
    color: var(--asphalt);

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }

  a {
    color: var(--midnight);
    font-weight: 400;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Note({ content }) {
  return (
    <NoteWrapper>
      <h5>Note</h5>
      <p>{content}</p>
    </NoteWrapper>
  )
}

export default Note;