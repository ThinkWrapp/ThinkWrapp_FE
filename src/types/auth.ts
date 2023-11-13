import { z } from 'zod';
import { registerSchema, loginSchema, changeUsernameSchema } from '@/schemas/auth';

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type UpdateAvatarSchema = {
    avatarUrl: string;
};
export type ChangeUsernameSchema = z.infer<typeof changeUsernameSchema>;
