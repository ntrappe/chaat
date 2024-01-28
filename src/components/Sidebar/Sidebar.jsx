import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookActive from '../../assets/project-icons/book-active.png';
import BookInactive from '../../assets/project-icons/book-inactive.png';
import PomoActive from '../../assets/project-icons/pomodoro-active.png';
import PomoInactive from '../../assets/project-icons/pomodoro-inactive.png';
import MountainActive from '../../assets/project-icons/mountain-active.png';
import MountainInactive from '../../assets/project-icons/mountain-inactive.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const SidebarWrapper = styled.div`
  display: block;
  position: relative;
  top: 0;
  margin-top: ${(props) => (props.$sidebarState === States.NARROW ? '0.5rem' : '0')};
  background-color: ${(props) => {
    if (props.$sidebarState === States.NARROW) {
      return 'plum';
    } else if (props.$sidebarState === States.EXPANDED) {
      return 'orangered';
    } else {
      return 'darkgrey';
    }
  }};
  transition: none;

  @media (max-width: 1023px) {
    position: fixed;
    top: var(--nav-height);
    min-width: 0;
    width: 100% !important;
    max-width: 100%;
    height: calc(var(--app-height) - var(--nav-height));
    border: 2px solid red;
    z-index: 9999;
    left: 0;
    transition: ${(props) => (props.$sidebarState === States.NARROW ? 'none' : 'transform .25s ease-in')};
    transform: ${(props) => (props.$sidebarState === States.EXPANDED ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

const SidebarAside = styled.div`
  position: relative;
  height: 100%;
  width: 200px;

  background-color: ${(props) => {
    if (props.$sidebarState === States.NARROW) {
      return 'purple';
    } else if (props.$sidebarState === States.EXPANDED) {
      return 'orange';
    } else {
      return 'grey';
    }
  }};

  @media (max-width: 1023px) {
    display: ${(props) => (props.$sidebarState === States.EXPANDED ? 'flex' : 'none')};
    position: ${(props) => (props.$sidebarState === States.EXPANDED ? 'static' : 'unset')};
    flex-flow: column;
    width: 100% !important;
  }
`;

const ScrollableAside = styled.nav`
  // position: ${(props) => (props.$sidebarState === States.NARROW ? 'sticky' : 'unset')};
  // position: ${(props) => (props.$sidebarState === States.NARROW ? '-webkit-sticky' : 'unset')};
  position: sticky;
  position: -webkit-sticky;
  top: var(--nav-height);
  width: 195px;
  margin-top: 10px;
  padding-top: ${(props) => (props.$sidebarState === States.NARROW ? '21px' : '0')};

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const CaseTopic = styled.details`
  width: 100%
  padding: 5px 0 5px 0;
  margin-bottom: ${(props) => (props.$sidebarState === States.EXPANDED ? '4px' : '0')};

  @media (max-width: 1023px) {
    padding: ${(props) => (props.$sidebarState === States.EXPANDED ? '0 !important' : '5px 0 5px 0')};
  }
  
  summary {
    cursor: pointer;
    list-style-type: none;
    margin: 0;
    padding: ${(props) => (props.$sidebarState === States.NARROW ? '7px 0' : 'inherit')};
    font-size: 14px;
    font-weight: ${(props) => (props.selected ? '500' : '300')};
    color: ${(props) => {
      if (props.$sidebarState === States.EXPANDED) {
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
      padding: 8.5px 0 8.5px 17px;
    }

    &:hover {
      background-color: ${(props) => (props.$sidebarState === States.EXPANDED ? `var(--dust)` : 'inherit')};
      // color: ${(props) => (props.$sidebarState === States.NARROW ? 'red' : 'inherit')};
      text-decoration: ${(props) => (props.$sidebarState === States.NARROW ? 'underline' : 'none')};
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
  background-color: ${(props) => (props.$sidebarState === States.EXPANDED && props.selected ? `var(--snow)` : 'inherit')};
  background-color: ${(props) => (props.selected ? 'orange' : 'azure')};

  @media (max-width: 1023px) {
    padding: 8px 40px 8px 10px;
  }

  &:hover {
    background-color: ${(props) => (props.$sidebarState === States.EXPANDED ? `var(--dust)` : 'inherit')};
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
      if (props.$sidebarState === States.EXPANDED) {
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

  a {
    color: inherit;
  }

  p:hover {
    // color: ${(props) => (props.$sidebarState === States.NARROW ? 'red' : 'inherit')};
    font-weight: ${(props) => (props.selected ? '500' : '300')};
    text-decoration: ${(props) => (props.$sidebarState === States.NARROW ? 'underline' : 'none')};
  }

  a:hover {
    color: inherit;
    text-decoration: inherit;
  }
`;

function Sidebar({ $sidebarState, closeSidebar }) {
  const [selectedItem, setSelectedItem] = useState(localStorage.getItem('case-study'));
  const [selectedParent, setSelectedParent] = useState(localStorage.getItem('case-study-category'));

  const handleItemClick = (index) => {
    localStorage.setItem('case-study', index);
    localStorage.setItem('case-study-category', index);
    setSelectedItem(index);
    if (index < 3) {
      setSelectedParent(0);
    }
    closeSidebar('close sidebar');
  }

  const handleResize = () => {
    const newHeight = window.innerHeight;
    // console.log('new height: ' + newHeight);
    document.documentElement.style.setProperty('--app-height', `${newHeight}px`);
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.transition = $sidebarState === States.NARROW ? 'none' : 'transform .25s ease-in';
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <>
    <SidebarWrapper id="sidebar" $sidebarState={$sidebarState}>
      {$sidebarState !== States.HIDDEN && (
        <SidebarAside id="sidebar-aside" $sidebarState={$sidebarState}>
          <ScrollableAside $sidebarState={$sidebarState} id="scrollable-aside">
            <CaseTopic $sidebarState={$sidebarState} id="design-cases" selected={selectedParent === 0}>
              <summary>Design</summary>
              <Link to={`/projects/bookify`} onClick={() => handleItemClick(0)}>
                <CasePreview id="bookify" $sidebarState={$sidebarState} selected={selectedItem === 0}>
                <img
                  src={selectedItem === 0 ? BookActive : BookInactive}
                  alt="Book Icon"
                />
                <p>Bookify</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/pomodoro`} onClick={() => handleItemClick(1)}>
                <CasePreview id="pomodoro" $sidebarState={$sidebarState} selected={selectedItem === 1}>
                  <img
                    src={selectedItem === 1 ? PomoActive : PomoInactive}
                    alt="Tomato Pomodoro Icon"
                  />
                  <p>Pomodoro Timer</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/rock`} onClick={() => handleItemClick(2)}>
                <CasePreview $sidebarState={$sidebarState} selected={selectedItem === 2}>
                  <img
                    src={selectedItem === 2 ? MountainActive : MountainInactive}
                    alt="Mountain Icon"
                  />
                  <p>National Park App</p>
                </CasePreview>
              </Link>
            </CaseTopic>
            <CaseTopic $sidebarState={$sidebarState} id="engineering-cases" selected={selectedParent === 1}>
              <summary>Engineering</summary>
            </CaseTopic>
          </ScrollableAside>
        </SidebarAside>
      )}
    </SidebarWrapper>
    </>
  )
}
  
export default Sidebar;