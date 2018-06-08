import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { turnCard } from '../shared/gameReducer';
import { getFactors } from '../shared/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${props => props.isWon && `
    background-color: green;
    padding: 100px;
  `}
`;

const CardWithSize = styled(Card)`
  width: ${props => props.cardWidth}vw;
  height: ${props => props.cardHeight}vh;
`;

const Deck = ({ state, dispatch, pairs }) => {
  const cards = state.cards;
  const cardWidth = 100 / getFactors(pairs * 2).secondFactor;
  const cardHeight = 100 / getFactors(pairs * 2).firstFactor;

  const isWon = !cards.filter(
    card => state.completed.indexOf(card.value) === -1,
  ).length;

  return (
    <Wrapper isWon={isWon}>
      {cards.map((card, index) => {
        const isTurned = state.turned.indexOf(index) !== -1;
        const isCompleted = state.completed.indexOf(card.value) !== -1;

        return (
          <CardWithSize
            key={index}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            card={card}
            isTurned={isTurned}
            isCompleted={isCompleted}
            onClick={() =>
              (!isTurned || state.turned.length === 2) &&
              dispatch(turnCard(index))}
          />
        );
      })}
    </Wrapper>
  );
};

export default Deck;
