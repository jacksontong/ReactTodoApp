import React from 'react';
import moment from 'moment';

const Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired
  },
  render() {
    const {text, id, completed, onToggle, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
        onToggle(id);
      }}>
        <input type="checkbox" checked={completed} readOnly={true}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

export default Todo;