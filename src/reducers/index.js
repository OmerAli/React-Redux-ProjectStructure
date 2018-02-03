import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import todos from './todo';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  router: router5Reducer,
  todos,
  visibilityFilter
});

export default rootReducer;
