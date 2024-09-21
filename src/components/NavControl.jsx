import React from 'react';
import styled from 'styled-components';

const StyledNavControl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.75rem;
  justify-content: flex-end;

  width: ${(props) => (props.width ? props.width : `var(--carousel-trigger-width-large)`)};
  @media only screen and (max-width: 1068px) {
    width: ${(props) => (props.width ? props.width : `var(--carousel-trigger-width-medium)`)};
  }
  @media only screen and (max-width: 734px) {
    width: ${(props) => (props.width ? props.width : `var(--carousel-trigger-width-small)`)};
  }

  button {
    color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-trigger-fill)` : `var(--fg-light-trigger-fill)`)};
    opacity: ${(props) => (props.disabled ? '0.3' : '0.9')};
    align-self: flex-end;
    border: 2px solid;
    border-radius: 50%;
    padding: 5px;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  }

  button:last-child {
    margin-left: var(--prev-next-icon-gap);
  }

  svg {
    width: var(--prev-next-icon-width);
    height: var(--prev-next-icon-width);
  }

  button:not(:disabled):hover {
    background-color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-trigger-fill)` : `var(--fg-light-trigger-fill)`)};
    opacity: 1;
    border-color: ${(props) => (props.color === 'dark' ? `var(--fg-dark-trigger-fill)` : `var(--fg-light-trigger-fill)`)};

    svg {
      color: ${(props) => (props.color === 'dark' ? 'white' : 'black')};
    }
  }

  button:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

function NavControl({ color='dark', width=null, triggerPrev, triggerNext, disablePrev=true, disableNext=false }) {
  return (
    <StyledNavControl className='navigation-control' color={color} width={width}>
      <button className='prev-button' disabled={disablePrev} onClick={() => triggerPrev()}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
          <path d='M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z'>
          </path>
        </svg>
      </button>
      <button className='next-button' disabled={disableNext} onClick={() => triggerNext()}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
          <path d='M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z'>
          </path>
        </svg>
      </button>
    </StyledNavControl>
  )
}

export default NavControl;