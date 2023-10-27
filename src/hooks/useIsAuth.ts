import { checkAuth } from '@/utils/user';
import { create } from 'zustand';

type IsAuthStore = {
    isAuth?: boolean;
    getEmail?: string;
    setIsAuth: (isAuth: boolean) => void;
    setGetEmail: (getEmail: string) => void;
};

const useIsAuth = create<IsAuthStore>((set) => ({
    isAuth: checkAuth(),
    getEmail: '',
    setIsAuth: (isAuth) => set({ isAuth }),
    setGetEmail: (getEmail) => set({ getEmail }),
}));

export default useIsAuth;
