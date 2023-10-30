import { Cloud } from '@react-three/drei';
import { useMemo, memo } from 'react';
import * as THREE from 'three';

const Background = memo(() => {
    const backgrounds = useMemo(
        () => (
            <>
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
            </>
        ),
        [],
    );

    return backgrounds;
});

export default Background;
