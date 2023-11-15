import { all, fork } from 'redux-saga/effects';

import { watchEmitSaga } from './socketEmitSaga';
import { watchLoginSuccessSaga } from './loginSaga';

function* rootSaga() {
    yield all([fork(watchEmitSaga), fork(watchLoginSuccessSaga)]);
}

export default rootSaga;
