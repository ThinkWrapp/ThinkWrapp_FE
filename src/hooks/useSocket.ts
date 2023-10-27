import io, { Socket } from 'socket.io-client';
import useIsAuth from './useIsAuth';
import { useEffect, useRef } from 'react';

export function useSocket() {
    const getEmail = useIsAuth((state) => state.getEmail);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        if (socketRef.current === null) {
            socketRef.current = io('http://localhost:3000', { query: { email: getEmail } });
        }
    }, []);

    return socketRef.current;
}
