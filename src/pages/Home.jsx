import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader';
import Hello from '../components/Home/Hello';
import ThickFooter from '../components/Footer/ThickFooter';

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

  /* need to know if nav is open to freeze content below it */
  const [navOpen, setNavOpen] = useState(null);

  const verifyNavOpen = (signal) => {
    setNavOpen(signal ? 'open' : 'closed');
  }

  return (
    <>
      <GlassHeader 
        $colorScheme={'dark'} 
        $showSideBar={false} 
        passSidebarClick={() => console.log('no sidebar')}
        passNavClick={verifyNavOpen}
      />
      <MainWrapper>
        <HelloSection>
          <Hello />
        </HelloSection>
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(navOpen !== 'open') && (
        <ThickFooter $colorScheme={'dark'} />
      )}
    </>
  )
}

export default Home;