import { CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Bloom, EffectComposer, N8AO } from '@react-three/postprocessing';
import CanvasBackground from './CanvasBackground';
import Lobby from './Lobby';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

type ThinkWrappProps = {
    loaded: boolean;
};

export default function ThinkWrapp({ loaded }: ThinkWrappProps) {
    const controls = useRef<CameraControls | null>(null);
    const routeState = useSelector((state: RootState) => state.route.routeState);

    useEffect(() => {
        if (!controls.current) return;
        controls.current.setPosition(0, 8, 2);
        controls.current.setTarget(0, 8, 0);

        if (loaded) {
            controls.current.setPosition(0, 8, 2);
            controls.current.setTarget(0, 8, 0);
            controls.current.setPosition(0, 0, 2, true);
            controls.current.setTarget(0, 0, 0, true);
            return;
        }
    }, [loaded]);

    return (
        <>
            <EffectComposer>
                <N8AO intensity={0.42} />
                <Bloom luminanceThreshold={0.85} intensity={1.2} luminanceSmoothing={0.55} mipmapBlur={true} />
            </EffectComposer>
            <CanvasBackground />
            <CameraControls
                ref={controls}
                mouseButtons={{
                    left: 0,
                    middle: 0,
                    right: 0,
                    wheel: 0,
                }}
                touches={{
                    one: 0,
                    two: 0,
                    three: 0,
                }}
            />
            {!routeState && <Lobby />}
        </>
    );
}
