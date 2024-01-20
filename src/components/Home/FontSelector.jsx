import React from 'react';
import styled from 'styled-components';

const FontSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 310px;
  right: 6.25em;
  padding: 10px 4px;
  background-color: var(--midnight);
  border: 1px solid var(--pavement);
  border-radius: 12px;

  @media (max-width: 1068px) {
    top: 250px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const FontOption = styled.button`
  font-size: 1em;
  font-weight: 600;
  border-radius: 5px;
  padding: 3.5px 6.5px;
  margin-bottom: 6px;
  background-color: var(--midnight);
  
  color: ${(props) => {
    if (props.$state === 'on') {
      return `var(--scarlet)`;
    } else {
      return `var(--stone)`;
    }
  }};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${(props) => {
      if (props.$state === 'on') {
        return `var(--midnight)`;
      } else {
        return `var(--pavement)`;
      }
    }};

    color: ${(props) => {
      if (props.$state === 'on') {
        return `var(--scarlet)`;
      } else {
        return `var(--snow)`;
      }
    }};
  }
  
  &:first-child {
    font-family: 'SF Compact';
    font-weight: 600;
  }
  
  &:nth-child(2) {
    font-family: 'SF Mono';
    font-weight: 200;
  }
  
  &:last-child {
    font-family: 'New York';
    font-weight: 500;
  }
`;

function FontSelector({ handleFontClick, $selectedFont }) {
  return (
    <FontSelectorWrapper>
      <FontOption $state={$selectedFont === 0 ? 'on' : 'off'}
        onClick={() => handleFontClick(0)}>Aa</FontOption>
      <FontOption $state={$selectedFont === 1 ? 'on' : 'off'}
        onClick={() => handleFontClick(1)}>Aa</FontOption>
      <FontOption $state={$selectedFont === 2 ? 'on' : 'off'}
        onClick={() => handleFontClick(2)}>Aa</FontOption>
    </FontSelectorWrapper>
  )
}

export default FontSelector;