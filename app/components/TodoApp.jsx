import React from 'react';
import TodoList from './TodoList';
import _ from 'lodash';
import AddTodo from './AddTodo';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Do homework'
        },
        {
          id: 4,
          text: 'Make a laptop'
        }
      ]
    };
  },
  handleAddTodo(text) {
    alert(text);
  },
  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp;
