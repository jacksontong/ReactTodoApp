import { expect } from 'chai';
import moment from 'moment';
import deepFreeze from 'deep-freeze-strict';
import * as fromReducers from '../../reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      const res = fromReducers.searchTextReducer('', deepFreeze(action));

      expect(res).to.equal(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should set showCompleted status gets flipped', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = fromReducers.showCompletedReducer(false, deepFreeze(action));

      expect(res).to.be.true;
    })
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc13',
          text: 'Something todo',
          completed: false,
          completedAt: 234325
        }
      };
      const res = fromReducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).to.equal(1);
      expect(res[0]).to.equal(action.todo);
    });

    it('should update a todo', () => {
      const now = moment().unix();
      const state = [{
        id: 1,
        text: 'some text',
        completed: false,
        createdAt: now,
        completedAt: undefined
      }];
      const updates = {
        completed: false,
        completedAt: null
      };
      const action = {
        type: 'UPDATE_TODO',
        id: state[0].id,
        updates
      };
      const resFirst = fromReducers.todosReducer(deepFreeze(state), deepFreeze(action));

      expect(resFirst[0].completed).to.equal(updates.completed);
      expect(resFirst[0].completedAt).to.equal(updates.completedAt);
      expect(resFirst[0].text).to.equal(state[0].text);
    });

    it('should add existing todos', () => {
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
      const res = fromReducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).to.equal(todos.length);
      expect(res).to.eql(todos);
    });
  });
});