import { JoinedRoomData, Room } from '@/types/room';
import {
    SOCKET_CHARACTER,
    SOCKET_ROOMS_UPDATE,
    SOCKET_ROOM_JOINED,
    SOCKET_WELCOME,
    socketCharacter,
    socketRoomJoined,
    socketRoomsUpdate,
    socketWelcome,
} from '../actions/socketAciton';

type SocketAction =
    | ReturnType<typeof socketWelcome>
    | ReturnType<typeof socketRoomsUpdate>
    | ReturnType<typeof socketRoomJoined>
    | ReturnType<typeof socketCharacter>;
type SocketState = {
    rooms: Room[];
    roomJoined: undefined | JoinedRoomData;
};

const initialState: SocketState = {
    rooms: [],
    roomJoined: undefined,
};

const socketReducer = (state = initialState, action: SocketAction) => {
    console.log(state.roomJoined);
    switch (action.type) {
        case SOCKET_WELCOME:
            return {
                ...state,
                rooms: action.payload,
            };
        case SOCKET_ROOMS_UPDATE:
            return {
                ...state,
                rooms: action.payload,
            };
        case SOCKET_ROOM_JOINED:
            return {
                ...state,
                roomJoined: action.payload,
            };
        case SOCKET_CHARACTER:
            return {
                ...state,
                roomJoined: {
                    ...state.roomJoined,
                    characters: action.payload,
                },
            };
        default:
            return state;
    }
};

export default socketReducer;
