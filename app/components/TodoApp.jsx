import React from 'react';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import * as fromActions from '../actions';

export const TodoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(fromActions.startLogout());
  },
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a onClick={this.onLogout} href="javascript:void(0)">Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(TodoApp);
