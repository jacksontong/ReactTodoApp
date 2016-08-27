import { expect } from 'chai';
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
});