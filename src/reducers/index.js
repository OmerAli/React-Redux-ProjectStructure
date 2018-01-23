import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import todoApp from './todo';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  router: router5Reducer,
  todoApp,
  visibilityFilter
});

export default rootReducer;
