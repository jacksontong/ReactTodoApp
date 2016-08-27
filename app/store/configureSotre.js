import { combineReducers, createStore, compose } from 'redux';
import * as fromReducers from '../reducers/reducers';

export default () => {
  const reducer = combineReducers({
    searchText: fromReducers.searchTextReducer,
    showCompleted: fromReducers.showCompletedReducer,
    todos: fromReducers.todosReducer
  });

  return createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
};