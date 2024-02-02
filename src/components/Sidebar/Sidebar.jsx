import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookActive from '../../assets/project-icons/book-active.png';
import BookInactive from '../../assets/project-icons/book-inactive.png';
import PomoActive from '../../assets/project-icons/pomodoro-active.png';
import PomoInactive from '../../assets/project-icons/pomodoro-inactive.png';
import MountainActive from '../../assets/project-icons/mountain-active.png';
import MountainInactive from '../../assets/project-icons/mountain-inactive.png';
import CalendarActive from '../../assets/project-icons/calendar-active.png';
import CalendarInactive from '../../assets/project-icons/calendar-inactive.png';
import VacuumActive from '../../assets/project-icons/vacuum-active.png';
import VacuumInactive from '../../assets/project-icons/vacuum-inactive.png';
import FlowActive from '../../assets/project-icons/flow-active.png';
import FlowInactive from '../../assets/project-icons/flow-inactive.png';
import MuseumActive from '../../assets/project-icons/bust-active.png';
import MuseumInactive from '../../assets/project-icons/bust-inactive.png';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

const DesignCases = ['museum', 'calendar', 'pomodoro', 'rock', 'vacuum'];
const EngCases = ['bookify', 'flow'];
const Topics = ['design', 'engineering'];

const SidebarWrapper = styled.div`
  display: block;
  position: relative;
  top: 0;
  background-color: white;
  margin-top: ${(props) => (props.$sidebarState === States.NARROW ? '0.5rem' : '0')};
  transition: none;

  @media (max-width: 1023px) {
    position: fixed;
    top: var(--nav-height);
    min-width: 0;
    width: 100% !important;
    max-width: 100%;
    height: calc(var(--app-height) - var(--nav-height));
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

  @media (max-width: 1023px) {
    display: ${(props) => (props.$sidebarState === States.EXPANDED ? 'flex' : 'none')};
    position: ${(props) => (props.$sidebarState === States.EXPANDED ? 'static' : 'unset')};
    flex-flow: column;
    width: 100% !important;
  }
`;

const ScrollableAside = styled.nav`
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
    font-weight: ${(props) => (props.selected ? '500' : '300')};
    text-decoration: ${(props) => (props.$sidebarState === States.NARROW ? 'underline' : 'none')};
  }

  a:hover {
    color: inherit;
    text-decoration: inherit;
  }
`;

