import React, { useState } from 'react';
import styled from 'styled-components';

const EXP = 'expanded';
const COL = 'collapsed';

const navHeight = '2.75rem';
const backgroundBlue = '#d4edf9';
const highlightBlue = '#0066cc';
const stone = '#e8e8ed';
const concrete = '#6e6e73';
const asphalt = '#1d1d1f';

const SidebarWrapper = styled.div`
  display: block;
  position: relative;
  top: 0.5rem;

  @media (max-width: 1023px) {
    width: ${(props) => (props.$mode === EXP ? '100%' : 'auto')};
    height: ${(props) => (props.$mode === EXP ? 'auto' : '0')}
    display: ${(props) => (props.$mode === EXP ? 'flex' : 'block')};
    position: ${(props) => (props.$mode === EXP ? 'relative' : 'static')};
  }
`;

const SidebarAside = styled.div`
  position: relative;
  height: 100%;
  width: 200px;
  max-width: 100vw;

  @media (max-width: 1023px) {
    display: ${(props) => (props.$mode === EXP ? 'flex' : 'none')};
    flex-flow: ${(props) => (props.$mode === EXP ? 'column' : 'unset')};
    width: ${(props) => (props.$mode === EXP ? '100%' : 'auto')};
    margin-right: ${(props) => (props.$mode === EXP ? '5px solid' : 'none')};
  }
`;

const ScrollableAside = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: ${navHeight};
  width: 195px;
  transform: translateZ(0);
  margin-top: 10px;
  padding-top: ${(props) => (props.$mode === COL ? '21px' : '0')};

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CaseTopic = styled.details`
  width: 100%
  padding: 5px 0 5px 0;
  margin-bottom: ${(props) => (props.$mode === EXP ? '4px' : '0')};

  @media (max-width: 1023px) {
    padding: ${(props) => (props.$mode === EXP ? '0 !important' : '5px 0 5px 0')};
  }
  
  summary {
    cursor: pointer;
    list-style-type: none;
    margin: 0;
    padding: ${(props) => (props.$mode === COL ? '7px 0' : 'inherit')};
    font-size: 14px;
    font-weight: ${(props) => (props.$active ? '500' : '300')};
    color: ${(props) => {
      if (props.$mode === EXP) {
        return asphalt;
      } else {
        if (props.$active) {
          return asphalt;
        } else {
          return concrete;
        }
      }
    }};

    @media (max-width: 1023px) {
      padding: ${(props) => (props.$mode === EXP ? '6px 0 6px 17px' : '0')};
    }

    &:hover {
      background-color: ${(props) => (props.$mode === EXP ? backgroundBlue : 'inherit')};
      color: ${(props) => (props.$mode === COL ? highlightBlue : 'inherit')};
    }
    
    &::before {
      content: '＋ ';
      color: ${concrete};
      font-size: 14px;
      font-weight: 500;
      margin-right: 2.5px;
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }

  &[open] summary {
    &::before {
      content: '－ ';
      color: ${concrete};
      font-weight: 600;
      margin-right: 2px;
    }
  }
`;

const CaseContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 7px 0 7px 0;
  cursor: pointer;
  background-color: ${(props) => (props.$mode === EXP && props.$active ? stone : 'inherit')};

  @media (max-width: 1023px) {
    padding: ${(props) => (props.$mode === EXP ? '8px 40px 8px 10px' : '7px 0 7px 0')};
  }

  &:hover {
    background-color: ${(props) => (props.$mode === EXP ? backgroundBlue : 'inherit')};
  }

  img {
    display: block;
    width: 17px;  
    height: 17px;
    margin-right: 9px;
    margin-left: 29px;
  }

  p {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    line-height: 1.28;
    font-size: 14px;
    letter-spacing: -.224px;
    font-weight: ${(props) => (props.$active ? '500' : '300')};
    color: ${(props) => {
      if (props.$mode === EXP) {
        return asphalt;
      } else {
        if (props.$active) {
          return asphalt;
        } else {
          return concrete;
        }
      }
    }};
  }

  p:hover {
    color: ${(props) => (props.$mode === COL ? highlightBlue : 'inherit')};
    font-weight: ${(props) => (props.$active ? '500' : '300')};
  }
`;

function Sidebar({ $mode }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedParent, setSelectedParent] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    if (index < 3) {
      setSelectedParent(0);
    }
  }

  return (
    <>
    <SidebarWrapper id="sidebar" $mode={$mode}>
       <SidebarAside id="sidebar-aside" $mode={$mode}>
        <ScrollableAside $mode={$mode} id="scrollable-aside">
          <CaseTopic $mode={$mode} id="design-cases" $active={selectedParent === 0}>
            <summary>Design</summary>
            <CaseContent $mode={$mode} $active={selectedItem === 0} onClick={() => handleItemClick(0)}>
              <img
                src={selectedItem === 0 ? "/src/assets/project-icons/book-active.png" : "/src/assets/project-icons/book-inactive.png"}
                alt="Book Icon"
              />
              <p>Bookify</p>
            </CaseContent>
            <CaseContent $mode={$mode} $active={selectedItem === 1} onClick={() => handleItemClick(1)}>
              <img
                src={selectedItem === 1 ? "/src/assets/project-icons/pomodoro-active.png" : "/src/assets/project-icons/pomodoro-inactive.png"}
                alt="Tomato Pomodoro Icon"
              />
              <p>Pomodoro Timer</p>
            </CaseContent>
            <CaseContent $mode={$mode} $active={selectedItem === 2} onClick={() => handleItemClick(2)}>
              <img
                src={selectedItem === 2 ? "/src/assets/project-icons/mountain-active.png" : "/src/assets/project-icons/mountain-inactive.png"}
                alt="Mountain Icon"
              />
              <p>National Park App</p>
            </CaseContent>
          </CaseTopic>
          <CaseTopic $mode={$mode} id="engineering-cases" $active={selectedParent === 1}>
            <summary>Engineering</summary>
          </CaseTopic>
        </ScrollableAside>
      </SidebarAside>
    </SidebarWrapper>
     
    </>
  )
}
  
export default Sidebar;