import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  // width: var(--max-main-width);
  // margin-left: auto;
  // margin-right: auto;
  padding-bottom: 6rem;
  background-color: inherit;
  // height: 100%;

  @media only screen and (max-width: 1023px) {
    padding-bottom: 4.25rem;
  }

  @media only screen and (max-width: 735px) {
    padding-bottom: 3rem;
  }
`;

function Page({ children, color='dark' }) {
  const body = document.getElementById('body');

  if (body) {
    body.style.backgroundColor = color === 'dark' ? 'black' : 'white';
  }

    // const root = document.getElementById('root');

    // const mobileNavOpened = () => {
    //   setIsOpen(true);
    //   const top = window.scrollY;
    //   root.style.position = 'fixed';
    //   root.style.top = `-${top}px`;
    //   root.style.overflow = 'hidden scroll';
    // }

    // const mobileNavClosed = () => {
    //   setIsOpen(false);
    //   root.style.position = 'static';
    //   root.style.overflow = 'auto';
    // }

  // useLayoutEffect(() => {
  //   let savedOffset = 0;

  //   // Pins the body in place and preserves viewport position
  //   const freezeDisplay = () => {
  //     savedOffset = window.scrollY;
  //     body.style.overflow = 'hidden scroll';
  //     body.style.position = 'fixed';
  //     body.style.top = `-${savedOffset}px`;
  //   }

  //   // Resets body while preserving viewport position
  //   const unfreezeDisplay = () => {
  //     requestAnimationFrame(() => {
  //       window.scrollTo(0, savedOffset);
  //       // Force reflow so the browser applies the scroll instantly
  //       document.body.getBoundingClientRect();
  //       body.style.position = '';
  //       body.style.top = '';
  //       body.style.overflow = '';
  //     });
  //   }

  //   window.addEventListener('glass nav open', freezeDisplay);
  //   window.addEventListener('glass nav close', unfreezeDisplay);

  //   return () => {
  //     window.removeEventListener('glass nav open', freezeDisplay);
  //     window.removeEventListener('glass nav close', unfreezeDisplay);
  //   }
  // }, []);

  // Clone each direct child of <Page> and pass color
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  // Return the processed children
  return <>{processedChildren}</>;
}

function Header({ children, color }) {
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  return <>{processedChildren}</>;
}

function Main({ children, color }) {
    const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  return <MainWrapper>{processedChildren}</MainWrapper>;
}

function Aside({ children, color }) {
  return <></>;
}

function Footer({ children, color }) {
  const processedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color });
    }
    return child;
  });

  return <>{processedChildren}</>;
}

Page.Header = Header;
Page.Main = Main;
Page.Aside = Aside;
Page.Footer = Footer;

export default Page;