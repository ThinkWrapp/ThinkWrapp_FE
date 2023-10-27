import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import Room from '@/components/Room';
import Loader from '@/components/Loader';
import RoomSocketManager from '@/components/Room/SocketManager';

export default function RoomPage() {
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
                <Room />
                <EffectComposer>
                    <N8AO intensity={0.42} />
                </EffectComposer>
            </Canvas>
            <Loader />
        </>
    );
}
