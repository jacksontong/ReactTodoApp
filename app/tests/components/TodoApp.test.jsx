import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).to.exist;
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).to.equal(todoText);
  });
});