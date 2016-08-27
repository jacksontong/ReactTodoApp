import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

export const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render() {
    const { todos } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }

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

const mapStateToTodoListProps = (state) => ({
  todos: state.todos
});

export default connect(
  mapStateToTodoListProps
)(TodoList);