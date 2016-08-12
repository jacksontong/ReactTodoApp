import React from 'react';
import chai, {expect} from 'chai';
import spies from 'chai-spies';
import TestUtils from 'react-addons-test-utils';
import Todo from '../../components/Todo';
import ReactDOM from 'react-dom';

chai.use(spies);
describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).to.exist;
  });

  it('should call onToggle prop with id on click', () => {
    const todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    const spy = chai.spy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    TestUtils.Simulate.click(ReactDOM.findDOMNode(todo));

    expect(spy).to.have.been.called.with(todoData.id);
  });
});