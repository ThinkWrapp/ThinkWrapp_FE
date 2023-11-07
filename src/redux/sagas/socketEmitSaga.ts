import { Socket } from 'socket.io-client';
import { call, takeEvery } from 'redux-saga/effects';
import {
    SOCKET_CHAT_MESSAGE,
    SOCKET_CREATE_ROOM,
    SOCKET_DANCE,
    SOCKET_ITEMS_UPDATE,
    SOCKET_JOIN_ROOM,
    SOCKET_LEAVE_ROOM,
    SOCKET_LOAD_ROOM,
    SOCKET_MOVE,
    SOCKET_VIDEO_MUTE,
    socketChatMessage,
    socketCreateRoom,
    socketDance,
    socketItemsUpdate,
    socketJoinRoom,
    socketLeaveRoom,
    socketMove,
    socketVideoMute,
} from '../actions/socketAciton';
import { createSocket } from '@/utils/createSocket';

type SocketEmitSagaAction =
    | ReturnType<typeof socketCreateRoom>
    | ReturnType<typeof socketLeaveRoom>
    | ReturnType<typeof socketJoinRoom>
    | ReturnType<typeof socketMove>
    | ReturnType<typeof socketChatMessage>
    | ReturnType<typeof socketDance>
    | ReturnType<typeof socketItemsUpdate>
    | ReturnType<typeof socketVideoMute>;

function* socketEmitSaga(action: SocketEmitSagaAction) {
    const socket: Socket | null = yield call(createSocket);

    if (socket) {
        switch (action.type) {
            case SOCKET_CREATE_ROOM:
                socket.emit('createRoom', action.payload);
                break;
            case SOCKET_LEAVE_ROOM:
                socket.emit('leaveRoom');
                break;
            case SOCKET_JOIN_ROOM:
                socket.emit('joinRoom', action.payload);
                break;
            case SOCKET_MOVE:
                socket.emit('move', action.payload);
                break;
            case SOCKET_CHAT_MESSAGE:
                socket.emit('chatMessage', action.payload);
                break;
            case SOCKET_DANCE:
                socket.emit('dance', action.payload);
                break;
            case SOCKET_ITEMS_UPDATE:
                socket.emit('itemsUpdate', action.payload);
                break;
            case SOCKET_VIDEO_MUTE:
                socket.emit('videoMute', action.payload);
                break;
        }
    }
}

export function* watchEmitSaga() {
    yield takeEvery(SOCKET_CREATE_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_LOAD_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_LEAVE_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_JOIN_ROOM, socketEmitSaga);
    yield takeEvery(SOCKET_MOVE, socketEmitSaga);
    yield takeEvery(SOCKET_CHAT_MESSAGE, socketEmitSaga);
    yield takeEvery(SOCKET_DANCE, socketEmitSaga);
    yield takeEvery(SOCKET_ITEMS_UPDATE, socketEmitSaga);
    yield takeEvery(SOCKET_VIDEO_MUTE, socketEmitSaga);
}
