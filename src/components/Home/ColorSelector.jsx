import React from 'react';
import styled from 'styled-components';

const ColorSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 270px;
  right: 3em;
  padding: 10px 6px;
  align-items: center;
  background-color: var(--midnight);
  border: 1.5px solid var(--pavement);
  border-radius: 12px;

  @media (max-width: 1068px) {
    top: 210px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const ColorOption = styled.button`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-right: 0;

  border: ${(props) => {
    if (props.$state === 'on') {
      return `1.5px solid var(--scarlet)`;
    } else {
      return `1.5px solid var(--concrete)`;
    }
  }};

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(1) { /* white */
    background: -webkit-linear-gradient(top left, white, var(--snow));
  }

  &:nth-child(2) { /* green */
    background: -webkit-linear-gradient(top left, var(--lime), var(--cyan));
  }

  &:nth-child(3) { /* purple */
    background: -webkit-linear-gradient(top left, var(--grape), var(--cornflower));
  }

  &:last-child { /* orange */
    background: -webkit-linear-gradient(top left, var(--lemon), var(--strawberry));
  }

  &:hover {
    border: ${(props) => {
      if (props.$state === 'on') {
        return `1.5px solid var(--coral)`;
      } else {
        return `1.5px solid var(--snow)`;
      }
    }};
  }
`;

function ColorSelector({ handleColorClick, $selectedColor }) {
  return (
    <ColorSelectorWrapper>
      <ColorOption 
        $state={$selectedColor === 'white' ? 'on' : 'off'}
        onClick={() => handleColorClick('white')}
      ></ColorOption>
      <ColorOption 
        $state={$selectedColor === 'green' ? 'on' : 'off'}
        onClick={() => handleColorClick('green')}
      ></ColorOption>
      <ColorOption 
        $state={$selectedColor === 'purple' ? 'on' : 'off'}
        onClick={() => handleColorClick('purple')}
      ></ColorOption>
      <ColorOption 
        $state={$selectedColor === 'orange' ? 'on' : 'off'}
        onClick={() => handleColorClick('orange')}
      ></ColorOption>
    </ColorSelectorWrapper>
  )
}

export default ColorSelector;