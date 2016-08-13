import React from 'react';
import Todo from './Todo';

const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },
  render() {
    const {todos, onToggle} = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }

      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo} onToggle={onToggle}/>;
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