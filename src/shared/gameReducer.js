import withReducer from 'recompose/withReducer';


const CARD_TURN = 'card/turn';

const generateDeck = (pairsCount = 8) => {
  const randomSort = () => parseInt(Math.random() * 10 / 3.3, 10) - 1;
  const createCardValue = (value, index) => index % pairsCount;
  const createCardObject = value => ({
    value,
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
  won: false,
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case CARD_TURN: {
      const cardIndex = action.payload.cardIndex;
      const needsReset = state.turned.length === 2;
      const turnedNew = needsReset ? [cardIndex] : [...state.turned, cardIndex];
      let completedNew = state.completed;
      let wonNew = state.won;

      if (state.cards[turnedNew[0]] && state.cards[turnedNew[1]]) {
        if (
          state.cards[turnedNew[0]].value === state.cards[turnedNew[1]].value
        ) {
          completedNew = [...state.completed, state.cards[turnedNew[0]].value];
        }
      }

      if (state.cards.length/2 === completedNew.length) {
        wonNew = true;
      }

      return {
        ...state,
        turned: turnedNew,
        completed: completedNew,
        won: wonNew,
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
