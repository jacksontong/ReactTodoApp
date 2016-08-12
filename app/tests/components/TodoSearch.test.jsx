import React from 'react';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import TestUtils from 'react-addons-test-utils';
import TodoSearch from '../../components/TodoSearch';

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
      todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    });

    it('should call onSearch with entered input text', () => {
      const searchText = 'Dog';

      todoSearch.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSearch.refs.searchText);

      expect(spy).to.have.been.called.with(false, searchText);
    });

    it('should call onSearch with proper checked value', () => {
      const checked = true;
      todoSearch.refs.showCompleted.checked = checked;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);

      expect(spy).to.have.been.called.with(checked, '');
    });
  });
});