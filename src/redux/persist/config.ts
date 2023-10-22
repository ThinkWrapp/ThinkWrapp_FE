import { AVATAR_SELECT } from '@/constants/auth';
import storage from 'redux-persist/lib/storage';

export const avatarSelectConfig = {
    key: AVATAR_SELECT,
    storage: storage,
};
