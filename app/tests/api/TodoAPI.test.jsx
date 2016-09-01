import {expect} from 'chai';
import TodoAPI from '../../api/TodoAPI';

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).to.exist;
  });

  describe('filterTodos', () => {
    const todos = [
      {
        id: 1,
        text: 'Some text here',
        completed: true
      },
      {
        id: 2,
        text: 'Other text here',
        completed: false
      },
      {
        id: 3,
        text: 'Some text here',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).to.equal(todos.length);
    });

    it('should return non completed items if showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      const notCompletedItems = todos.filter((todo) => {
        return !todo.completed;
      });

      expect(filteredTodos.length).to.equal(notCompletedItems.length);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).to.be.false;
    });

    it('should filter todos by searchText', () => {
      const searchText = 'some';
      const filteredTodos = TodoAPI.filterTodos(todos, true, searchText);
      const searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().indexOf(searchText) > -1;
      });

      expect(filteredTodos.length).to.equal(searchedTodos.length);
    });

    it('should return all todos if searchText is empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).to.equal(todos.length);
    });
  });
});