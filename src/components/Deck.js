import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { turnCard } from '../shared/gameReducer';
import { getFactors } from '../shared/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CardWithSize = styled(Card)`
  width: ${props => props.cardWidth}vw;
  height: ${props => props.cardHeight}vh;
  min-height: 6rem;
  min-width: 6rem;
`;

const Deck = ({ state, dispatch, pairs }) => {
  const cards = state.cards;
  const cardWidth = 100 / getFactors(pairs * 2).secondFactor;
  const cardHeight = 100 / getFactors(pairs * 2).firstFactor;

  return (
    <Wrapper>
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
