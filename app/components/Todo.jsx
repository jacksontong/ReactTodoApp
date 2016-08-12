import React from 'react';

const Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired
  },
  render() {
    const {text, id, completed, onToggle} = this.props;

    return (
      <div onClick={() => {
        onToggle(id);
      }}>
        <input type="checkbox" checked={completed} readOnly={true}/>
        {text}
      </div>
    );
  }
});

export default Todo;