import { CameraControls, Cloud } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import Characters from './Characters';

const SelectAvatar = () => {
    const controlsRef = useRef<CameraControls | null>(null);
    const cloud = useMemo(() => <Cloud color="#c0c0dd" position={[0, 3, -150]} scale={[5, 3.3, 8]} />, []);

    return (
        <>
            {cloud}
            <CameraControls
                ref={controlsRef}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 9}
                minAzimuthAngle={Math.PI / -9}
                minDistance={5}
                maxDistance={10}
            />
            <Characters cameraControl={controlsRef} />
        </>
    );
};

export default SelectAvatar;
