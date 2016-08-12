import React from 'react';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import AddTodo from './AddTodo';
import uuid from 'node-uuid';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Do homework'
        },
        {
          id: uuid(),
          text: 'Make a laptop'
        }
      ]
    };
  },
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          id: uuid()
        }
      ]
    })
  },
  handleSearch(showCompleted, searchText) {
    this.setState({showCompleted, searchText: searchText.toLowerCase()});
  },
  render: function () {
    const {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp;
