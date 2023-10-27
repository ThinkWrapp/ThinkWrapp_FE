import useIsAuth from '@/hooks/useIsAuth';
import { useLoginUserInfo } from '@/hooks/useLoginUserInfo';
import useRooms from '@/hooks/useRooms';
import { useSocket } from '@/hooks/useSocket';
import { Room } from '@/types/room';
import { memo, useEffect } from 'react';

const LobbySocketManager = () => {
    const setRooms = useRooms((state) => state.setRooms);
    const setGetEmail = useIsAuth((state) => state.setGetEmail);
    const { userData, isSuccess } = useLoginUserInfo();
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
        if (!isSuccess) return;
        setGetEmail(userData?.email as string);
    }, [isSuccess]);

    useEffect(() => {
        socket?.on('welcome', onWelcome);
        socket?.on('roomsUpdate', onRoomUpdate);
        return () => {
            socket?.off('welcome', onWelcome);
            socket?.off('roomsUpdate', onRoomUpdate);
        };
    }, []);

    return null;
};

export default memo(LobbySocketManager);
