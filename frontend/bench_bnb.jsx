import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

  let store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>React live</h1>, document.getElementById('root'));
});
