import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import Grid from '../components/Core/Grid.jsx';

const EXP = 'expanded';
const COL = 'collapsed';
const HID = 'hidden';

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;

  @media (max-width: 1023px) {
    width: 692px;
  }

  @media (max-width: 767px) {
    width: 87.5%;
`;

function Projects() {
  const body = document.getElementById('body');
  body.setAttribute('page', 'photography');


  return (
    <>
      <GlassHeader 
        $colorScheme={'light'} 
        $showSideBar={false} 
        passSidebarClick={() => console.log('no sidebar')}
      />
      <MainWrapper id="main">
        <Grid />
      </MainWrapper>
    </>
  )
}

export default Projects;