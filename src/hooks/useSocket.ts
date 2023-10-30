import io, { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { profile } from '@/api/auth';
// import useIsAuth from './useIsAuth';

export function useSocket() {
    // const isAuth = useIsAuth((state) => state.isAuth);
    const {
        data: userData,
        isLoading,
        isError,
    } = useQuery(['user'], profile, {
        // enabled: isAuth,
        staleTime: Infinity,
        cacheTime: Infinity,
    });
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        if (!isLoading && !isError && userData.email) {
            const s = io('http://localhost:3000', { query: { email: userData.email } });
            setSocket(s);
        }
    }, [isLoading, isError, userData?.email]);

    return socket;
}
