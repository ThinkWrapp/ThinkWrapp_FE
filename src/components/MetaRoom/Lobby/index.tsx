import { AccumulativeShadows, Cloud, RandomizedLight } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import ThinkWrappWorld3DText from './ThinkWrappWorld3DText';
import { King } from '@/components/3DModels/King';
import { Castle } from '@/components/3DModels/Castle';
import Ground from './Ground';
import Monitor from './Monitor';
import LobbyAvatar from './LobbyAvatar';

const Lobby = () => {
    const accumulativeShadows = useMemo(
        () => (
            <AccumulativeShadows temporal frames={30} alphaTest={0.85} scale={28} position={[0, 0, 0]}>
                <RandomizedLight amount={3} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -20]} />
                <RandomizedLight amount={1} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -20]} />
            </AccumulativeShadows>
        ),
        [],
    );

    const clouds = useMemo(
        () => (
            <>
                <Cloud color="#c0c0dd" position={[10, 3, 8]} scale={[3, 1.3, 23]} />
                <Cloud color="#c0c0dd" position={[-8, 4, 5]} scale={[1, 0.5, 23]} />
            </>
        ),
        [],
    );

    return (
        <>
            {clouds}
            <spotLight
                color="#fff"
                intensity={0.45}
                position={[5, 1, 2.4]}
                target-position={[0, 0, 0]}
                distance={0}
                angle={THREE.MathUtils.degToRad(35)}
                penumbra={0.2}
            />
            <group position-y={-1.5}>
                <Monitor />
                <group position-z={-8} rotation-y={Math.PI / 6}>
                    <ThinkWrappWorld3DText />
                    <King />
                    <Castle />
                </group>
                <Ground />
                {accumulativeShadows}
                <Suspense>
                    <LobbyAvatar />
                </Suspense>
            </group>
        </>
    );
};

export default Lobby;
