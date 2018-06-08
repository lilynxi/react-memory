import React from 'react';
import App from './components/App';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ddd;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Root = ({ setPairs, pairs = null }) => (
  <Wrapper>
    {!pairs &&
      <input type="number" placeholder="number of pairs" onKeyUp={setPairs} />}
    {pairs && <App pairs={pairs} />}
  </Wrapper>
);

const extendWithHandlers = withHandlers({
  setPairs: props =>
    event => {
      if (event.keyCode === 13) {
        props.setPairs(event.target.value);
      }
    },
});

export default compose(
  withState('pairs', 'setPairs', null),
  extendWithHandlers,
)(Root);
