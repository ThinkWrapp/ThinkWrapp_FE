import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import { persistStore } from 'redux-persist';
import rootSaga from './redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

export const persistor = persistStore(store);
