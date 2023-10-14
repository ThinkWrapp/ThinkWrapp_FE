import { instance } from '.';
import { z } from 'zod';
import { loginUserData, registerUserData } from '../types/auth';
import { userStorage } from '../utils/userStorage';
import { messageSchema } from '../types/schema';

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
export const register = async (formData: registerUserData) => {
    const response = await instance.post('/auth/register', formData);
    return messageSchema.parse(response.data);
};

const loginSchema = messageSchema.extend({
    access_token: z.string(),
});

export const login = async (formData: loginUserData) => {
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
