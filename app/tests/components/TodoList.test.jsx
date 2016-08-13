import React from 'react';
import chai, {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../components/TodoList';
import spies from 'chai-spies';
import Todo from '../../components/Todo';

chai.use(spies);
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).to.exist;
  });

  it('should render one Todo component for each todo item', () => {
    const spy = chai.spy();
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

    const todoList = TestUtils.renderIntoDocument(<TodoList onToggle={spy} todos={todos}/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).to.equal(todos.length);
  });

  it('should render empty message if no todos', () => {
    const spy = chai.spy();
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList onToggle={spy} todos={todos}/>);
    const message = TestUtils.scryRenderedDOMComponentsWithClass(todoList, 'container__message');

    expect(message.length).to.equal(1);
  });
});