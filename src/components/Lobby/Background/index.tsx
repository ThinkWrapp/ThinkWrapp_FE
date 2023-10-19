import { useRef, useEffect } from 'react';
import { CameraControls, Cloud, Stars, Sky } from '@react-three/drei';

export default function LobbyBackground() {
    const controls = useRef<CameraControls | null>(null);

    useEffect(() => {
        if (!controls.current) return;
        controls.current.setPosition(0, 8, 2);
        controls.current.setTarget(0, 8, 0);

        setTimeout(() => {
            if (!controls.current) return;

            controls.current.setPosition(0, 8, 2);
            controls.current.setTarget(0, 8, 0);
            controls.current.setPosition(0, 0, 2, true);
            controls.current.setTarget(0, 0, 0, true);
        }, 1000);

        return;
    }, []);
    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sky
                distance={45000}
                rayleigh={6}
                mieCoefficient={0.005}
                mieDirectionalG={0.9}
                inclination={0.46}
                azimuth={0.25}
            />
            {<Cloud color="#c0c0dd" position={[10, 3, 8]} scale={[3, 1.3, 23]} />}
            {<Cloud color="#c0c0dd" position={[-8, 4, 5]} scale={[1, 0.5, 23]} />}

            <ambientLight intensity={0.35} />
            <directionalLight position={[-6, 2, 7]} castShadow intensity={2.35} shadow-mapSize={[1024, 1024]}>
                <orthographicCamera attach={'shadow-camera'} args={[-10, 10, 10, -10]} far={20 + 2} />
            </directionalLight>
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
}
