import React, { useState } from 'react';
import styled from 'styled-components';

/* Custom Colors */
const highlightBlue = '#388eff';
const highlightRed = '#ce4746';
const brightHighRed = '#ff595b';
const darkerGrey = '#1f1f1f';
const mediumGrey = '#3d3d3d';
const borderGrey = '#444';
const lightGrey = '#999';
const snow = 'rgb(232, 232, 237)';

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
  border-left: 3px solid ${highlightRed};
  margin-left: 10px;
  height: 125px;
  animation: blinker 1.4s step-start infinite;

  @media (max-width: 767px) {
    border-left: 2.5px solid ${highlightRed};
    margin-left: 5px;
    height: 95px;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const HelloText = styled.h1`
  font-size: 5em;
  font-weight: 500;
  background-clip: text;
  align-self: center;
  cursor: default;

  font-family: ${(props) => {
    if (props.$family === 'arabic') {
      if (props.$font === 0) {
        return 'SF Arabic';
      } else if (props.$font === 1) {
        return 'Courier New';
      } else {
        return 'Geeza Arabic';
      }
    } else if (props.$family === 'chinese') {
      if (props.$font === 0) {
        return 'ZCOOL Chinese';
      } else if (props.$font === 1) {
        return 'Noto Sans';
      } else {
        return 'Noto Serif Chinese';
      }
    } else if (props.$family === 'hindi') {
      if (props.$font === 0) {
        return 'Baloo Hindi';
      } else if (props.$font === 1) {
        return 'Noto Sans';
      } else {
        return 'New York';
      }
    } else {
      if (props.$font === 0) {
        return 'SF Compact';
      } else if (props.$font === 1) {
        return 'SF Mono';
      } else {
        return 'New York';
      }
    }
  }};

  background: ${(props) => {
    switch (props.$gradient) {
      case 'white':
        return '-webkit-linear-gradient(top left, #ebf6f9, #b8c8ce)';
      case 'purple':
        return '-webkit-linear-gradient(top left, #cf97ff, #375fdc)';
      case 'orange':
        return '-webkit-linear-gradient(top left, #ffdc59, #dc5b47)';
      default:
        return '-webkit-linear-gradient(top left, #b5ff56, #0edc91)';
    }
  }};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
      return highlightRed;
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
        return highlightRed;
      } else {
        return mediumGrey;
      }
    }};

    color: ${(props) => {
      if (props.$state === 'on') {
        return 'white';
      } else {
        return snow;
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
      return highlightRed;
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
        return highlightRed;
      } else {
        return snow;
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
      return '2px solid ' + highlightRed;
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
        return '2px solid ' + brightHighRed;
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

  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [helloLanguage, setHelloLanguage] = useState('Hello');
  const [family, setFamily] = useState('romance');
  const [selectedFont, setSelectedFont] = useState(0);
  const [selectedColor, setSelectedColor] = useState('green');

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);

    switch (language) {
      case 'AR':
        setHelloLanguage('مرحبا');
        setFamily('arabic');
        break;
      case 'ES':
        setHelloLanguage('Hola');
        setFamily('romance');
        break;
      case 'FR':
        setHelloLanguage('Bonjour');
        setFamily('romance');
        break;
      case 'HI':
        setHelloLanguage('नमस्ते');
        setFamily('hindi');
        break;
      case 'RU':
        setHelloLanguage('привет');
        setFamily('romance');
        break;
      case 'ZN':
        setHelloLanguage('你好');
        setFamily('chinese');
        break;
      default:
        setHelloLanguage('Hello');
        setFamily('romance');
    }
  }

  const handleFontClick = (font) => {
    switch (font) {
      case 0:
        setSelectedFont(font);
        break;
      case 1:
        setSelectedFont(font);
        break;
      default:
        setSelectedFont(font);
    }
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
  }

  return (
    <>
      <HelloBackground></HelloBackground>
      <HelloTextContainer>
        <HelloText $family={family} $font={selectedFont} 
          $gradient={selectedColor}>{helloLanguage}</HelloText>
        <TextCursor></TextCursor>
      </HelloTextContainer>
      <LanguageSelector>
        <LanguageOption $state={selectedLanguage === 'AR' ? 'on' : 'off'} 
          onClick={() => handleLanguageClick('AR')}>AR</LanguageOption>
        <LanguageOption $state={selectedLanguage === 'EN' ? 'on' : 'off'}
          onClick={() => handleLanguageClick('EN')}>EN</LanguageOption>
        <LanguageOption $state={selectedLanguage === 'ES' ? 'on' : 'off'}
          onClick={() => handleLanguageClick('ES')}>ES</LanguageOption>
        <LanguageOption $state={selectedLanguage === 'FR' ? 'on' : 'off'}
          onClick={() => handleLanguageClick('FR')}>FR</LanguageOption>
        <LanguageOption $state={selectedLanguage === 'HI' ? 'on' : 'off'}
          onClick={() => handleLanguageClick('HI')}>HI</LanguageOption>
        <LanguageOption $state={selectedLanguage === 'RU' ? 'on' : 'off'}
          onClick={() => handleLanguageClick('RU')}>RU</LanguageOption>
        <LanguageOption $state={selectedLanguage === 'ZN' ? 'on' : 'off'}
          onClick={() => handleLanguageClick('ZN')}>ZN</LanguageOption>
      </LanguageSelector>
      <FontSelector>
        <FontOption $state={selectedFont === 0 ? 'on' : 'off'}
          onClick={() => handleFontClick(0)}>Aa</FontOption>
        <FontOption $state={selectedFont === 1 ? 'on' : 'off'}
          onClick={() => handleFontClick(1)}>Aa</FontOption>
        <FontOption $state={selectedFont === 2 ? 'on' : 'off'}
          onClick={() => handleFontClick(2)}>Aa</FontOption>
      </FontSelector>
      <ColorSelector>
        <ColorOption $state={selectedColor === 'white' ? 'on' : 'off'}
          onClick={() => handleColorClick('white')}></ColorOption>
        <ColorOption $state={selectedColor === 'green' ? 'on' : 'off'}
          onClick={() => handleColorClick('green')}></ColorOption>
        <ColorOption $state={selectedColor === 'purple' ? 'on' : 'off'}
          onClick={() => handleColorClick('purple')}></ColorOption>
        <ColorOption $state={selectedColor === 'orange' ? 'on' : 'off'}
          onClick={() => handleColorClick('orange')}></ColorOption>
      </ColorSelector> 
    </>
  )
}
  
export default Hello;