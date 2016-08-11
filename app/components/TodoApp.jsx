import React from 'react';
import TodoList from './TodoList';

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
  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

export default TodoApp;
