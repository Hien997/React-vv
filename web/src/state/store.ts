import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers, rootSagas } from './ducks';
import { logger } from './middlewares';

const configureStore = (preloadedState?: any) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [];
  middlewares.push(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const store = createStore(
    rootReducers,
    preloadedState,
    process.env.NODE_ENV === 'development'
      ? composeEnhancers(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares)
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

const store = configureStore();

export default store;
