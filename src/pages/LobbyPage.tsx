import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing';
import Loader from '@/components/Loader';
import Lobby from '@/components/Lobby';
import LobbySocketManager from '@/components/Lobby/SocketManager';
import { useProgress } from '@react-three/drei';

export default function LobbyPage() {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <>
            {loaded && <LobbySocketManager />}
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
