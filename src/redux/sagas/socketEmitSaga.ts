import { Socket } from 'socket.io-client';
import { call, takeEvery } from 'redux-saga/effects';
import {
    SOCKET_CREATE_ROOM,
    SOCKET_JOIN_ROOM,
    SOCKET_LEAVE_ROOM,
    SOCKET_LOAD_ROOM,
    socketCreateRoom,
    socketJoinRoom,
    socketLeaveRoom,
    socketLoadRoom,
} from '../actions/socketAciton';
import { createSocket } from '@/utils/createSocket';

type SocketEmitSagaAction =
    | ReturnType<typeof socketCreateRoom>
    | ReturnType<typeof socketLoadRoom>
    | ReturnType<typeof socketLeaveRoom>
    | ReturnType<typeof socketJoinRoom>;

function* socketEmitSaga(action: SocketEmitSagaAction) {
    const socket: Socket | null = yield call(createSocket);

    if (socket) {
        switch (action.type) {
            case SOCKET_CREATE_ROOM:
                socket.emit('createRoom', action.payload);
                break;
            case SOCKET_LOAD_ROOM:
                socket.emit('loadRoom', action.payload);
                break;
            case SOCKET_LEAVE_ROOM:
                socket.emit('leaveRoom');
                break;
            case SOCKET_JOIN_ROOM:
                socket.emit('joinRoom', action.payload);
                break;
        }
    }
}

export function* watchEmitSaga() {
    yield takeEvery(SOCKET_CREATE_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_LOAD_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_LEAVE_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_JOIN_ROOM, socketEmitSaga);
}
