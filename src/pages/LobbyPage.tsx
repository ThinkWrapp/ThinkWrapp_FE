import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Lobby from '@/components/MetaRoom/Lobby';
import Loader from '@/components/Loader';
import CanvasLayout from '@/layout/canvas';
import Navbar from '@/components/Navbar';

const LobbyPage = () => {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <>
            <Navbar />
            <CanvasLayout>
                <color attach="background" args={['#ffffff']} />
                <Lobby loaded={loaded} />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.85} intensity={1.2} luminanceSmoothing={0.55} mipmapBlur={true} />
                </EffectComposer>
            </CanvasLayout>
            <Loader loaded={loaded} />
        </>
    );
};

export default LobbyPage;
