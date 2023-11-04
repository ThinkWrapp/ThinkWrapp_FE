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

export type JoinedRoomData = {
    map: {
        gridDivision: number;
        size: number[];
        items: ShopItem[];
    };
    characters: Character[];
    id: string;
    password?: string;
};

export type MapUpdateData = Omit<JoinedRoomData, 'id' | 'password'>;

export type WelcomeData = {
    rooms: Room[];
    items: ShopItem[];
};
