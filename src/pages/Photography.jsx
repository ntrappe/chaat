import React, { useState } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import PhotoGrid from '../components/Core/PhotoGrid.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  align-self: center;
  /* top | right | bottom | left */
  margin: 0 auto 5em auto;

  @media (max-width: 1023px) {
    width: 692px;
  }

  @media (max-width: 767px) {
    width: 87.5%;
`;

function Photography() {
  const body = document.getElementById('body');
  body.setAttribute('page', 'photography');

  /* need to know if nav is open to freeze content below it */
  const [navOpen, setNavOpen] = useState(null);

  const verifyNavOpen = (signal) => {
    setNavOpen(signal ? 'open' : 'closed');
  }

  return (
    <>
      <GlassHeader 
        $colorScheme={'light'} 
        $showSideBar={false} 
        passSidebarClick={() => console.log('no sidebar')}
        passNavClick={verifyNavOpen}
      />
      <MainWrapper id="main">
        <PhotoGrid $navOpen={navOpen} />
      </MainWrapper>
      {/* Only show footer if sidebar isn't open */}
      {(navOpen !== 'open') && (
        <ThickFooter $colorScheme={'light'} />
      )}
    </>
  )
}

export default Photography;