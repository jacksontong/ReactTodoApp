import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/TodoApp';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as fromActions from './actions';

// Load foundation
$(document).foundation();

const store = configureStore();

store.dispatch(fromActions.startAddTodos());

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
