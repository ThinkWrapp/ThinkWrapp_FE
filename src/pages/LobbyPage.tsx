import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing';
import Loader from '@/components/Loader';
import Lobby from '@/components/Lobby';
import LobbySocketManager from '@/components/Lobby/SocketManager';

export default function LobbyPage() {
    return (
        <>
            <LobbySocketManager />
            <Canvas
                shadows
                camera={{
                    position: [0, 8, 2],
                    fov: 30,
                }}
            >
                <color attach="background" args={['#ffffff']} />
                <Lobby />
                <EffectComposer>
                    <N8AO intensity={0.42} />
                    <Bloom luminanceThreshold={0.85} intensity={1.2} luminanceSmoothing={0.55} mipmapBlur={true} />
                </EffectComposer>
            </Canvas>
            <Loader />
        </>
    );
}
