import { useMemo, memo } from 'react';
import CanvasBackground from '../CanvasBackground';
import { Cloud, Environment } from '@react-three/drei';

const Background = memo(() => {
    const backgrounds = useMemo(
        () => (
            <>
                <CanvasBackground />
                <Cloud color="#c0c0dd" position={[0, 3, -150]} scale={[5, 3.3, 8]} />
                <ambientLight intensity={0.5} />
                <Environment preset="sunset" />
            </>
        ),
        [],
    );

    return backgrounds;
});

export default Background;
