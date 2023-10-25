import { z } from 'zod';
import { createRoomSchema } from '@/schemas/room';

export type CreateRoomSchema = z.infer<typeof createRoomSchema>;
export type Room = {
    id: string;
    name: string;
    nbCharacters: number;
    roomLimitPeople: number;
};
