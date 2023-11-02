import { CameraControls, Cloud } from '@react-three/drei';
import { useMemo, memo, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CanvasBackground from '../CanvasBackground';

type BackgroundProps = {
    loaded: boolean;
};

const Background = memo(({ loaded }: BackgroundProps) => {
    const controls = useRef<CameraControls | null>(null);
    const backgrounds = useMemo(
        () => (
            <>
                <CanvasBackground />
                <Cloud color="#c0c0dd" position={[10, 3, 8]} scale={[3, 1.3, 23]} />
                <Cloud color="#c0c0dd" position={[-8, 4, 5]} scale={[1, 0.5, 23]} />
                <spotLight
                    color="#fff"
                    intensity={0.85}
                    position={[5, 1, 2.4]}
                    target-position={[0, 0, 0]}
                    distance={0}
                    angle={THREE.MathUtils.degToRad(35)}
                    penumbra={0.2}
                />
                <ambientLight intensity={0.35} />
                <directionalLight position={[-6, 2, 7]} castShadow intensity={2.35} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach={'shadow-camera'} args={[-10, 10, 10, -10]} far={20 + 2} />
                </directionalLight>
            </>
        ),
        [],
    );

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
            {backgrounds}
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
        </>
    );
});

export default Background;
