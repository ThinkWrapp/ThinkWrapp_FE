import useJoined, { JoinedType } from '@/hooks/useJoined';
import { useLoginUserInfo } from '@/hooks/useLoginUserInfo';
import { useSocket } from '@/hooks/useSocket';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RoomSocketManager() {
    const { roomId } = useParams();
    const { userData, isSuccess } = useLoginUserInfo();
    const socket = useSocket();

    const { setJoined } = useJoined();

    const onJoined = (joinedValue: unknown | JoinedType) => {
        if (!joinedValue) return;
        setJoined(joinedValue);
    };

    useEffect(() => {
        if (!isSuccess) return;
        socket?.emit('loadRoom', roomId, userData?.email);
    }, [roomId, socket, userData?.email]);

    useEffect(() => {
        socket?.on('roomJoined', onJoined);
        return () => {
            socket?.off('roomJoined', onJoined);
        };
    }, [socket]);

    return null;
}
