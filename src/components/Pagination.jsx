import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  justify-content: flex-end;

  width: ${(props) => (props.width ? props.width : `var(--gallery-trigger-width-large)`)};
  @media only screen and (max-width: 1068px) {
    width: ${(props) => (props.width ? props.width : `var(--gallery-trigger-width-medium)`)};
  }
  @media only screen and (max-width: 734px) {
    width: ${(props) => (props.width ? props.width : `var(--gallery-trigger-width-small)`)};
  }
`;

const StyledDot = styled.button`
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--fg-dark-text-minor);
  border-radius: 50%;
  background: ${(props) => (props.selected ? `var(--fg-dark-text-minor)` : 'none')};
  margin-left: 10px;
`;

function Pagination({ color='dark', width=null, children }) {
  const [current, setCurrent] = useState(0);

  return (
    <StyledPagination className='pagination' color={color} width={width}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index, color, current, setCurrent });
      })}
    </StyledPagination>
  )
}

function Dot({ index, color, current, setCurrent }) {
  return (
    <StyledDot 
      index={index} 
      className='dot' 
      color={color}
      selected={current == index}
      onClick={() => setCurrent(index)}
    >
    </StyledDot>
  )
}

Pagination.Dot = Dot;

export default Pagination;