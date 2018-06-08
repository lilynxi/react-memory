import React from 'react';
import Deck from './Deck';
import styled from 'styled-components';
// import Display from './Display';
import withGameReducer from '../shared/gameReducer';
import '../shared/styles';

const Yay = styled.div`
  font-size: 2rem;
`;

const App = props => console.log(props) || (
  <div>
    {/* <Display {...props} /> */}
    { props.state.won
        ? <Yay>Yay</Yay>
        : <Deck {...props} />
    }
  </div>
  );

export default withGameReducer(App);
