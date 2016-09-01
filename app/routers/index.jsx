import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from '../components/TodoApp';
import Login from '../components/Login';
import firebase from '../firebase';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }

  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }

  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" components={TodoApp} onEnter={requireLogin}/>
      <IndexRoute components={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);