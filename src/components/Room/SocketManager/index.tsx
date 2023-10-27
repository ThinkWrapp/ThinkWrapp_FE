import useJoined, { JoinedType } from '@/hooks/useJoined';
import { useSocket } from '@/hooks/useSocket';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RoomSocketManager() {
    const { roomId } = useParams();
    const socket = useSocket();

    const { setJoined } = useJoined();

    const onJoined = (joinedValue: unknown | JoinedType) => {
        if (!joinedValue) return;
        setJoined(joinedValue);
    };

    useEffect(() => {
        socket?.emit('loadRoom', roomId);
    }, [roomId]);

    useEffect(() => {
        socket?.on('roomJoined', onJoined);
        return () => {
            socket?.off('roomJoined', onJoined);
        };
    }, []);

    return null;
}
