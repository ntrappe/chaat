import React, { useEffect } from 'react';
import styled from 'styled-components';

const EXP = 'expanded';
const COL = 'collapsed';
const HID = 'hidden';

const navHeight = '2.75rem';
const lightGrey = 'rgb(110, 110, 115)';

const SidebarWrapper = styled.div`
  display: block;
  position: relative;
  background-color: forestgreen;

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
  background-color: darkblue;

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
  background-color: skyblue;
  width: 195px;
  transform: translateZ(0);
  margin-top: 10px;
  background-color: skyblue;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CaseTopic = styled.details`
  width: 100%
  font-size: 14px;
  color: ${lightGrey};
  font-weight: 400;
  padding: 5px 0 5px 0;
  margin: 0 !important;

  @media (max-width: 1023px) {
    padding: ${(props) => (props.$mode === EXP ? '0 !important' : '5px 0 5px 0')};
  }
  
  summary {
    cursor: pointer;
    list-style-type: none;
    margin: 0;

    @media (max-width: 1023px) {
      padding: ${(props) => (props.$mode === EXP ? '7px 0 7px 0' : '0')};
    }

    &:hover {
      background-color: ${(props) => (props.$mode === EXP ? 'blueviolet' : 'inherit')};
    }
    
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
  padding: 7px 0 7px 0;

  @media (max-width: 1023px) {
    padding: ${(props) => (props.$mode === EXP ? '8px 40px 8px 20px' : '7px 0 7px 0')};
  }

  &:hover {
    background-color: ${(props) => (props.$mode === EXP ? 'blueviolet' : 'inherit')};
  }

  img {
    display: block;
    width: 17px;  
    height: 17px;
    margin-right: 7px;
    margin-left: 29px;
  }

  p {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    line-height: 1.28;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -.224px;
  }
`;

function Sidebar({ $mode }) {

  return (
    <>
    <SidebarWrapper id="sidebar" $mode={$mode}>
       <SidebarAside id="sidebar-aside" $mode={$mode}>
        <ScrollableAside $mode={$mode} id="scrollable-aside">
          <CaseTopic $mode={$mode} id="design-cases">
            <summary>Design</summary>
            <CaseContent $mode={$mode} id="case-content">
              <img src="/src/assets/project-icons/book-inactive.png"></img>
              <p>Book App</p>
            </CaseContent>
            <CaseContent $mode={$mode} id="case-content">
              <img src="/src/assets/project-icons/pomodoro-inactive.png"></img>
              <p>Pomodoro App</p>
            </CaseContent>
            <CaseContent $mode={$mode} id="case-content">
              <img src="/src/assets/project-icons/mountain-inactive.png"></img>
              <p>National Park App</p>
            </CaseContent>
          </CaseTopic>
          <CaseTopic $mode={$mode} id="engineering-cases">
            <summary>Engineering</summary>
          </CaseTopic>
        </ScrollableAside>
      </SidebarAside>
    </SidebarWrapper>
     
    </>
  )
}
  
export default Sidebar;