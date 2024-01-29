import React, { useState, useEffect } from 'react';

const States = {
  EXPANDED: 'expanded',
  NARROW: 'narrow',
  HIDDEN: 'hidden',
};

function MinimalPage({ customComponent: SubPage, $colorScheme }) {
  const body = document.getElementById('body');
  body.setAttribute('colorscheme', $colorScheme);

  // Nav starts off as either visibly part of header or hidden away if mobile width
  const [navState, setNavState] = useState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
  // Decide whether to scroll or not depending on if nav is open
  const [scroll, setScroll] = useState(true);

  /**
   * Pass this function to SubPage to its header so we know whether or not
   * nav is open or closed.
   * @param {string} state nav is HIDDEN, NARROW, or EXPANDED
   */
  const handleNavToggle = (state) => {
    setNavState(state);
    setScroll(state !== States.EXPANDED);
  }

  /**
   * If root state is set to scroll, set position to fixed.
   */
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.position = scroll ? 'unset' : 'fixed';
    }
  }, [scroll]);

  /**
   * When the page expands past 1023px, reset nav and scroll.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        console.log('resize @MinimalPage and set nav to narrow and scroll to true');
        setNavState(States.NARROW);
        setScroll(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [navState, scroll]);

  /**
   * Listen to an event that will be dispatched in NavMenu when a page is clicked. We 
   * need to close nav and set its state so the dark overlay goes away and can scroll. 
   */
  useEffect(() => {
    const closeNav = () => {
      console.log('closeNav @MinimalPage');
      setScroll(true);
      setNavState(window.innerWidth > 767 ? States.NARROW : States.HIDDEN);
    }

    window.addEventListener('close nav', closeNav);

    return () => {
      window.removeEventListener('close nav', closeNav);
    }
  }, [navState, scroll]);

  return (
    <SubPage $navState={navState} $colorScheme={$colorScheme} handleNavToggle={handleNavToggle} />
  )
}

export default MinimalPage;