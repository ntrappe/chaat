import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CaseStudyWrapper = styled.div`
  background-color: burlywood;
  display: ${(props) => (props.$mode === 'sidebar' ? 'none' : 'flex')};
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
`;

function CaseStudy() {

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
      <CaseStudyWrapper $mode={mode}>
        <h1>Human Interface Guidelines</h1>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
        <h3>The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.</h3>
      </CaseStudyWrapper>
    </>
  )
}
  
export default CaseStudy;