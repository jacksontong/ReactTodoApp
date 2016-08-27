import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromActions from '../actions';

export const TodoSearch = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool,
    searchText: PropTypes.string
  },
  render() {
    const { dispatch, showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search"
                 ref="searchText"
                 placeholder="Search todos"
                 value={searchText}
                 onChange={() => {
                   const searchText = this.refs.searchText.value;
                   dispatch(fromActions.setSearchText(searchText));
                 }}/>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              checked={showCompleted}
              onChange={() => {
                dispatch(fromActions.toggleShowCompleted())
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

const mapStateToTodoSearchProps = (state) => ({
  showCompleted: state.showCompleted,
  searchText: state.searchText
});

export default connect(mapStateToTodoSearchProps)(TodoSearch);