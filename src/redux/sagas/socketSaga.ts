import { eventChannel, EventChannel } from 'redux-saga';
import { call, take, put } from 'redux-saga/effects';
import { createSocket } from '@/utils/createSocket';
import { Socket } from 'socket.io-client';
import { Character, JoinedRoomData, Room } from '@/types/room';
import {
    socketCharacter,
    socketPlayerMove,
    socketRoomJoined,
    socketRoomsUpdate,
    socketWelcome,
} from '../actions/socketAciton';

type SocketEvent = {
    type: string;
    payload: Room[] | JoinedRoomData | Character[] | Character;
};

function* initSocketSaga() {
    const socket: Socket | null = yield call(createSocket);

    if (socket) {
        const socketChannel: EventChannel<Room[] | JoinedRoomData> = yield call(createSocketChannel, socket);

        while (true) {
            const socketEvent: SocketEvent = yield take(socketChannel);

            switch (socketEvent.type) {
                case 'welcome':
                    yield put(socketWelcome(socketEvent.payload as Room[]));
                    break;
                case 'roomsUpdate':
                    yield put(socketRoomsUpdate(socketEvent.payload as Room[]));
                    break;
                case 'roomJoined':
                    yield put(socketRoomJoined(socketEvent.payload as JoinedRoomData));
                    break;
                case 'character':
                    yield put(socketCharacter(socketEvent.payload as Character[]));
                    break;
                case 'playerMove':
                    yield put(socketPlayerMove(socketEvent.payload as Character));
                    break;
            }
        }
    }
}

function createSocketChannel(socket: Socket) {
    return eventChannel((emit) => {
        const onWelcome = (welcomeData: Room[]) => {
            emit({ type: 'welcome', payload: welcomeData });
        };

        const onRoomsUpdate = (roomsUpdateData: Room[]) => {
            emit({ type: 'roomsUpdate', payload: roomsUpdateData });
        };

        const onRoomJoined = (joinedData: JoinedRoomData) => {
            emit({ type: 'roomJoined', payload: joinedData });
        };

        const onCharacter = (characterData: Character[]) => {
            emit({ type: 'character', payload: characterData });
        };

        const onPlayerMove = (characterData: Character) => {
            emit({ type: 'playerMove', payload: characterData });
        };

        socket.on('welcome', onWelcome);
        socket.on('roomsUpdate', onRoomsUpdate);
        socket.on('roomJoined', onRoomJoined);
        socket.on('character', onCharacter);
        socket.on('playerMove', onPlayerMove);

        return () => {
            socket.off('welcome', onWelcome);
            socket.off('roomsUpdate', onRoomsUpdate);
            socket.off('roomJoined', onRoomJoined);
            socket.off('character', onCharacter);
            socket.off('playerMove', onPlayerMove);
        };
    });
}

export default initSocketSaga;
