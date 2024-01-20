import React, { useState } from 'react';
import styled from 'styled-components';

const EXP = 'expanded';
const COL = 'collapsed';

const navHeight = '2.75rem';

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
  width: 210px;
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
  top: var(--nav-height);
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
    font-weight: ${(props) => (props.selected ? '500' : '300')};
    color: ${(props) => {
      if (props.$mode === EXP) {
        return `var(--midnight)`;
      } else {
        if (props.selected) {
          return `var(--asphalt)`;
        } else {
          return `var(--concrete)`;
        }
      }
    }};

    @media (max-width: 1023px) {
      padding: ${(props) => (props.$mode === EXP ? '8.5px 0 8.5px 17px' : '0')};
    }

    &:hover {
      background-color: ${(props) => (props.$mode === EXP ? `var(--dust)` : 'inherit')};
      // color: ${(props) => (props.$mode === COL ? 'red' : 'inherit')};
      text-decoration: ${(props) => (props.$mode === COL ? 'underline' : 'none')};
    }
    
    &::before {
      content: url("data:image/svg+xml,%3Csvg data-v-b5c5049e='' data-v-1ab7c05f='' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='svg-icon inline-chevron-right-icon icon-inline chevron' viewBox='0 0 14 14' data-v-8029502c=''%3E%3Cpath data-v-b5c5049e='' d='m4.81347656 13.1269531c.22558594 0 .41015625-.0820312.56738282-.2324219l5.31835942-5.19531245c.1845703-.19140625.2802734-.38964844.2802734-.63574219 0-.23925781-.0888672-.45117187-.2802734-.62890625l-5.31835942-5.20214843c-.15722657-.15039063-.34179688-.23242188-.56738282-.23242188-.45800781 0-.81347656.35546875-.81347656.80664062 0 .21875.09570312.43066407.24609375.58789063l4.79199219 4.67578125-4.79199219 4.6621094c-.15722656.1640625-.24609375.3623047-.24609375.5878906 0 .4511719.35546875.8066406.81347656.8066406z'%3E%3C/path%3E%3C/svg%3E");
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 5px;
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }

  &[open] summary {
    &::before {
      vertical-align: middle;
      transform: rotate(90deg);
      margin-left: 2.5px;
      margin-right: 2.5px;
    }
  }
`;

const CasePreview = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 7px 0 7px 0;
  cursor: pointer;
  background-color: ${(props) => (props.$mode === EXP && props.selected ? `var(--snow)` : 'inherit')};

  @media (max-width: 1023px) {
    padding: ${(props) => (props.$mode === EXP ? '8px 40px 8px 10px' : '7px 0 7px 0')};
  }

  &:hover {
    background-color: ${(props) => (props.$mode === EXP ? `var(--dust)` : 'inherit')};
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
    font-weight: ${(props) => (props.selected ? '500' : '300')};
    color: ${(props) => {
      if (props.$mode === EXP) {
        return `var(--midnight)`;
      } else {
        if (props.selected) {
          return `var(--asphalt)`;
        } else {
          return `var(--concrete)`;
        }
      }
    }};
  }

  p:hover {
    // color: ${(props) => (props.$mode === COL ? 'red' : 'inherit')};
    font-weight: ${(props) => (props.selected ? '500' : '300')};
    text-decoration: ${(props) => (props.$mode === COL ? 'underline' : 'none')};
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
          <CaseTopic $mode={$mode} id="design-cases" selected={selectedParent === 0}>
            <summary>Design</summary>
            <CasePreview $mode={$mode} selected={selectedItem === 0} onClick={() => handleItemClick(0)}>
              <img
                src={selectedItem === 0 ? "/src/assets/project-icons/book-active.png" : "/src/assets/project-icons/book-inactive.png"}
                alt="Book Icon"
              />
              <p>Bookify</p>
            </CasePreview>
            <CasePreview $mode={$mode} selected={selectedItem === 1} onClick={() => handleItemClick(1)}>
              <img
                src={selectedItem === 1 ? "/src/assets/project-icons/pomodoro-active.png" : "/src/assets/project-icons/pomodoro-inactive.png"}
                alt="Tomato Pomodoro Icon"
              />
              <p>Pomodoro Timer</p>
            </CasePreview>
            <CasePreview $mode={$mode} selected={selectedItem === 2} onClick={() => handleItemClick(2)}>
              <img
                src={selectedItem === 2 ? "/src/assets/project-icons/mountain-active.png" : "/src/assets/project-icons/mountain-inactive.png"}
                alt="Mountain Icon"
              />
              <p>National Park App</p>
            </CasePreview>
          </CaseTopic>
          <CaseTopic $mode={$mode} id="engineering-cases" selected={selectedParent === 1}>
            <summary>Engineering</summary>
          </CaseTopic>
        </ScrollableAside>
      </SidebarAside>
    </SidebarWrapper>
    </>
  )
}
  
export default Sidebar;