import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired
  },
  render() {
    const {text, id, completed, onToggle, createdAt, completedAt} = this.props;
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
        onToggle(id);
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

export default Todo;