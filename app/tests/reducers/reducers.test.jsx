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

    it('should toggle a todo', () => {
      const now = moment().unix();
      const state = [{
        id: 1,
        text: 'some text',
        completed: false,
        createdAt: now,
        completedAt: undefined
      }];
      const action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      const resFirst = fromReducers.todosReducer(deepFreeze(state), deepFreeze(action));

      expect(resFirst[0].completed).to.be.true;
      expect(resFirst[0].completedAt).to.equal(now);

      // toggle a todo again
      const resTwo = fromReducers.todosReducer(deepFreeze(resFirst), deepFreeze(action));
      expect(resTwo[0].completed).to.be.false;
      expect(resTwo[0].completedAt).to.be.undefined;
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