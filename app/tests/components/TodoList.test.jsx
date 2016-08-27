import React from 'react';
import chai, { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import ConnectedTodoList, { TodoList } from '../../components/TodoList';
import spies from 'chai-spies';
import ConnectedTodo, { Todo } from '../../components/Todo';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import uuid from 'node-uuid';

chai.use(spies);
describe('TodoList', () => {
  it('should exist', () => {
    expect(ConnectedTodoList).to.exist;
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: uuid(),
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: uuid(),
        text: 'Check mail',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    const store = configureStore({
      todos
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

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