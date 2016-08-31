import firebase, { firebaseRef } from '../firebase';
import moment from 'moment';

export const setSearchText = (searchText) => ({
  type: 'SET_SEARCH_TEXT',
  searchText
});

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

export const addTodos = (todos) => ({
  type: 'ADD_TODOS',
  todos
});

export const toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED'
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const startAddTodo = (text) => (dispatch, getState) => {
  const todo = {
    text,
    completed: false,
    createdAt: moment().unix(),
    completedAt: null
  };
  const todoRef = firebaseRef.child('todos').push(todo);

  return todoRef.then(() => {
    dispatch(addTodo({
      ...todo,
      id: todoRef.key
    }));
  })
};