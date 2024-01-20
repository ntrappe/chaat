import React, { useState } from 'react';
import styled from 'styled-components';

const HID = 'hidden';
const OVERVIEW = 0;
const PROBLEM = 1;
const RESEARCH = 2;

const FloatingAsideWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 4.23rem;
  align-self: flex-start;
  width: 90px;
  padding-left: 38px;
  margin-top: 130px; /* match this with case study text */

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === HID ? 'none' : 'flex')};
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const AsideSections = styled.ul`
  width: 100%;
`;

const AsideItem = styled.li`
  font-size: 12.5px;
  line-height: 1.33;
  letter-spacing: -.01em;
  margin: 0;
  cursor: pointer;
  padding: 3px 0 3px 10px;
  border-left: 1.5px solid;
  color: ${(props) => (props.selected? `var(--asphalt)` : `var(--concrete)`)};
  font-weight: ${(props) => (props.selected ? '400' : '300')};
  border-color: ${(props) => (props.selected ? `var(--asphalt)` : `var(--cloud)`)};

  &:hover {
    text-decoration: underline;
  }
`;

function FloatingAside({ $mode, offsetCaseStudy }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    console.log('selectedItem is ' + selectedItem);
    setSelectedItem(index);
    offsetCaseStudy(index);
  }
  
  return (
    <FloatingAsideWrapper $mode={$mode} id="floating-aside">
      <AsideSections id="aside-sections" selected>
        <AsideItem 
          selected={selectedItem === 0}
          onClick={() => handleItemClick(0)}
        >Overview</AsideItem>
        <AsideItem 
          selected={selectedItem === 1}
          onClick={() => handleItemClick(1)}
        >Problem</AsideItem>
        <AsideItem 
          selected={selectedItem === 2}
          onClick={() => handleItemClick(2)}
        >Research</AsideItem>
      </AsideSections>
    </FloatingAsideWrapper>
  )
}
  
export default FloatingAside;