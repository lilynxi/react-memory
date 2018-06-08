import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  padding: 2rem;
  background-color: black;
  color: white;

  ${props => props.isGameOver && `
    background-color: green;
  `}
`;

const Display = props => {
  const isGameOver = props.state.score <= 0;
  return (
    <StyledDisplay isGameOver={isGameOver}>{props.state.score} </StyledDisplay>
  );
};

export default Display;