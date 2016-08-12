import React from 'react';

const AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  handleSubmit(e) {
    e.preventDefault();
    const {todoText} = this.refs;

    if (todoText.value.length > 0) {
      this.props.onAddTodo(todoText.value);
      todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need todo?"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default AddTodo;