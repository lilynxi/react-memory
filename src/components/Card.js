import React from 'react';
import styled from 'styled-components';



const StyledCard = styled.div`
  box-sizing: border-box;
  background-color: #eee;
  border: thin solid white;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #ffd3e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  ${props => (props.isTurned || props.isCompleted) && `
    opacity: 1;
  `}
`;

const Card = ({ className, card, isTurned, isCompleted, onClick }) => {
  return (
    <StyledCard
      className={className}
      isTurned={isTurned}
      isCompleted={isCompleted}
      onClick={onClick}
    >
      <Image
        isTurned={isTurned}
        isCompleted={isCompleted}
      >{card.value}</Image>
    </StyledCard>
  );
};

export default Card;