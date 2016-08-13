import React from 'react';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import AddTodo from './AddTodo';
import uuid from 'node-uuid';
import TodoAPI from '../api/TodoAPI';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          id: uuid(),
          completed: false
        }
      ]
    })
  },
  handleSearch(showCompleted, searchText) {
    this.setState({showCompleted, searchText: searchText.toLowerCase()});
  },
  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  render: function () {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp;
