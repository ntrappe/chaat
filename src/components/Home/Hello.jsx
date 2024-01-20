import React, { useState } from 'react';
import styled from 'styled-components';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import LanguageSelector from './LanguageSelector';

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
  border-left: 3px solid var(--scarlet);
  margin-left: 10px;
  height: 125px;
  animation: blinker 1.4s step-start infinite;

  @media (max-width: 767px) {
    border-left: 2.5px solid var(--scarlet);
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
        return '-webkit-linear-gradient(top left, white, var(--snow))';
      case 'purple':
        return '-webkit-linear-gradient(top left, var(--grape), var(--cornflower))';
      case 'orange':
        return '-webkit-linear-gradient(top left, var(--lemon), var(--strawberry))';
      default:
        return '-webkit-linear-gradient(top left, var(--lime), var(--cyan))';
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
        <HelloText 
          $family={family} 
          $font={selectedFont} 
          $gradient={selectedColor}
        >{helloLanguage}</HelloText>
        <TextCursor></TextCursor>
      </HelloTextContainer>
      <LanguageSelector
        handleLanguageClick={handleLanguageClick}
        $selectedLanguage={selectedLanguage}
      />
      <FontSelector
        handleFontClick={handleFontClick}
        $selectedFont={selectedFont}
      />
      <ColorSelector
        handleColorClick={handleColorClick}
        $selectedColor={selectedColor}
      />
    </>
  )
}
  
export default Hello;