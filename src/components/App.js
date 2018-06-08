import React from 'react';
import Deck from './Deck';
// import Display from './Display';
import withGameReducer from '../shared/gameReducer';
import '../shared/styles';



const App = props => (
  <div>
    {/* <Display {...props} /> */}
    <Deck {...props} />
  </div>
  );

export default withGameReducer(App);
