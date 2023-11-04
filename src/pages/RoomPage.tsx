import Loader from '@/components/Loader';
import Room from '@/components/MetaRoom/Room';
import { SHOP_MODE } from '@/redux/actions/modeAction';
import { RootState } from '@/redux/reducers';
import { ScrollControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RoomPage = () => {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();
    const mode = useSelector((state: RootState) => state.mode.mode);

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

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
                <ScrollControls pages={mode === SHOP_MODE ? 4 : 0}>
                    <Room />
                </ScrollControls>
                <EffectComposer>
                    <N8AO intensity={0.42} />
                </EffectComposer>
            </Canvas>
            <Loader loaded={loaded} />
        </>
    );
};

export default RoomPage;
