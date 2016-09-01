import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import firebase from './firebase';
import * as fromActions from './actions';
import router from './routers';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

// Load foundation
$(document).foundation();

const store = configureStore();

store.dispatch(fromActions.startAddTodos());

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
