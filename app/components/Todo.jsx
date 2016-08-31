import React, { PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as fromActions from '../actions';

export const Todo = React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    completedAt: PropTypes.number,
    completed: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  render() {
    const {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(fromActions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" checked={completed} readOnly={true}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);