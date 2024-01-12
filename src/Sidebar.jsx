import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const navHeight = '2.75rem';
const lightGrey = 'rgb(110, 110, 115)';

const SidebarWrapper = styled.div`
  display: ${(props) => (props.$sidebarOpen ? 'flex' : 'block')};;
  position: ${(props) => (props.$sidebarOpen ? 'relative' : 'static')};
  width: ${(props) => (props.$sidebarOpen ? '100%' : 'auto')};
  height: ${(props) => (props.$sidebarOpen ? 'auto' : '0')}
  background-color: forestgreen;
`;

const SidebarAside = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  height: 100%;
  width: 200px;
  max-width: 100vw;

  display: ${(props) => (props.$sidebarOpen ? 'flex' : 'none')};
  width: ${(props) => (props.$sidebarOpen ? '100%' : 'auto')};
  margin-right: ${(props) => (props.$sidebarOpen ? '5px solid' : 'none')};
`;

const ScrollableAside = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: ${navHeight};
  background-color: skyblue;
  width: 195px;
  transform: translateZ(0);
  margin-top: 10px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CaseTopic = styled.details`
  width: 100%
  font-size: 14px;
  color: ${lightGrey};
  font-weight: 400;
  padding: ${(props) => (props.$mode === 'open' ? '0 !important' : '5px 0 5px 0')};
  margin: ${(props) => (props.$mode === 'open' ? '0' : 'auto')};

  summary {
    cursor: pointer;
    margin: ${(props) => (props.$mode === 'open' ? '0' : 'auto')};
    padding: ${(props) => (props.$mode === 'open' ? '7px 0 7px 20px' : '0')};
    background-color: ${(props) => (props.$mode === 'open' ? 'blue' : 'inherit')};
    
    &::before {
      content: '＋ ';
      color: ${lightGrey};
      font-size: 14px;
      font-weight: 500;
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }

  &[open] summary {
    margin-bottom: 7px;

    &::before {
      content: '－ ';
      font-weight: 600;
    }
  }
`;

const CaseContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: ${(props) => (props.$mode === 'open' ? '8px 40px 8px 20px' : '7px 0 7px 0')};
`;

function Sidebar() {

  const [mode, setMode] = useState(window.innerWidth > 1023 ? 'open' : 'closed');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1023);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMode('open');
        setSidebarOpen(true);
      } else {
        setMode('closed');
        setSidebarOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <>
    <SidebarWrapper id="sidebar" $sidebarOpen={sidebarOpen}>
       <SidebarAside id="sidebar-aside" $sidebarOpen={sidebarOpen}>
        {/* <ScrollableAside $mode={mode} id="scrollable-aside">
          <CaseTopic $mode={mode} id="design-cases">
            <summary>Design</summary>
            <CaseContent $mode={mode} id="case-content">
              <img src="./src/assets/project-icons/book-inactive.png"></img>
              <p>Bookify App</p>
            </CaseContent>
          </CaseTopic>
          <CaseTopic $mode={mode} id="engineering-cases"></CaseTopic>
        </ScrollableAside> */}
      </SidebarAside>
    </SidebarWrapper>
     
    </>
  )
}
  
export default Sidebar;