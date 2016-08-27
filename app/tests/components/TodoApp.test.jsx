import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoApp from '../../components/TodoApp';
import TodoList from '../../components/TodoList';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).to.exist;
  });

  it('should render ConnectedTodoList', () => {
    const store = configureStore();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );
    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).to.equal(1);
  });
});