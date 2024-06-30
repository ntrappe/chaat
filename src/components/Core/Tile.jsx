import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function Tile({ border, children }) {

}

function Visual({ children }) {
  return <span className='Tile-Visual'>{children}</span>
}

function Heading({ children }) {
  return <h2 className='Tile-Description'>{children}</h2>
}

function Description({ children }) {
  return <p className='Tile-Description'>{children}</p>
}

export default Object.assign(Tile, {
  Visual,
  Heading,
  Description,
});