import { z } from 'zod';
import { createRoomSchema } from '@/schemas/room';

export type CreateRoomSchema = z.infer<typeof createRoomSchema>;
export type Room = {
    id: string;
    name: string;
    nbCharacters: number;
    roomLimitPeople: number;
};
export type Chaaracter = {
    id: string;
    session: number;
    position: number[];
    avatarUrl: string;
};

export type JoinedRoomData = {
    map: {
        gridDivision: number;
        size: number[];
    };
    characters: Chaaracter[];
    id: string;
    password?: string;
};