function Sidebar({ $sidebarState }) {
  // Indicates which case study is selected
  const [selectedItem, setSelectedItem] = useState(localStorage.getItem('case-study'));
  // Indicates which parent (<summary>) is selected (aka a child is selected)
  const [selectedParent, setSelectedParent] = useState(localStorage.getItem('case-topic'));
  // Indicates if design details should be open
  const [designOpen, setDesignOpen] = useState(selectedParent === Topics[0]);
  // Indicates if engineering details should be open
  const [engOpen, setEngOpen] = useState(selectedParent === Topics[1]);

  /**
   * Function is called when an item (case study) in the sidebar is clicked. It updates selectedItem
   * to be that item and selectedParent with its corresponding <summary>. 
   * 
   * We use local storage for this. When an item is clicked (in sidebar or projects grid), we save 
   * that case study to local storage so that, as we go between projects, we can keep track.
   * 
   * @param {string} index case study
   */
  const handleItemClick = (index) => {
    // set selected case study in local storage and in selectedItem
    window.localStorage.setItem('case-study', index);
    setSelectedItem(index);
    // set parent of case study in selectedParent and local storage
    if (DesignCases.includes(index)) {
      window.localStorage.setItem('case-topic', Topics[0]);
      setSelectedParent(Topics[0]);
      setDesignOpen(true);
    } else if (EngCases.includes(index)) {
      window.localStorage.setItem('case-topic', Topics[1]);
      setSelectedParent(Topics[1]);
      setEngOpen(true);
    }
    // selected a project so dispatch event for header and sidebar to close
    window.dispatchEvent(new Event('project selected'));
  }

  /**
   * Style-only function. It first fits the sidebar to fill up the height of the current window.
   * Second, it only allows a transition for a sidebar to open or close when toggled and not on a
   * resize.
   */
  const handleResize = () => {
    const newHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${newHeight}px`);
    const sidebar = document.getElementById('sidebar');
    // no transition shown for a resize, only toggle
    if (sidebar) {
      sidebar.style.transition = $sidebarState === States.NARROW ? 'none' : 'transform .25s ease-in';
    }
  }

  /**
   * Listen for a resize which is dependent on the handleResize function.
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);


  /**
   * May not be the most useful function but we want <details> to be aware of changes in
   * designOpen and engOpen so it knows to be open or not.
   */
  useEffect(() => {
    console.log('designOpen changed:', designOpen);
    console.log('engOpen changed:', engOpen);
  }, [designOpen, engOpen]);

  /**
   * When an case study is clicked in the project grid or the users has clicked on the Projects
   * page which erases all saved projects, sidebar needs to update its selections. If there is 
   * a change to local storage, we know the current selectedItem has changed so update.
   * 
   * Also make sure to open relevant <details> by setting designOpen or engOpen.
   */
  useEffect(() => {
    const updateSelectedItem = () => {
      const child = window.localStorage.getItem('case-study');
      const parent = window.localStorage.getItem('case-topic');
      setSelectedItem(child);
      setSelectedParent(parent);

      // cleared storage so no child or parent should be selected
      if (child === null && parent === null) {
        setDesignOpen(false);
        setEngOpen(false);
      // if we have a valid parent set, open its <details>
      } else if (parent === Topics[0]) {
        setDesignOpen(true);
      // if we have a valid parent set, open its <details>
      } else if (parent === Topics[1]) {
        setEngOpen(true);
      } else {
        console.error(`Error @ Sidebar: Local storage has an unknown parent ${parent}`);
      }
    }
    
    // Listen for changes in localStorage
    window.addEventListener('storage', updateSelectedItem);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', updateSelectedItem);
    };
  }, [selectedItem, selectedParent]);


  return (
    <>
    <SidebarWrapper id="sidebar" $sidebarState={$sidebarState}>
        <SidebarAside id="sidebar-aside" $sidebarState={$sidebarState}>
          <ScrollableAside $sidebarState={$sidebarState} id="scrollable-aside">
            <CaseTopic
              open={designOpen}
              id="design-cases"
              selected={selectedParent === Topics[0]}
              $sidebarState={$sidebarState} 
            >
              <summary>Design</summary>
              <Link to={`/projects/museum`} onClick={() => handleItemClick(DesignCases[0])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === DesignCases[0]}
                >
                  <img
                    src={selectedItem === DesignCases[0] ? MuseumActive : MuseumInactive}
                    alt="Shape of bust with a man's head and neck"
                  />
                  <p>Museum Poster</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/calendar`} onClick={() => handleItemClick(DesignCases[1])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === DesignCases[1]}
                >
                  <img
                    src={selectedItem === DesignCases[1] ? CalendarActive : CalendarInactive}
                    alt="Calendar icon with January 20th date"
                  />
                  <p>NPS Calendar</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/pomodoro`} onClick={() => handleItemClick(DesignCases[2])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === DesignCases[2]}
                >
                  <img
                    src={selectedItem === DesignCases[2] ? PomoActive : PomoInactive}
                    alt="Tomato Pomodoro Icon"
                  />
                  <p>Pomodoro Timer</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/rock`} onClick={() => handleItemClick(DesignCases[3])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === DesignCases[3]}
                >
                  <img
                    src={selectedItem === DesignCases[3] ? MountainActive : MountainInactive}
                    alt="Mountain Icon"
                  />
                  <p>Rock App</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/vacuum`} onClick={() => handleItemClick(DesignCases[4])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === DesignCases[4]}
                >
                  <img
                    src={selectedItem === DesignCases[4] ? VacuumActive : VacuumInactive}
                    alt="Upright vacuum Icon"
                  />
                  <p>Vacuum Redesign</p>
                </CasePreview>
              </Link>
            </CaseTopic>
            <CaseTopic
              open={engOpen}
              selected={selectedParent === Topics[1]}
              $sidebarState={$sidebarState} 
            >
              <summary>Engineering</summary>
              <Link to={`/projects/bookify`} onClick={() => handleItemClick(EngCases[0])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === EngCases[0]}
                >
                <img
                  src={selectedItem === EngCases[0] ? BookActive : BookInactive}
                  alt="Book Icon"
                />
                <p>Bookify</p>
                </CasePreview>
              </Link>
              <Link to={`/projects/flow`} onClick={() => handleItemClick(EngCases[1])}>
                <CasePreview 
                  $sidebarState={$sidebarState} 
                  selected={selectedItem === EngCases[1]}
                >
                <img
                  src={selectedItem === EngCases[1] ? FlowActive : FlowInactive}
                  alt="Box with a wavy line moving through"
                />
                <p>Flow Controller</p>
                </CasePreview>
              </Link>
            </CaseTopic>
          </ScrollableAside>
        </SidebarAside>
    </SidebarWrapper>
    </>
  )
}
  
export default Sidebar;