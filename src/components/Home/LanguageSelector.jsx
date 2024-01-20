import React from 'react';
import styled from 'styled-components';

const LanguageSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 251px;
  left: 3em;
  padding: 12px 3.5px;
  background-color: var(--midnight);
  border: 1px solid var(--pavement);
  border-radius: 12px;

  @media (max-width: 1068px) {
    top: 192px;
  }

  @media (max-width: 767px) {
    display: none;
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
      return `var(--scarlet)`;
    } else {
      return `var(--midnight)`;
    }
  }};
  
  color: ${(props) => {
    if (props.$state === 'on') {
      return 'white';
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
        return `var(--scarlet)`;
      } else {
        return `var(--pavement)`;
      }
    }};

    color: ${(props) => {
      if (props.$state === 'on') {
        return 'white';
      } else {
        return `var(--snow)`;
      }
    }}
  }
`;

function LanguageSelector({ handleLanguageClick, $selectedLanguage }) {
  return (
    <LanguageSelectorWrapper>
      <LanguageOption $state={$selectedLanguage === 'AR' ? 'on' : 'off'} 
        onClick={() => handleLanguageClick('AR')}>AR</LanguageOption>
      <LanguageOption $state={$selectedLanguage === 'EN' ? 'on' : 'off'}
        onClick={() => handleLanguageClick('EN')}>EN</LanguageOption>
      <LanguageOption $state={$selectedLanguage === 'ES' ? 'on' : 'off'}
        onClick={() => handleLanguageClick('ES')}>ES</LanguageOption>
      <LanguageOption $state={$selectedLanguage === 'FR' ? 'on' : 'off'}
        onClick={() => handleLanguageClick('FR')}>FR</LanguageOption>
      <LanguageOption $state={$selectedLanguage === 'HI' ? 'on' : 'off'}
        onClick={() => handleLanguageClick('HI')}>HI</LanguageOption>
      <LanguageOption $state={$selectedLanguage === 'RU' ? 'on' : 'off'}
        onClick={() => handleLanguageClick('RU')}>RU</LanguageOption>
      <LanguageOption $state={$selectedLanguage === 'ZN' ? 'on' : 'off'}
        onClick={() => handleLanguageClick('ZN')}>ZN</LanguageOption>
    </LanguageSelectorWrapper>
  )
}

export default LanguageSelector;