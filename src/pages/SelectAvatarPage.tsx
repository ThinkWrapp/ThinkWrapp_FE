import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { SelectAvatar } from '@/components/SelectAvatar';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';

export default function SelectAvatarPage() {
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
}
