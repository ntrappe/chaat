import React from 'react';
import styled from 'styled-components';

const HID = 'hidden';
const lighterGrey = '#d3d3d8';
const lightGrey = '#86868b';
const darkGrey = '#333437';

const FloatingAsideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 4.23rem;
  align-self: flex-start;
  width: 100px;
  padding-left: 32px;
  margin-top: 60px; /* match this with case study text */

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === HID ? 'none' : 'flex')};
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const AsideSections = styled.ul`
  li {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -.01em;
    margin: 0;
    /* top right bottom left */
    padding: 3px 0 3px 10px;
    border-left: 1.2px solid ${lighterGrey};
    color: ${lightGrey};
  }

  li:first-child {
    border-color: rgb(110,110,115);
  }
`;

function FloatingAside({ $mode }) {
  
  return (
    <>
      <FloatingAsideWrapper $mode={$mode} id="floating-aside">
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