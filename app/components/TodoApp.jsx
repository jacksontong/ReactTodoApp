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
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: false
        },
        {
          id: uuid(),
          text: 'Do homework',
          completed: true
        },
        {
          id: uuid(),
          text: 'Make a laptop',
          completed: true
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
    const {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp;
