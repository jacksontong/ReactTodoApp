import {expect} from 'chai';
import * as fromActions from '../../actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const response = fromActions.setSearchText(action.searchText);

    expect(response).to.eql(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'new todo'
    };
    const response = fromActions.addTodo(action.text);

    expect(response).to.eql(action);
  });

  it('should generate add todos action', () => {
    const todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000000
    }];
    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = fromActions.addTodos(todos);

    expect(res).to.eql(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const response = fromActions.toggleShowCompleted();

    expect(response).to.eql(action);
  });

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 3
    };
    const response = fromActions.toggleTodo(action.id);

    expect(response).to.eql(action);
  })
});