import { Sky, Stars } from '@react-three/drei';
import { memo, useMemo } from 'react';

const CanvasBackground = memo(function () {
    const commonBackground = useMemo(
        () => (
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

                <ambientLight intensity={0.35} />
                <directionalLight position={[-6, 2, 7]} castShadow intensity={2.35} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach={'shadow-camera'} args={[-10, 10, 10, -10]} far={20 + 2} />
                </directionalLight>
            </>
        ),
        [],
    );

    return <>{commonBackground}</>;
});

export default CanvasBackground;
