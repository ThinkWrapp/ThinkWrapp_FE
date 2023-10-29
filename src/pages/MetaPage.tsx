import Loader from '@/components/Loader';
import ThinkWrapp from '@/components/MetaRoom/ThinkWrapp';
import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const MetaPage = () => {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <>
            <Canvas
                shadows
                camera={{
                    position: [0, 8, 2],
                    fov: 30,
                }}
            >
                <color attach="background" args={['#ffffff']} />
                <ThinkWrapp loaded={loaded} />
            </Canvas>
            <Loader loaded={loaded} />
        </>
    );
};

export default MetaPage;
