
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

// Find the DOM node generated by the server.
const mountNode = global.document.getElementById('root');

// Encapsulate rendering for hot-reloading.
const render = Component => {
  ReactDOM.render(<Component />, mountNode);
};

if (
  module.hot && module.hot.accept && typeof module.hot.accept === 'function'
) {
  module.hot.accept('./root', () => render(require('./root').default)); // eslint-disable-line global-require
}

// Do the initial rendering.
render(Root);