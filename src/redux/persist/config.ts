import { AVATAR_SELECT } from '@/constants/auth';
import storage from 'redux-persist/lib/storage';

const ROUTE = 'ROUTE' as const;

export const avatarSelectConfig = {
    key: AVATAR_SELECT,
    storage: storage,
};

export const routeConfig = {
    key: ROUTE,
    storage: storage,
};
