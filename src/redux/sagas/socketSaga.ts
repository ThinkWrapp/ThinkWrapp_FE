import { eventChannel, EventChannel } from 'redux-saga';
import { call, take, put } from 'redux-saga/effects';
import { createSocket } from '@/utils/createSocket';
import { Socket } from 'socket.io-client';
import {
    socketCharacter,
    socketMapUpdate,
    socketPlayerChatMessage,
    socketPlayerDance,
    socketPlayerMove,
    socketRoomJoined,
    socketRoomsUpdate,
    socketWelcome,
} from '../actions/socketAciton';
import { Character, JoinedRoomData, MapUpdateData, Room, WelcomeData } from '@/types/room';
import { PlayerChatMessage, PlayerDance } from '@/types/character';

type SocketEvent = {
    type: string;
    payload:
        | WelcomeData
        | Room[]
        | JoinedRoomData
        | Character[]
        | Character
        | PlayerChatMessage
        | PlayerDance
        | MapUpdateData;
};

function* initSocketSaga() {
    const socket: Socket | null = yield call(createSocket);

    if (socket) {
        const socketChannel: EventChannel<SocketEvent['payload']> = yield call(createSocketChannel, socket);

        while (true) {
            const socketEvent: SocketEvent = yield take(socketChannel);

            switch (socketEvent.type) {
                case 'welcome':
                    yield put(socketWelcome(socketEvent.payload as WelcomeData));
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
                case 'playerChatMessage':
                    yield put(socketPlayerChatMessage(socketEvent.payload as PlayerChatMessage));
                    break;
                case 'playerDance':
                    yield put(socketPlayerDance(socketEvent.payload as PlayerDance));
                    break;
                case 'mapUpdate':
                    yield put(socketMapUpdate(socketEvent.payload as MapUpdateData));
                    break;
            }
        }
    }
}

function createSocketChannel(socket: Socket) {
    return eventChannel((emit) => {
        const onWelcome = (welcomeData: WelcomeData) => {
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

        const onPlayerChatMessage = (message: PlayerChatMessage) => {
            emit({ type: 'playerChatMessage', payload: message });
        };

        const onPlayerDance = (playerDance: PlayerDance) => {
            emit({ type: 'playerDance', payload: playerDance });
        };

        const onMapUpdate = (mapUpdateData: MapUpdateData) => {
            emit({ type: 'mapUpdate', payload: mapUpdateData });
        };

        socket.on('welcome', onWelcome);
        socket.on('roomsUpdate', onRoomsUpdate);
        socket.on('roomJoined', onRoomJoined);
        socket.on('character', onCharacter);
        socket.on('playerMove', onPlayerMove);
        socket.on('playerChatMessage', onPlayerChatMessage);
        socket.on('playerDance', onPlayerDance);
        socket.on('mapUpdate', onMapUpdate);

        return () => {
            socket.off('welcome', onWelcome);
            socket.off('roomsUpdate', onRoomsUpdate);
            socket.off('roomJoined', onRoomJoined);
            socket.off('character', onCharacter);
            socket.off('playerMove', onPlayerMove);
            socket.off('playerChatMessage', onPlayerChatMessage);
            socket.off('playerDance', onPlayerDance);
            socket.off('mapUpdate', onMapUpdate);
        };
    });
}

export default initSocketSaga;
