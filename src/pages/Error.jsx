import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ErrorTitle = styled.h2`
  font-size: 1.2em;
`;

function Error() {

  return (
    <ErrorTitle>404 Page Not Found</ErrorTitle>
  )
}

export default Error;