export const setSearchText = (searchText) => ({
  type: 'SET_SEARCH_TEXT',
  searchText
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
});

export const toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED'
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});