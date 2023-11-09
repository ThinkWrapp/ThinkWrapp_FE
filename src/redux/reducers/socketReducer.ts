import { Character, JoinedRoomData, Room, ShopItem, UserVideoMute } from '@/types/room';
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
    socketMapUpdate,
    SOCKET_MAP_UPDATE,
    SOCKET_ROOM_VIDEO,
    socketVideo,
    socketUserDisconnect,
    SOCKET_USER_DISCONNECT,
    SOCKET_USER_VIDEO_MUTE,
    socketUserVideoMute,
    SOCKET_LEAVE_ROOM,
    socketLeaveRoom,
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
    | ReturnType<typeof socketPlayerDance>
    | ReturnType<typeof socketMapUpdate>
    | ReturnType<typeof socketVideo>
    | ReturnType<typeof socketUserDisconnect>
    | ReturnType<typeof socketUserVideoMute>
    | ReturnType<typeof socketLeaveRoom>;

type SocketState = {
    rooms: undefined | Room[];
    items: undefined | ShopItem[];
    roomJoined: undefined | JoinedRoomData;
    myCharacter: undefined | Character;
    myChatMessage: undefined | PlayerChatMessage;
    myDance: undefined | PlayerDance;
    deletePeerId: undefined | string;
    updatedVideoMute: undefined | UserVideoMute;
};

const initialState: SocketState = {
    rooms: undefined,
    items: undefined,
    roomJoined: undefined,
    myCharacter: undefined,
    myChatMessage: undefined,
    myDance: undefined,
    deletePeerId: undefined,
    updatedVideoMute: undefined,
};

const socketReducer = (state = initialState, action: SocketAction) => {
    switch (action.type) {
        case SOCKET_WELCOME:
            return {
                ...state,
                rooms: action.payload.rooms,
                items: action.payload.items,
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
        case SOCKET_ROOM_VIDEO:
            if (!state.roomJoined) {
                return state;
            }
            return {
                ...state,
                roomJoined: {
                    ...state.roomJoined,
                    videos: action.payload,
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
        case SOCKET_MAP_UPDATE:
            if (!state.roomJoined) {
                return state;
            }
            return {
                ...state,
                roomJoined: {
                    ...state.roomJoined,
                    map: action.payload.map,
                    characters: action.payload.characters,
                },
            };
        case SOCKET_USER_VIDEO_MUTE:
            return {
                ...state,
                updatedVideoMute: action.payload,
            };
        case SOCKET_USER_DISCONNECT:
            return {
                ...state,
                deletePeerId: action.payload,
            };
        case SOCKET_LEAVE_ROOM:
            return {
                ...state,
                roomJoined: undefined,
                myCharacter: undefined,
                myChatMessage: undefined,
                myDance: undefined,
                deletePeerId: undefined,
                updatedVideoMute: undefined,
            };
        default:
            return state;
    }
};

export default socketReducer;
