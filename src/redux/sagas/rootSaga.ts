import { all, fork } from 'redux-saga/effects';
import initSocketSaga from './socketSaga';
import { watchEmitSaga } from './socketEmitSaga';
import { watchLoginSuccessSaga } from './loginSaga';

function* rootSaga() {
    yield all([fork(initSocketSaga), fork(watchEmitSaga), fork(watchLoginSuccessSaga)]);
}

export default rootSaga;
