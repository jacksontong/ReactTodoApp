import React from 'react';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import uuid from 'node-uuid';
import TestUtils from 'react-addons-test-utils';
import { Todo } from '../../components/Todo';
import ReactDOM from 'react-dom';
import * as fromActions from '../../actions';
import mjexpect from 'expect';

chai.use(spies);
describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).to.exist;
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    const todoData = {
      id: uuid(),
      text: 'Write todo.test.jsx test',
      completed: true,
      createdAt: 1234
    };
    const action = fromActions.startToggleTodo(todoData.id, !todoData.completed);
    const spy = mjexpect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

    TestUtils.Simulate.click(ReactDOM.findDOMNode(todo));

    mjexpect(spy).toHaveBeenCalledWith(action);
  });
});