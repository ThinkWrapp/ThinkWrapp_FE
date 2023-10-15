import { z } from 'zod';
import { registerSchema, loginSchema } from '@/schemas/auth';

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
