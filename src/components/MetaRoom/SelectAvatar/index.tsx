import { CameraControls } from '@react-three/drei';
import { useRef } from 'react';
import Characters from './Characters';
import Background from './Background';

const SelectAvatar = () => {
    const controlsRef = useRef<CameraControls | null>(null);

    return (
        <>
            <Background />
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
