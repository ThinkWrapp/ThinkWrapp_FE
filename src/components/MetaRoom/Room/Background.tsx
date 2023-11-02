import { useMemo, memo } from 'react';
import CanvasBackground from '../CanvasBackground';

const Background = memo(() => {
    const backgrounds = useMemo(
        () => (
            <>
                <CanvasBackground />
                <ambientLight intensity={0.45} />
                <directionalLight position={[4, 4, -4]} castShadow intensity={0.75} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach={'shadow-camera'} args={[-10, 10, 10, -10]} far={20 + 2} />
                </directionalLight>
            </>
        ),
        [],
    );

    return <>{backgrounds}</>;
});

export default Background;
