import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import AddTodo from '../../components/AddTodo';
import TodoApp from '../../components/TodoApp';

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
      spy = chai.spy(TodoApp.handleAddTodo);
      addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    });
    it('should call onAddTodo prop with valid data', () => {
      const todoText = 'Check mail';

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).to.have.been.called.with(todoText);
    });

    it('should not call onAddTodo prop with valid data', () => {
      const todoText = '';

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).to.not.have.been.called.with(todoText);
    });
  });
});