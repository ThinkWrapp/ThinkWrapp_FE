import { z } from 'zod';

export const createRoomSchema = z.object({
    id: z.string().uuid().optional(),
    roomName: z.string().nonempty(),
    password: z.string().optional(),
    roomLimitPeople: z
        .string()
        .transform((val) => parseInt(val))
        .refine((n) => !Number.isNaN(n) && n > 0 && n <= 6 && Number.isInteger(n)),
});
