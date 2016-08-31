import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as fromReducers from '../reducers/reducers';
import thunk from 'redux-thunk';

export default (initialState = {}) => {
  const reducer = combineReducers({
    searchText: fromReducers.searchTextReducer,
    showCompleted: fromReducers.showCompletedReducer,
    todos: fromReducers.todosReducer
  });

  return createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
};