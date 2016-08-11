import React from 'react';

const Todo = React.createClass({
  render() {
    const {text, id} = this.props;

    return (
      <div>
        {id}. {text}
      </div>
    );
  }
});

export default Todo;