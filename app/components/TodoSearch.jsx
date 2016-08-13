import React from 'react';

const TodoSearch = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },
  handleSearch() {
    const {showCompleted, searchText} = this.refs;

    this.props.onSearch(showCompleted.checked, searchText.value);
  },
  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

export default TodoSearch;