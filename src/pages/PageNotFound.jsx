import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainWrapper = styled.main`
  display: flex;
  width: 980px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;

  @media (max-width: 1023px) {
    width: 692px;
  }

  @media (max-width: 767px) {
    width: 87.5%;
`;

const CareerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  padding-top: 2.35rem;
`;

const CareerTitle = styled.h1`
  margin-bottom: 32px;
  color: var(--midnight);

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const Error = styled.div`
  width: fit-content;
  border: 1px solid var(--scarlet);
  border-radius: 12px;
  background-color: var(--dust);
  padding: 17px 15px;
  
  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--scarlet);
    padding-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
    color: var(--asphalt);

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }

  a {
    color: var(--midnight);
    font-weight: 400;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function PageNotFound() {
  const body = document.getElementById('body');
  body.setAttribute('page', 'projects');

  return (
    <>
      <MainWrapper id="main">
        <CareerWrapper>
          <CareerTitle>Page Not Found</CareerTitle>
          <Error>
            <h3>Error 404</h3>
            <p>Oops! Looks like you wandered off the beaten path. Don't worry, we're sending a search party 
              to recover the lost page. Feel free to navigate back <Link to={`/`}>Home</Link>.</p>
          </Error>
        </CareerWrapper>
      </MainWrapper>
    </>
  )
}

export default PageNotFound;