import Lobby from '@/components/Lobby';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing';

export default function LobbyPage() {
    return (
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
    );
}
