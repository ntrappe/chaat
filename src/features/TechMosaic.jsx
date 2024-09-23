import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Mosaic from '../components/Mosaic';
import Tile from '../components/Tile';

function TechMosaic({ children }) {
  return (
    <Mosaic>
      <Tile bg='blue'></Tile>
      <Tile bg='red'></Tile>
      <Tile bg='yellow'></Tile>
      <Tile bg='white'></Tile>
      <Tile></Tile>
      <Tile bg='pink'></Tile>
      <Tile bg='orange'></Tile>
      <Tile bg='teal'></Tile>
      <Tile bg='limegreen'></Tile>
      <Tile bg='plum'></Tile>
      <Tile bg='salmon'></Tile>
    </Mosaic>
  )
}

export default TechMosaic;