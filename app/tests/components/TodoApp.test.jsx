import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {
  let todoApp;
  beforeEach(() => {
    todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  });

  it('should exist', () => {
    expect(TodoApp).to.exist;
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'test text';

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).to.equal(todoText);
    expect(todoApp.state.todos[0].createdAt).to.be.a('number')
  });

  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      compltedAt: undefined
    };
    todoApp.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).to.be.false;

    // call handleToggle with 11
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).to.be.true;
    expect(todoApp.state.todos[0].completedAt).to.be.a('number');

    // Test that when toggle from tru to false, completedAt get removed
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).to.be.false;
    expect(todoApp.state.todos[0].completedAt).to.be.a('undefined');
  });
});