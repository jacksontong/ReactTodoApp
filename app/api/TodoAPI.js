export default {
  setTodos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));

      return todos;
    }
  },
  getTodos() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {}

    return Array.isArray(todos) ? todos : [];
  },
  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      const text = todo.text.toLowerCase();

      return searchText.length === 0 ? true : text.indexOf(searchText) > -1;
    });

    // Sort todo with non complted first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};