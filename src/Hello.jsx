import React from 'react';
import styled from 'styled-components';

/* Custom Colors */
const highlightBlue = '#388eff';
const darkerGrey = '#1f1f1f';
const mediumGrey = '#3d3d3d';
const borderGrey = '#444';
const lightGrey = '#999';

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
  // return (
  //   <>
  //     <figure id="hello-background"></figure>
  //     <div id="hello-text-container">
  //       <h1 id="hello-text" family="romance">Hello</h1>
  //       <span id="text-cursor"></span>
  //     </div>
  //     <div id="language-selector" className="hello-text-selector" state="visible">
  //       <button className="lang-opt" state="off">AR</button>
  //       <button className="lang-opt" state="on">EN</button>
  //       <button className="lang-opt" state="off">ES</button>
  //       <button className="lang-opt" state="off">FR</button>
  //       <button className="lang-opt" state="off">HI</button>
  //       <button className="lang-opt" state="off">RU</button>
  //       <button className="lang-opt" state="off">ZN</button>
  //     </div>
  //     <div id="font-selector" className="hello-text-selector" state="visible">
  //       <button className="font-opt" state="off">Aa</button>
  //       <button className="font-opt" state="off">Aa</button>
  //       <button className="font-opt" state="on">Aa</button>
  //     </div>
  //     <div id="color-selector" className="hello-text-selector" state="visible">
  //       <button class="color-opt" state="off"></button>
  //       <button class="color-opt" state="on"></button>
  //       <button class="color-opt" state="off"></button>
  //       <button class="color-opt" state="off"></button>
  //     </div>
  //   </>
  // )
}
  
export default Hello;