import React from 'react';
import styled from 'styled-components';

/* Custom Colors */
const highlightBlue = '#388eff';
const darkerGrey = '#1f1f1f';
const mediumGrey = '#3d3d3d';
const borderGrey = '#444';
const lightGrey = '#999';

const HelloBackground = styled.figure`
  background-image: url("/src/assets/dotted-background.jpeg");
  position: absolute;
  width: 100%;
  height: 640px;
  background-repeat: no-repeat;
  background-size: 1632px 700px;
  max-width: 2400px;    
  background-position: center bottom;
  top: 2.75rem;

  @media (max-width: 1068px) {
    height: 510px;
    /* 1/3 of original image size */
    background-size: 1360px 584px;
  }

  @media (max-width: 767px) {
    height: 350px;
    /* 1/4 of original image size */
    background-size: 1020.5px 438px;
  }
`;

const TextCursor = styled.span`
  display: inline-block;
  border-left: 3px solid ${highlightBlue};
  margin-left: 10px;
  height: 125px;
  animation: blinker 1.4s step-start infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 767px) {
    border-left: 2.5px solid var(--highlight-blue);
    margin-left: 5px;
    height: 95px;
  }
`;

const HelloText = styled.h1`
  font-family: 'New York';
  font-size: 5em;
  font-weight: 600;
  background: -webkit-linear-gradient(top left, #b5ff56, #0edc91);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  align-self: center;
  cursor: default;

  @media (max-width: 767px) {
    font-size: 4em;
  }
`;

const HelloTextContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 310px;
  align-items: center;

  @media (max-width: 1068px) {
    top: 252px;
  }

  @media (max-width: 767px) {
    top: 180px;
  }
`;

const LanguageOption = styled.button`
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 5px;
  padding: 4px 8px;
  margin-bottom: 6px;
  
  background-color: ${(props) => {
    if (props.$state === 'on') {
      return highlightBlue;
    } else {
      return darkerGrey;
    }
  }};
  
  color: ${(props) => {
    if (props.$state === 'on') {
      return 'white';
    } else {
      return lightGrey;
    }
  }};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${(props) => {
      if (props.$state === 'on') {
        return highlightBlue;
      } else {
        return mediumGrey;
      }
    }}
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 251px;
  left: 3em;
  padding: 12px 3.5px;
  background-color: ${darkerGrey};
  border: 1px solid ${borderGrey};
  border-radius: 12px;

  @media (max-width: 1068px) {
    top: 192px;
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
  background-color: ${darkerGrey};
  
  color: ${(props) => {
    if (props.$state === 'on') {
      return highlightBlue;
    } else {
      return lightGrey;
    }
  }};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${(props) => {
      if (props.$state === 'on') {
        return darkerGrey;
      } else {
        return mediumGrey;
      }
    }};

    color: ${(props) => {
      if (props.$state === 'on') {
        return highlightBlue;
      } else {
        return 'white';
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

const FontSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 310px;
  right: 6.25em;
  padding: 10px 4px;
  background-color: ${darkerGrey};
  border: 1px solid ${borderGrey};
  border-radius: 12px;

  @media (max-width: 1068px) {
    top: 250px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const ColorOption = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-right: 0;

  border: ${(props) => {
    if (props.$state === 'on') {
      return '2px solid #388eff';
    } else {
      return '1.5px solid #727578';
    }
  }};

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(1) {
    background: -webkit-linear-gradient(top left, #ebf6f9, #b8c8ce);
  }

  &:nth-child(2) {
    background: -webkit-linear-gradient(top left, #b5ff56, #0edc91);
  }

  &:nth-child(3) {
    background: -webkit-linear-gradient(top left, #cf97ff, #375fdc);
  }

  &:last-child {
    background: -webkit-linear-gradient(top left, #ffdc59, #dc5b47);
  }

  &:hover {
    border: ${(props) => {
      if (props.$state === 'on') {
        return '2px solid #388eff';
      } else {
        return '2.25px solid white';
      }
    }};
  }
`;

const ColorSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 270px;
  right: 3em;
  padding: 10px 6px;
  align-items: center;
  background-color: ${darkerGrey};
  border: 1px solid ${borderGrey};
  border-radius: 12px;

  @media (max-width: 1068px) {
    top: 210px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

function Hello() {
  return (
    <>
      <HelloBackground></HelloBackground>
      <HelloTextContainer>
        <HelloText $family="romance">Hello</HelloText>
        <TextCursor></TextCursor>
      </HelloTextContainer>
      <LanguageSelector>
        <LanguageOption $state="off">AR</LanguageOption>
        <LanguageOption $state="on">EN</LanguageOption>
        <LanguageOption $state="off">ES</LanguageOption>
        <LanguageOption $state="off">FR</LanguageOption>
        <LanguageOption $state="off">HI</LanguageOption>
        <LanguageOption $state="off">RU</LanguageOption>
        <LanguageOption $state="off">ZN</LanguageOption>
      </LanguageSelector>
      <FontSelector>
        <FontOption $state="off">Aa</FontOption>
        <FontOption $state="off">Aa</FontOption>
        <FontOption $state="on">Aa</FontOption>
      </FontSelector>
      <ColorSelector>
        <ColorOption $state="off"></ColorOption>
        <ColorOption $state="off"></ColorOption>
        <ColorOption $state="off"></ColorOption>
        <ColorOption $state="off"></ColorOption>
      </ColorSelector> 
    </>
  )
}
  
export default Hello;