import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FloatingAsideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 4.23rem;
  align-self: flex-start;
  width: 140px;
  padding-left: 32px;
  margin-top: 120px;
  display: ${(props) => (props.$mode === 'sidebar' ? 'none' : 'flex')};
`;

const AsideSections = styled.ul`
  li {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -.01em;
    margin: 0;
    padding-left: 10px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    border-left: 1px solid rgb(210,210,215);
  }
`;

function FloatingAside() {

  const [mode, setMode] = useState(window.innerWidth > 1023 ? 'all' : 'closed');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setMode('all');
      } else {
        setMode('sidebar');
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
      <FloatingAsideWrapper $mode={mode} id="floating-aside">
        <AsideSections id="aside-sections">
          <li>Overview</li>
          <li>Problem</li>
          <li>Research</li>
        </AsideSections>
      </FloatingAsideWrapper>
    </>
  )
}
  
export default FloatingAside;