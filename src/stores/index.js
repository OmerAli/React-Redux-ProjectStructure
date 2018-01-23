import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { router5Middleware } from 'redux-router5';

import throttle from 'lodash/throttle';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// import { loadState, saveState } from './localStorage';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = (router, initialState = {}) => {
  // const persistedState = loadState();
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(router5Middleware(router), sagaMiddleware))(createStore);

  const store = createStoreWithMiddleware(
    rootReducer,
    initialState
  );

  // store.subscribe(throttle(() => {
  //   saveState({
  //     todo: store.getState().todos
  //   });
  // }, 1000));


  if (module.hot)
    module.hot.accept('reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });


  console.log('Before returning store: ', store);

  return store;
};

export default configureStore;
