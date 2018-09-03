import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import rootSagas from 'sagas';
import reducers from 'reducers';

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    let store = createStore(reducers , initialState, compose(...enhancers));

    sagaMiddleware.run(rootSagas, store.dispatch);

    return store;
}