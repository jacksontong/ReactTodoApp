import React from 'react';
import Todo from './Todo';

const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default TodoList;