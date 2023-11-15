import axios from 'axios';
import { refreshToken } from './auth';
import { userStorage } from '@/utils/userStorage';
import { AVATAR_SELECT } from '@/constants/auth';

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

        if (response.data.message === 'Unauthorized') {
            // TODO:  access_token 없거나 만료될 경우 홈으로 이동은 react-route-dom으로 이동 /* utils폴더 -> user.ts -> checkAuthLoader함수 사용예정  */
            const token = userStorage.get();

            if (!token) {
                window.localStorage.removeItem('persist:' + AVATAR_SELECT);
                window.location.replace('/');
            }

            try {
                const { access_token } = await refreshToken();
                userStorage.set(access_token);
                config.headers['Authorization'] = `Bearer ${access_token}`;
                return instance(config);
            } catch (error) {
                userStorage.remove();
                window.localStorage.removeItem('persist:' + AVATAR_SELECT);
                window.location.replace('/');
            }
        }

        return Promise.reject(error);
    },
);
