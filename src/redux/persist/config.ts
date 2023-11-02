import { AVATAR_SELECT } from '@/constants/auth';
import storage from 'redux-persist/lib/storage';

const ROOM = 'ROOM' as const;

export const avatarSelectConfig = {
    key: AVATAR_SELECT,
    storage: storage,
};

export const roomConfig = {
    key: ROOM,
    storage: storage,
};
