import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader';
import Hello from '../components/Home/Hello';

const MainWrapper = styled.main`
  background-color: inherit;
`;

const HelloSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: var(--bg-height-big);
`;

function Home() {
  const body = document.getElementById('body');
  body.setAttribute('page', 'home');

  return (
    <>
      <GlassHeader 
        $colorScheme={'dark'} 
        $showSideBar={false} 
        passSidebarClick={() => console.log('no sidebar')}
      />
      <MainWrapper>
        <HelloSection>
          <Hello />
        </HelloSection>
      </MainWrapper>
    </>
  )
}

export default Home;