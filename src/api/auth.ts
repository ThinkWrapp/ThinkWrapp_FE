import { z } from 'zod';
import { instance } from '.';
import { userStorage } from '@/utils/userStorage';
import { messageSchema } from '@/schemas/@Share';
import { LoginSchema, RegisterSchema, UpdateAvatarSchema } from '@/types/auth';
import { emailSchema } from '@/schemas/auth';
import { AVATAR_SELECT } from '@/constants/auth';

// Get Request

const profileSchema = z.object({
    username: z.string(),
    email: emailSchema,
    sub: z.string(),
    roles: z.array(z.string()),
    avatarUrl: z.string().nullable(),
});

export const profile = async () => {
    const response = await instance.get('/auth/profile', {
        headers: {
            Authorization: `Bearer ${userStorage.get()}`,
        },
    });

    return profileSchema.parse(response.data);
};

// Post Request
export const register = async (formData: RegisterSchema) => {
    const response = await instance.post('/auth/register', formData);
    return messageSchema.parse(response.data);
};

const loginSchema = messageSchema.extend({
    access_token: z.string(),
});

export const login = async (formData: LoginSchema) => {
    const response = await instance.post('/auth/login', formData, { withCredentials: true });
    return loginSchema.parse(response.data);
};

export const logout = async () => {
    const response = await instance.post('/auth/logout');
    userStorage.remove();
    window.localStorage.removeItem(AVATAR_SELECT);
    return messageSchema.parse(response.data);
};

const refreshTokenSchema = loginSchema.pick({ access_token: true });

export const refreshToken = async () => {
    const response = await instance.post('/auth/refreshToken', {}, { withCredentials: true });
    return refreshTokenSchema.parse(response.data);
};

// Patch Request

const avatarSchema = z.string();

export const updateAvatar = async (avatarUrl: UpdateAvatarSchema) => {
    const response = await instance.patch('/auth/avatarUrl', avatarUrl);
    return avatarSchema.parse(response.data);
};
