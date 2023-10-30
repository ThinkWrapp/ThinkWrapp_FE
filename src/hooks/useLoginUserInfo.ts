import { profile } from '@/api/auth';
import { RootState } from '@/redux/reducers';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

export const useLoginUserInfo = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);

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
