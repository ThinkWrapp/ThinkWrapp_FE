import Loader from '@/components/Loader';
import SelectAvatar from '@/components/MetaRoom/SelectAvatar';
import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const CharacterPage = () => {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);
    return (
        <>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                <SelectAvatar />
            </Canvas>
            <Loader loaded={loaded} />
        </>
    );
};

export default CharacterPage;
