import axios from 'axios';
import { refreshToken } from './auth';
import { userStorage } from '@/utils/userStorage';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_SEVER_BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        const token = userStorage.get();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { config, response } = error;

        if (response.status === 401) {
            const token = userStorage.get();

            if (!token) {
                return window.location.replace('/');
            }

            try {
                const { access_token } = await refreshToken();
                userStorage.set(access_token);
                config.headers['Authorization'] = `Bearer ${access_token}`;
                return instance(config);
            } catch (error) {
                userStorage.remove();
                return window.location.replace('/');
            }
        }

        return Promise.reject(error);
    },
);
