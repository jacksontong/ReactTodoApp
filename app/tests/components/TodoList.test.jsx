import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../components/TodoList';
import Todo from '../../components/Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).to.exist;
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Check mail'
      }
    ];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).to.equal(todos.length);
  });
});