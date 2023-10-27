import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import Room from '@/components/Room';
import Loader from '@/components/Loader';
import RoomSocketManager from '@/components/Room/SocketManager';
import { useProgress } from '@react-three/drei';

export default function RoomPage() {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <>
            <RoomSocketManager />
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
