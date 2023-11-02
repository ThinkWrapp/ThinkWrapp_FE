import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, N8AO } from "@react-three/postprocessing";
import Lobby from "@/components/MetaRoom/Lobby";
import Loader from "@/components/Loader";

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
            <Canvas
                shadows
                camera={{
                    position: [0, 8, 2],
                    fov: 30,
                }}
            >
                <color attach="background" args={['#ffffff']} />
                <Lobby loaded={loaded} />
                <EffectComposer>
                    <N8AO intensity={0.42} />
                    <Bloom luminanceThreshold={0.85} intensity={1.2} luminanceSmoothing={0.55} mipmapBlur={true} />
                </EffectComposer>
            </Canvas>
            <Loader loaded={loaded} />
        </>
    );
}

export default LobbyPage;