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
            </>
        ),
        [],
    );

    return <>{commonBackground}</>;
});

export default CanvasBackground;
