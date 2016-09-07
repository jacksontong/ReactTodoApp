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
    store.dispatch(fromActions.login(user.uid));
    store.dispatch(fromActions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(fromActions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
$(document).foundation();

const store = configureStore();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
