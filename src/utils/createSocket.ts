import { profile } from '@/api/auth';
import { Socket, io } from 'socket.io-client';

let socketInstance: Socket | null = null;
export const createSocket = async () => {
    if (socketInstance) {
        return socketInstance;
    }

    try {
        const userData = await profile();
        socketInstance = io(import.meta.env.VITE_SOCKTE_URL, { query: { email: userData.email } });

        return socketInstance;
    } catch (err) {}

    return null;
};
