import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loader from '@/components/Loader';
import CanvasBackground from '@/components/MetaRoom/CanvasBackground';
import SelectAvatar from '@/components/MetaRoom/SelectAvatar';
import ThinkWrapp from '@/components/MetaRoom/ThinkWrapp';
import { RootState } from '@/redux/reducers';
import { CHARACTER } from '@/redux/actions/RoutePerstistAction';

const MetaPage = () => {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();
    const routeState = useSelector((state: RootState) => state.route.routeState);

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <>
            {routeState !== CHARACTER && (
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
            )}
            {routeState === CHARACTER && (
                <Canvas
                    shadows
                    camera={{
                        position: [0, 8, 2],
                        fov: 30,
                    }}
                >
                    <color attach="background" args={['#ffffff']} />
                    <CanvasBackground />
                    <SelectAvatar />
                </Canvas>
            )}
            <Loader loaded={loaded} />
        </>
    );
};

export default MetaPage;
