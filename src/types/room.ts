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
};

export type JoinedRoomData = {
    map: {
        gridDivision: number;
        size: number[];
    };
    characters: Character[];
    id: string;
    password?: string;
};
