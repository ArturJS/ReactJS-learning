import * as types from '../actions/action-types';
import {store} from '../store/store';
import * as _ from 'lodash';

export default (state = 100, action) => {
  if (action.type !== types.ADD_TODO && action.type !== types.UPDATE_TODO) return state;

  const todoList = store.getState().todoList.present;
  const isDoneTodoList = todoList.filter(todo => todo.isDone);

  switch (action.type) {
    case types.ADD_TODO:
      return isDoneTodoList.length / (todoList.length + 1) * 100;
    case types.UPDATE_TODO:
      let relatedTodo = _.find(todoList, todo => todo.id === action.todo.id);
      let shiftIsDone = 0;

      if (relatedTodo.isDone !== action.todo.isDone) {
        shiftIsDone = action.todo.isDone ? 1 : -1;
      }

      return (isDoneTodoList.length + shiftIsDone) / todoList.length * 100;
    default:
      return state;
  }
};
