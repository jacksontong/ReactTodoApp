import React from 'react';
import { connect } from 'react-redux';
import * as fromActions from '../actions';

export const AddTodo = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },
  handleSubmit(e) {
    e.preventDefault();
    const { todoText } = this.refs;
    const { dispatch } = this.props;

    if (todoText.value.length > 0) {
      dispatch(fromActions.startAddTodo(todoText.value));
      todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  },
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need todo?"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);