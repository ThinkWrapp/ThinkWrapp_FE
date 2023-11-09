import { z } from 'zod';
import { createRoomSchema } from '@/schemas/room';

export type CreateRoomSchema = z.infer<typeof createRoomSchema>;
export type Room = {
    id: string;
    name: string;
    nbCharacters: number;
    roomLimitPeople: number;
};
export type Character = {
    id: string;
    session: number;
    position: number[];
    avatarUrl: string;
    userName: string;
    path?: number[][];
};

export type ShopItem = {
    name: string;
    size: [number, number];
    wall?: boolean;
    walkable?: boolean;
    rotation?: number;
    gridPosition?: number[];
    tmp?: boolean;
};

export type RoomVideo = {
    id: string;
    isVideoMuted: boolean;
    userName: string;
};

export type JoinedRoomData = {
    map: {
        gridDivision: number;
        size: number[];
        items: ShopItem[];
    };
    characters: Character[];
    id: string;
    videos: RoomVideo[];
    password?: string;
};

export type MapUpdateData = Omit<JoinedRoomData, 'id' | 'password' | 'videos'>;

export type WelcomeData = {
    rooms: Room[];
    items: ShopItem[];
};

export type VideoPeer = {
    id: string;
    stream: MediaStream;
    isVideoMuted: boolean;
    userName: string;
};

export type UserVideoMute = {
    peerId: string;
    isVideoMuted: boolean;
    userName: string;
};
