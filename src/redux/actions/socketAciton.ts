import { Character, CreateRoomSchema, JoinedRoomData, Room } from '@/types/room';

export const SOCKET_WELCOME = 'SOCKET_WELCOME' as const;
export const SOCKET_ROOMS_UPDATE = 'SOCKET_ROOMS_UPDATE' as const;
export const SOCKET_CREATE_ROOM = 'SOCKET_CREATE_ROOM' as const;
export const SOCKET_LOAD_ROOM = 'SOCKET_LOAD_ROOM' as const;
export const SOCKET_ROOM_JOINED = 'SOCKET_ROOM_JOINED' as const;
export const SOCKET_LEAVE_ROOM = 'SOCKET_LEAVE_ROOM' as const;
export const SOCKET_JOIN_ROOM = 'SOCKET_JOIN_ROOM' as const;
export const SOCKET_CHARACTER = 'SOCKET_CHARACTER' as const;

// receive
export const socketWelcome = (payload: Room[]) => {
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

export const socketLoadRoom = (roomId: string) => {
    return {
        type: SOCKET_LOAD_ROOM,
        payload: roomId,
    };
};

export const socketLeaveRoom = () => {
    return {
        type: SOCKET_LEAVE_ROOM,
    };
};
