import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { useLoading } from '@/hooks/useLoading';
import Room from '@/components/Room';
import Loader from '@/components/Loader';
import { useEffect } from 'react';
import useJoined, { JoinedType } from '@/hooks/useJoined';
import socket from '@/socket';
import { useParams } from 'react-router-dom';
import { useLoginUserInfo } from '@/hooks/useLoginUserInfo';

export default function RoomPage() {
    const loaded = useLoading();
    const { roomId } = useParams();
    const { isSuccess, userData } = useLoginUserInfo();

    const { setJoined } = useJoined();

    const onJoined = (joinedValue: unknown | JoinedType) => {
        if (!joinedValue) return;
        setJoined(joinedValue);
    };

    useEffect(() => {
        if (!isSuccess) return;
        socket.emit('loadRoom', roomId, userData?.email);
    }, [roomId, isSuccess]);

    useEffect(() => {
        socket.on('roomJoined', onJoined);
        return () => {
            socket.off('roomJoined', onJoined);
        };
    }, []);

    return (
        <>
            <Canvas
                shadows
                camera={{
                    position: [0, 8, 2],
                    fov: 30,
                }}
            >
                <color attach="background" args={['#ffffff']} />
                <Room loaded={loaded} />
                <EffectComposer>
                    <N8AO intensity={0.42} />
                </EffectComposer>
            </Canvas>
            <Loader loaded={loaded} />
        </>
    );
}
