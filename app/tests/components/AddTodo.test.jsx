import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import * as fromActions from '../../actions';
import { AddTodo } from '../../components/AddTodo';

chai.use(spies);
describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).to.exist;
  });

  describe('handleSubmit', () => {
    let addTodo;
    let form;
    let spy;
    beforeEach(() => {
      spy = chai.spy(fromActions.addTodo());
      addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    });
    it('should dispatch ADD_TODO when valid todo text', () => {
      const todoText = 'Check mail';
      const action = {
        type: 'ADD_TODO',
        text: todoText
      };

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).to.have.been.called.with(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
      const todoText = '';

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).to.not.have.been.called.with({
        type: 'ADD_TODO',
        text: todoText
      });
    });
  });
});