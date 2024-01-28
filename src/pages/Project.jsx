import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlassHeader from '../components/GlassHeader/GlassHeader.jsx';
import FloatingAside from '../components/Core/FloatingAside.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import ThickFooter from '../components/Footer/ThickFooter.jsx';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3em;
  border: 1px solid black !important;
  border-color: ${(props) => {
    if (props.$projectState === States.EXPANDED) {
      return 'blue';
    } else if (props.$projectState === States.NARROW) {
      return 'red';
    } else {
      return 'green';
    }
  }};
  
  @media (max-width: 1023px) {
    // can only be expanded or hidden, sidebar open be 100% width
    width: ${(props) => props.$projectState === States.EXPANDED ? '692px' : '100%' };
    position: ${(props) => (props.$projectState === States.HIDDEN ? 'fixed' : 'relative')};
    top: ${(props) => (props.$projectState === States.HIDDEN ? '1rem' : '0')};
    overflow: ${(props) => (props.$projectState === States.HIDDEN ? 'hidden' : 'none')};
  }

  @media (max-width: 767px) {
    width: ${(props) => (props.$projectState === States.HIDDEN ? '100%' : '87.5%')};
  }
`;

const AdjustableSidebar = styled.div`
  display: flex;
  min-width: 0;
  flex: 1;
  background-color: teal;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$projectState === States.EXPANDED ? 'flex' : 'block')};
    position: ${(props) => (props.$projectState === States.HIDDEN ? 'fixed' : 'relative')};
    width: ${(props) => (props.$projectState === States.HIDDEN ? '100%' : 'auto')};
  }
`;

function Project({ customComponent: CaseStudy }) {
  const body = document.getElementById('body');
  body.setAttribute('page', 'projects');

  const [sidebarState, setSidebarState] = useState(window.innerWidth > 1023 ? States.NARROW : States.HIDDEN);
  const [projectState, setProjectState] = useState(window.innerWidth > 1023 ? States.NARROW : States.EXPANDED);
 
  // width > 1023 so sidebar can only be NAR or same
  const handleResize = () => {
    const width = window.innerWidth;

    if (window > 1023) {
      setSidebarState(States.NARROW);
      setProjectState(States.NARROW);
    } else if (width <= 1023 && sidebarState === States.HIDDEN) {
      setProjectState(States.EXPANDED);
    }
  };

  // [width <= 1023 only] sidebar can only be EXP or HID
  // [width <= 1023 only] project can only be shown or not
  const handleSidebarToggle = () => {
    setSidebarState((prevState) => (prevState === States.HIDDEN ? States.EXPANDED : States.HIDDEN));
    setProjectState((prevState) => (prevState === States.EXPANDED ? States.HIDDEN : States.EXPANDED));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log('Updated sidebar state:', sidebarState);
    console.log('Updated project state:', projectState);
  }, [sidebarState, projectState]);

  return (
    <>
      <GlassHeader 
        $colorScheme={'light'} 
        $showSideBar={true} 
        passSidebarClick={handleSidebarToggle}
        passNavClick={() => console.log('oops')}
      />
      <MainWrapper id="main" $projectState={projectState}>
        <AdjustableSidebar id="adjustable-sidebar" $projectState={projectState}>
          {sidebarState !== States.HIDDEN && (
            <Sidebar $mode={sidebarState} />
          )}
          {projectState !== States.HIDDEN && CaseStudy && (
            <CaseStudy />
          )}  
        </AdjustableSidebar>
        {sidebarState !== States.HIDDEN && (
          <FloatingAside $mode={projectState} offsetCaseStudy={() => console.log('heh')} />
        )}
      </MainWrapper>
      {sidebarState !== States.HIDDEN && (
        <ThickFooter $colorScheme={'light'} />
      )}
    </>
  )
}

export default Project;