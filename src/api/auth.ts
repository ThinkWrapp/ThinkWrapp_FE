import { z } from 'zod';
import { instance } from '.';
import { userStorage } from '@/utils/userStorage';
import { messageSchema } from '@/schemas/@Share';
import { LoginSchema, RegisterSchema } from '@/types/auth';

// Get Request

const profileSchema = z.object({
    username: z.string(),
    sub: z.string(),
    roles: z.array(z.string()),
});

export const profile = async () => {
    const response = await instance.post('/auth/profile', {
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
    return messageSchema.parse(response.data);
};

const refreshTokenSchema = loginSchema.pick({ access_token: true });

export const refreshToken = async () => {
    const response = await instance.post('/auth/refreshToken', {}, { withCredentials: true });
    return refreshTokenSchema.parse(response.data);
};
