import React from 'react';
import styled from 'styled-components';

const HID = 'hidden';

const FloatingAsideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 4.23rem;
  align-self: flex-start;
  width: 140px;
  padding-left: 32px;
  margin-top: 120px;

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
    padding-left: 10px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
    border-left: 1px solid rgb(210,210,215);
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