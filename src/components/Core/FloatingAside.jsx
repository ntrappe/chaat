import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SectionTitles = ['Overview', 'Problem', 'Background', 'Research', 'Approach', 'Design', 'Final Result', 'Insights'];

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
  const [selectedItem, setSelectedItem] = useState(SectionTitles[0]);

  const handleItemClick = (index) => {
    switch (index) {
      case 0:
        window.dispatchEvent(new Event('overview click'));
        setSelectedItem(SectionTitles[0]);
        break;
      case 1:
        window.dispatchEvent(new Event('problem click'));
        setSelectedItem(SectionTitles[1]);
        break;
      case 2:
        window.dispatchEvent(new Event('background click'));
        setSelectedItem(SectionTitles[2]);
        break;
      case 3:
        window.dispatchEvent(new Event('research click'));
        setSelectedItem(SectionTitles[3]);
        break;
      case 4:
        window.dispatchEvent(new Event('approach click'));
        setSelectedItem(SectionTitles[4]);
        break;
      case 5:
        window.dispatchEvent(new Event('design click'));
        setSelectedItem(SectionTitles[5]);
        break;
      case 6:
        window.dispatchEvent(new Event('final click'));
        setSelectedItem(SectionTitles[6]);
        break;
      default:
    }
  }

  useEffect(() => {
    const setOverview = () => { setSelectedItem(SectionTitles[0]) };
    const setProblem = () => { setSelectedItem(SectionTitles[1]) };
    const setBackground = () => { setSelectedItem(SectionTitles[2]) };
    const setResearch = () => { setSelectedItem(SectionTitles[3]) };
    const setApproach = () => { setSelectedItem(SectionTitles[4]) };
    const setDesign = () => { setSelectedItem(SectionTitles[5]) };
    const setFinal = () => { setSelectedItem(SectionTitles[6]) };
    window.addEventListener('overview scroll', setOverview);
    window.addEventListener('problem scroll', setProblem);
    window.addEventListener('background scroll', setBackground);
    window.addEventListener('research scroll', setResearch);
    window.addEventListener('approach scroll', setApproach);
    window.addEventListener('design scroll', setDesign);
    window.addEventListener('final scroll', setFinal);

    return () => {
      window.removeEventListener('overview scroll', setOverview);
      window.removeEventListener('problem scroll', setProblem);
      window.removeEventListener('background scroll', setBackground);
      window.removeEventListener('research scroll', setResearch);
      window.removeEventListener('approach scroll', setApproach);
      window.removeEventListener('design scroll', setDesign);
      window.removeEventListener('final scroll', setFinal);
    }
  }, [selectedItem]);
  
  return (
    <FloatingAsideWrapper $mode={$mode} id="floating-aside">
      <AsideSections id="aside-sections" selected>
        <AsideItem 
          selected={selectedItem === SectionTitles[0]}
          onClick={() => handleItemClick(0)}
        >{SectionTitles[0]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[1]}
          onClick={() => handleItemClick(1)}
        >{SectionTitles[1]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[2]}
          onClick={() => handleItemClick(2)}
        >{SectionTitles[2]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[3]}
          onClick={() => handleItemClick(3)}
        >{SectionTitles[3]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[4]}
          onClick={() => handleItemClick(4)}
        >{SectionTitles[4]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[5]}
          onClick={() => handleItemClick(5)}
        >{SectionTitles[5]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[6]}
          onClick={() => handleItemClick(6)}
        >{SectionTitles[6]}</AsideItem>
        <AsideItem 
          selected={selectedItem === SectionTitles[7]}
          onClick={() => handleItemClick(7)}
        >{SectionTitles[7]}</AsideItem>
      </AsideSections>
    </FloatingAsideWrapper>
  )
}
  
export default FloatingAside;