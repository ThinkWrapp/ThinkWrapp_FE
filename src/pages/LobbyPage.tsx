import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing';
import { useEffect } from 'react';
import { useLoading } from '@/hooks/useLoading';
import Loader from '@/components/Loader';
import Lobby from '@/components/Lobby';
import socket from '@/socket';
import useRooms from '@/hooks/useRooms';
import { Room } from '@/types/room';
import { useLoginUserInfo } from '@/hooks/useLoginUserInfo';

export default function LobbyPage() {
    const loaded = useLoading();
    const { rooms, setRooms } = useRooms();
    const { userData, isSuccess } = useLoginUserInfo();

    const onWelcome = (welcomeValue: Room) => {
        if (!welcomeValue) return;
        setRooms([...rooms, welcomeValue]);
    };

    const onRoomUpdate = (roomUpdateValue: Room) => {
        if (!roomUpdateValue) return;
        setRooms([...rooms, roomUpdateValue]);
    };

    useEffect(() => {
        if (!isSuccess) return;

        socket.emit('clientEmail', userData?.email);
    }, [userData?.email, isSuccess]);

    useEffect(() => {
        socket.on('welcome', onWelcome);
        socket.on('roomsUpdate', onRoomUpdate);
        return () => {
            socket.off('welcome', onWelcome);
            socket.off('roomsUpdate', onRoomUpdate);
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
                <Lobby loaded={loaded} />
                <EffectComposer>
                    <N8AO intensity={0.42} />
                    <Bloom luminanceThreshold={0.85} intensity={1.2} luminanceSmoothing={0.55} mipmapBlur={true} />
                </EffectComposer>
            </Canvas>
            <Loader loaded={loaded} />
        </>
    );
}
