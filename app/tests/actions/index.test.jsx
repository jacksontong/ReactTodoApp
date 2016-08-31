import {expect} from 'chai';
import * as fromActions from '../../actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, { firebaseRef } from '../../firebase';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const response = fromActions.setSearchText(action.searchText);

    expect(response).to.eql(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: '12312',
        text: 'adsfasdf',
        completed: false,
        createdAt: 0
      }
    };
    const response = fromActions.addTodo(action.todo);

    expect(response).to.eql(action);
  });

  it('should create todo an dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(fromActions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).to.include({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).to.include({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action', () => {
    const todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000000
    }];
    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = fromActions.addTodos(todos);

    expect(res).to.eql(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const response = fromActions.toggleShowCompleted();

    expect(response).to.eql(action);
  });

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: 3,
      updates: {
        completed: false
      }
    };
    const response = fromActions.updateTodo(action.id, action.updates);

    expect(response).to.eql(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;
    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();

      testTodoRef.set({
        text: 'Something to do',
        completed: false,
        createdAt: 1231243
      }).then(() => done());
    });
    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });
    
    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore([thunk]);
      const action = fromActions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).to.include({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).to.include({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).to.exist;

        done();
      }, done);
    });
  });
});