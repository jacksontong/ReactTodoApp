import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import * as fromActions from '../../actions';
import { AddTodo } from '../../components/AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('handleSubmit', () => {
    let addTodo;
    let form;
    let spy;
    beforeEach(() => {
      spy = expect.createSpy();
      addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    });
    it('should dispatch ADD_TODO when valid todo text', () => {
      const todoText = 'Check mail';
      const action = fromActions.startAddTodo(todoText);

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
      addTodo.refs.todoText.value = '';
      TestUtils.Simulate.submit(form);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});