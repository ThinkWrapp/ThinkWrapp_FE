import Loader from '@/components/Loader';
import SelectAvatar from '@/components/MetaRoom/SelectAvatar';
import CanvasLayout from '@/layout/canvas';
import { useProgress } from '@react-three/drei';
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
            <CanvasLayout position={[0, 0, 10]}>
                <SelectAvatar />
            </CanvasLayout>
            <Loader loaded={loaded} />
        </>
    );
};

export default CharacterPage;
