import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/TodoApp';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import * as fromActions from './actions';
import TodoAPI from './api/TodoAPI';

// Load foundation
$(document).foundation();

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();

  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(fromActions.addTodos(initialTodos));

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
