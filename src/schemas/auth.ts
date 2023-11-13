import { z } from 'zod';
import { AUTH } from '@/constants/auth';

export const emailSchema = z
    .string()
    .nonempty(AUTH.email.requireMessage)
    .email(AUTH.email.regexMessage)
    .min(AUTH.email.minLength, AUTH.email.minMessage)
    .max(AUTH.email.maxLength, AUTH.email.maxMessage);

export const registerSchema = z
    .object({
        username: z.string().trim().max(8, '8글자 이하로 작성해주세요').nonempty(AUTH.username.requireMessage),
        email: emailSchema,
        password: z.string().regex(AUTH.password.regex, AUTH.password.regexMessage),
        confirmPassword: z.string().regex(AUTH.password.regex, AUTH.password.regexMessage),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: '비밀번호가 일치하지 않습니다.',
        path: ['confirmPassword'],
    });

export const loginSchema = registerSchema._def.schema.pick({ email: true, password: true });

export const changeUsernameSchema = z.object({
    username: z.string().trim().max(8, '8글자 이하로 작성해주세요').nonempty(AUTH.username.requireMessage),
});
