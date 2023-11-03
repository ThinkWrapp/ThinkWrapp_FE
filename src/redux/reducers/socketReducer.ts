import { Character, JoinedRoomData, Room } from '@/types/room';
import {
    SOCKET_PLAYER_CHAT_MESSAGE,
    SOCKET_PLAYER_CHAT_MESSAGE_RESET,
    SOCKET_PLAYER_DANCE,
    SOCKET_CHARACTER,
    SOCKET_PLAYER_MOVE,
    SOCKET_ROOMS_UPDATE,
    SOCKET_ROOM_JOINED,
    SOCKET_WELCOME,
    socketPlayerChatMessage,
    socketPlayerChatMessageReset,
    socketPlayerDance,
    socketCharacter,
    socketPlayerMove,
    socketRoomJoined,
    socketRoomsUpdate,
    socketWelcome,
} from '../actions/socketAciton';
import { PlayerChatMessage, PlayerDance } from '@/types/character';

type SocketAction =
    | ReturnType<typeof socketWelcome>
    | ReturnType<typeof socketRoomsUpdate>
    | ReturnType<typeof socketRoomJoined>
    | ReturnType<typeof socketCharacter>
    | ReturnType<typeof socketPlayerMove>
    | ReturnType<typeof socketPlayerChatMessage>
    | ReturnType<typeof socketPlayerChatMessageReset>
    | ReturnType<typeof socketPlayerDance>;

type SocketState = {
    rooms: undefined | Room[];
    roomJoined: undefined | JoinedRoomData;
    myCharacter: undefined | Character;
    myChatMessage: undefined | PlayerChatMessage;
    myDance: undefined | PlayerDance;
};

const initialState: SocketState = {
    rooms: undefined,
    roomJoined: undefined,
    myCharacter: undefined,
    myChatMessage: undefined,
    myDance: undefined,
};

const socketReducer = (state = initialState, action: SocketAction) => {
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
            if (!state.roomJoined) {
                return state;
            }
            return {
                ...state,
                roomJoined: {
                    ...state.roomJoined,
                    characters: action.payload,
                },
            };
        case SOCKET_PLAYER_MOVE:
            return {
                ...state,
                myCharacter: action.payload,
            };
        case SOCKET_PLAYER_CHAT_MESSAGE:
            return {
                ...state,
                myChatMessage: action.payload,
            };
        case SOCKET_PLAYER_CHAT_MESSAGE_RESET:
            return {
                ...state,
                myChatMessage: action.payload,
            };
        case SOCKET_PLAYER_DANCE:
            return {
                ...state,
                myDance: action.payload,
            };
        default:
            return state;
    }
};

export default socketReducer;
