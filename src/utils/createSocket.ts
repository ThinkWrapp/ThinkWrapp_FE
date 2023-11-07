import { profile } from '@/api/auth';
import { Socket, io } from 'socket.io-client';

let socketInstance: Socket | null = null;
export const createSocket = async () => {
    if (socketInstance) {
        return socketInstance;
    }

    try {
        const userData = await profile();
        socketInstance = io('http://localhost:3000', { query: { email: userData.email } });

        return socketInstance;
    } catch (err) {}

    return null;
};
