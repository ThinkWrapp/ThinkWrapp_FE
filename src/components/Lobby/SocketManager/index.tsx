import useRooms from '@/hooks/useRooms';
import { useSocket } from '@/hooks/useSocket';
import { Room } from '@/types/room';
import { useEffect } from 'react';

const LobbySocketManager = () => {
    const setRooms = useRooms((state) => state.setRooms);
    const socket = useSocket();

    const onWelcome = (welcomeValue: unknown | Room) => {
        if (!welcomeValue) return;
        setRooms(welcomeValue as Room[]);
    };

    const onRoomUpdate = (roomUpdateValue: unknown | Room) => {
        if (!roomUpdateValue) return;
        setRooms(roomUpdateValue as Room[]);
    };

    useEffect(() => {
        socket?.on('welcome', onWelcome);
        socket?.on('roomsUpdate', onRoomUpdate);
        return () => {
            socket?.off('welcome', onWelcome);
            socket?.off('roomsUpdate', onRoomUpdate);
        };
    }, [socket]);

    return null;
};

export default LobbySocketManager;
