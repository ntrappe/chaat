import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* -------------- Start Constants -------------- */
const SectionTitles = [
  'overview', 
  'problem', 
  'background', 
  'research', 
  'approach', 
  'design',
  'final',
  'insights',
];

const SectionClicks = SectionTitles.map((title) => `${title}-click`);
const SectionScrolls = SectionTitles.map((title) => `${title}-scroll`);
/* -------------- End Constants -------------- */

const FloatingAsideWrapper = styled.div`
  display: block;
  position: sticky;
  position: -webkit-sticky;
  top: 4.23rem;
  align-self: flex-start;
  width: var(--aside-width);
  padding-left: 38px;
  margin-top: 130px; /* match this with case study text */
  
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
  color: ${(props) => (props.selected? `var(--wet-concrete)` : `var(--concrete)`)};
  font-weight: ${(props) => (props.selected ? '400' : '300')};
  border-color: ${(props) => (props.selected ? `var(--wet-concrete)` : `var(--cloud)`)};

  &:hover {
    text-decoration: underline;
  }
`;

function FloatingAside({ $mode }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    if ((index >= 0) && (index < SectionTitles.length)) {
      setSelectedItem(index);
      window.dispatchEvent(new Event(SectionClicks[index]));
    } else {
      console.error('Received invalid index reference (no section) @FloatingAside');
    }
  }
  
  useEffect(() => {
    // console.log('selectedItem -- ', selectedItem);
  }, [selectedItem])

  useEffect(() => {
    for (let i = 0; i < SectionScrolls.length; i++) {
      window.addEventListener(SectionScrolls[i], () => setSelectedItem(i));
    }

    return () => {
      for (let i = 0; i < SectionScrolls.length; i++) {
        window.removeEventListener(SectionScrolls[i], () => setSelectedItem(i));
      }
    }
  }, [selectedItem]);
  
  return (
    <FloatingAsideWrapper $mode={$mode} id="floating-aside">
      <AsideSections id="aside-sections">
        <AsideItem 
          selected={selectedItem === 0}
          onClick={() => handleItemClick(0)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[0]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 1}
          onClick={() => handleItemClick(1)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[1]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 2}
          onClick={() => handleItemClick(2)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[2]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 3}
          onClick={() => handleItemClick(3)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[3]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 4}
          onClick={() => handleItemClick(4)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[4]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 5}
          onClick={() => handleItemClick(5)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[5]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 6}
          onClick={() => handleItemClick(6)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[6]}
        </AsideItem>
        <AsideItem 
          selected={selectedItem === 7}
          onClick={() => handleItemClick(7)}
          style={{ textTransform: 'capitalize' }}
        >
          {SectionTitles[7]}
        </AsideItem>
      </AsideSections>
    </FloatingAsideWrapper>
  )
}
  
export default FloatingAside;