import { Socket } from 'socket.io-client';
import { call, takeEvery } from 'redux-saga/effects';
import { SOCKET_CREATE_ROOM, SOCKET_LOAD_ROOM, socketCreateRoom, socketLoadRoom } from '../actions/socketAciton';
import { createSocket } from '@/utils/createSocket';

function* socketEmitSaga(action: ReturnType<typeof socketCreateRoom> | ReturnType<typeof socketLoadRoom>) {
    const socket: Socket | null = yield call(createSocket);

    if (socket) {
        switch (action.type) {
            case SOCKET_CREATE_ROOM:
                socket.emit('createRoom', action.payload);
                break;
            case SOCKET_LOAD_ROOM:
                socket.emit('loadRoom', action.payload);
                break;
        }
    }
}

export function* watchEmitSaga() {
    yield takeEvery(SOCKET_CREATE_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_LOAD_ROOM, socketEmitSaga);
}
