import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import PhotoGrid from '../components/Core/PhotoGrid.jsx';

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
        <PhotoGrid />
      </MainWrapper>
    </>
  )
}

export default Projects;