import React from 'react';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import TestUtils from 'react-addons-test-utils';
import { TodoSearch } from '../../components/TodoSearch';

chai.use(spies);
describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).to.exist;
  });

  describe('handleSearch', () => {
    let spy;
    let todoSearch;
    beforeEach(() => {
      spy = chai.spy();
      todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
      const searchText = 'Dog';
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText
      };

      todoSearch.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSearch.refs.searchText);

      expect(spy).to.have.been.called.with(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
      const checked = true;
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      todoSearch.refs.showCompleted.checked = checked;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);

      expect(spy).to.have.been.called.with(action);
    });
  });
});