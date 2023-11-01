import { all, fork } from 'redux-saga/effects';
import initSocketSaga from './socketSaga';
import { watchEmitSaga } from './socketEmitSaga';

function* rootSaga() {
    yield all([fork(initSocketSaga), fork(watchEmitSaga)]);
}

export default rootSaga;
