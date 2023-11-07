import { takeEvery } from 'redux-saga/effects';
import { initSocketSaga } from './socketSaga';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
};

export function* watchLoginSuccessSaga() {
    yield takeEvery(LOGIN_SUCCESS, initSocketSaga);
}
