import { PlayerChatMessage, PlayerDance } from '@/types/character';
import { Character, CreateRoomSchema, JoinedRoomData, MapUpdateData, Room, ShopItem, WelcomeData } from '@/types/room';

export const SOCKET_WELCOME = 'SOCKET_WELCOME' as const;
export const SOCKET_ROOMS_UPDATE = 'SOCKET_ROOMS_UPDATE' as const;
export const SOCKET_CREATE_ROOM = 'SOCKET_CREATE_ROOM' as const;
export const SOCKET_LOAD_ROOM = 'SOCKET_LOAD_ROOM' as const;
export const SOCKET_ROOM_JOINED = 'SOCKET_ROOM_JOINED' as const;
export const SOCKET_LEAVE_ROOM = 'SOCKET_LEAVE_ROOM' as const;
export const SOCKET_JOIN_ROOM = 'SOCKET_JOIN_ROOM' as const;
export const SOCKET_CHARACTER = 'SOCKET_CHARACTER' as const;
export const SOCKET_MOVE = 'SOCKET_MOVE' as const;
export const SOCKET_PLAYER_MOVE = 'SOCKET_PLAYER_MOVE' as const;
export const SOCKET_CHAT_MESSAGE = 'SOCKET_CHAT_MESSAGE' as const;
export const SOCKET_PLAYER_CHAT_MESSAGE = 'SOCKET_PLAYER_CHAT_MESSAGE' as const;
export const SOCKET_PLAYER_CHAT_MESSAGE_RESET = 'SOCKET_PLAYER_CHAT_MESSAGE_RESET' as const;
export const SOCKET_DANCE = 'SOCKET_DANCE' as const;
export const SOCKET_PLAYER_DANCE = 'SOCKET_PLAYER_DANCE' as const;
export const SOCKET_ITEMS_UPDATE = 'SOCKET_ITEMS_UPDATE' as const;
export const SOCKET_MAP_UPDATE = 'SOCKET_MAP_UPDATE' as const;

// receive
export const socketWelcome = (payload: WelcomeData) => {
    return {
        type: SOCKET_WELCOME,
        payload,
    };
};

export const socketRoomsUpdate = (payload: Room[]) => {
    return {
        type: SOCKET_ROOMS_UPDATE,
        payload,
    };
};

export const socketRoomJoined = (payload: JoinedRoomData) => {
    return {
        type: SOCKET_ROOM_JOINED,
        payload,
    };
};

export const socketCharacter = (payload: Character[]) => {
    return {
        type: SOCKET_CHARACTER,
        payload,
    };
};

export const socketPlayerMove = (payload: Character) => {
    return {
        type: SOCKET_PLAYER_MOVE,
        payload,
    };
};

export const socketPlayerChatMessage = (payload: PlayerChatMessage) => {
    return {
        type: SOCKET_PLAYER_CHAT_MESSAGE,
        payload,
    };
};

export const socketPlayerChatMessageReset = () => {
    return {
        type: SOCKET_PLAYER_CHAT_MESSAGE_RESET,
        payload: undefined,
    };
};

export const socketPlayerDance = (payload: PlayerDance) => {
    return {
        type: SOCKET_PLAYER_DANCE,
        payload,
    };
};

export const socketMapUpdate = (payload: MapUpdateData) => {
    return {
        type: SOCKET_MAP_UPDATE,
        payload,
    };
};

// emit

export const socketCreateRoom = (payload: CreateRoomSchema) => {
    return {
        type: SOCKET_CREATE_ROOM,
        payload,
    };
};

export const socketJoinRoom = (roomId: string, avatarUrl: string) => {
    return {
        type: SOCKET_JOIN_ROOM,
        payload: {
            roomId,
            avatarUrl,
        },
    };
};

export const socketLoadRoom = (roomId: string, avatarUrl: string) => {
    return {
        type: SOCKET_LOAD_ROOM,
        payload: {
            roomId,
            avatarUrl,
        },
    };
};

export const socketLeaveRoom = () => {
    return {
        type: SOCKET_LEAVE_ROOM,
    };
};

export const socketMove = (from: number[], to: number[]) => {
    return {
        type: SOCKET_MOVE,
        payload: {
            from,
            to,
        },
    };
};

export const socketChatMessage = (message: string) => {
    return {
        type: SOCKET_CHAT_MESSAGE,
        payload: message,
    };
};

export const socketDance = (danceName: string) => {
    return {
        type: SOCKET_DANCE,
        payload: danceName,
    };
};

export const socketItemsUpdate = (items: ShopItem[]) => {
    return {
        type: SOCKET_ITEMS_UPDATE,
        payload: items,
    };
};
