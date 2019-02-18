import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootSagas from 'sagas';
import reducers from 'reducers';
import middleware from 'middleware/middleware';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  console.log(middleware);
  const middlewares = [
    sagaMiddleware,
    middleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(reducers, initialState, compose(...enhancers));

  sagaMiddleware.run(rootSagas, store.dispatch);

  return store;
}
