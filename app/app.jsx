import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/TodoApp';
import * as fromActions from './actions';
import configureStore from './store/configureSotre';
// Load foundation
$(document).foundation();

const store = configureStore();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(fromActions.addTodo('Clean the yard'));
store.dispatch(fromActions.setSearchText('yard'));
store.dispatch(fromActions.toggleShowCompleted());

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
