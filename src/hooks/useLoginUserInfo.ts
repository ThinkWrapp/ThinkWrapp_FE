import { profile } from '@/api/auth';
import { useQuery } from '@tanstack/react-query';
import useIsAuth from './useIsAuth';

export const useLoginUserInfo = () => {
    const isAuth = useIsAuth((state) => state.isAuth);

    const { data: userData, isSuccess } = useQuery(['user'], profile, {
        enabled: isAuth,
        staleTime: Infinity,
        cacheTime: Infinity,
    });

    return {
        userData,
        isSuccess,
    };
};
