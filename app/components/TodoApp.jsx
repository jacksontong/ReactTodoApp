import React from 'react';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import AddTodo from './AddTodo';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
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
