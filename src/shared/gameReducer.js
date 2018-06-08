import withReducer from 'recompose/withReducer';


const CARD_TURN = 'card/turn';

const generateDeck = (pairsCount = 8) => {
  const randomSort = () => parseInt(Math.random() * 10 / 3.3, 10) - 1;
  const randomNumber = Math.round(Math.random() * 20);
  const createCardValue = (value, index) => index % pairsCount;
  const createCardObject = value => ({
    value,
    img: 1,
  });

  const cardsArray = Array.from(new Array(pairsCount * 2));
  const cards = cardsArray
    .map(createCardValue)
    .map(createCardObject)
    .sort(randomSort);

  return cards;
};

const initialState = ({ pairs }) => ({
  cards: generateDeck(pairs),
  turned: [],
  completed: [],
  score: 50,
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case CARD_TURN: {
      const cardIndex = action.payload.cardIndex;
      const needsReset = state.turned.length === 2;
      const turnedNew = needsReset ? [cardIndex] : [...state.turned, cardIndex];
      let completedNew = state.completed;
      let scoreNew = state.score;

      if (state.cards[turnedNew[0]] && state.cards[turnedNew[1]]) {
        if (
          state.cards[turnedNew[0]].value === state.cards[turnedNew[1]].value
        ) {
          completedNew = [...state.completed, state.cards[turnedNew[0]].value];
          scoreNew += 50;
        } else {
          scoreNew -= 20;
        }
      }

      return {
        ...state,
        turned: turnedNew,
        completed: completedNew,
        score: scoreNew,
      };
    }

    default:
      return state;
  }
};

export const turnCard = cardIndex => ({
  type: CARD_TURN,
  payload: {
    cardIndex,
  },
});

const withGameReducer = withReducer(
  'state',
  'dispatch',
  gameReducer,
  initialState,
);

export default withGameReducer;
