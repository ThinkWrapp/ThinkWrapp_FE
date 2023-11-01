import { profile } from '@/api/auth';
import { Socket, io } from 'socket.io-client';

let socketInstance: Socket | null = null;
export const createSocket = async () => {
    if (socketInstance) {
        return socketInstance;
    }

    const userData = await profile();

    if (userData.email) {
        socketInstance = io('http://localhost:3000', { query: { email: userData.email } });

        return socketInstance;
    }

    return null;
};
