import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: block;
  position: sticky;
  position: -webkit-sticky;
  margin-top: ${(props) => (props.offset)};
  width: ${(props) => (props.width === 'narrow' ? `var(--aside-width-narrow)` : `var(--aside-width-wide)`)};
  padding-left: ${(props) => (props.width === 'narrow' ? `var(--aside-gap-narrow)` : `var(--aside-gap-wide)`)};
  height: fit-content;

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledListWrapper = styled.ul`
  width: 100%;
`;

const StyledItem = styled.li`
  font-size: var(--aside-text-size);
  line-height: 1.33;
  letter-spacing: -.01em;
  word-break: break-word;
  margin: 0;
  cursor: pointer;
  padding: var(--aside-padding);
  border-left: 1.5px solid;
  color: ${(props) => (props.selected ? `var(--wet-concrete)` : `var(--concrete)`)};
  font-weight: ${(props) => (props.selected ? '400' : '300')};
  border-color: ${(props) => (props.selected ? `var(--wet-concrete)` : `var(--cloud)`)};

  &:hover {
    text-decoration: underline;
  }
`;

const validateOffset = (offset) => {
  // Parse input to match expected syntax of number then px/em/rem
  const regex = /^(\d*\.?\d+)(px|em|rem)$/;
  const match = offset.match(regex);

  if (match) {
    // Convert first half of string to number to check values
    // Second half are just the units (px/em/rem)
    const numericPart = parseFloat(match[1]);

    return numericPart > 0;
  } else {
    console.error('Invalid vertical offset value @Aside');
    return false;
  }
}

// TODO add validation for verticalOffset
function Aside({ color='light', verticalOffset='130px', width='narrow', children }) {
  const [selectedItem, setSelectedItem] = useState(0);

  /**
   * When an item (section) is clicked in the list, update the selected item to match and
   * send up an event so the page listening can scroll to the corresponding section.
   * 
   * @param {number} index Corresponds to index in array of Sections
   */
  const handleItemClick = (index) => {
    if ((index >= 0) && (index < React.Children.count(children))) {
      setSelectedItem(index);
      window.dispatchEvent(new Event('aside-click-' + index));
    } else {
      console.error('Received invalid index reference (no section) @Aside');
    }
  }

  /**
   * Listen to scroll events on a page. When a section scrolls into focus, an event is
   * fired off. Update the corresponding section title in aside to match.
   * Dependency on changes to selectedItem.
   */
  useEffect(() => {
    // Add an event listener to listen for when a section comes into focus
    for (let i = 0; i < React.Children.count(children); i++) {
      window.addEventListener('section-scroll-' + i, () => setSelectedItem(i));
    }

    return () => {
      // Remove an event listener for each section
      for (let i = 0; i < React.Children.count(children); i++) {
        window.removeEventListener('section-scroll-' + i, () => setSelectedItem(i));
      }
    }
  }, [selectedItem]);

  return (
    <StyledWrapper 
      width={width}
      offset={validateOffset(verticalOffset) ? verticalOffset : '130px'}
    >
      <StyledListWrapper className='aside-list'>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { selectedItem, handleItemClick, index });
        })}
      </StyledListWrapper>
    </StyledWrapper>
  )
}

/**
 * List element that represents an anchor to a section on the page.
 * @param {*} children Text for the section title
 * @param {Boolean} selected If this current section is in focus
 * @param {Number} index Each list element has an index [0-n] 
 * @returns list element
 */
function Item({ children, selectedItem, handleItemClick, index }) {
  return (
    <StyledItem
      selected={selectedItem === index}
      onClick={() => handleItemClick(index)}
      style={{ textTransform: 'capitalize' }}
      className={'aside-item-' + `${index}`}
    >
      {children}
    </StyledItem>
  )
}

// Named exports for direct access (no nested)
Aside.Item = Item;

export default Aside;