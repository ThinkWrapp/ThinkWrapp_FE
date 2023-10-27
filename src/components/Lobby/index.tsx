import { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { AccumulativeShadows, RandomizedLight, useFont } from '@react-three/drei';
import { Castle } from '../3DModels/Castle';
import { King } from '../3DModels/King';
import LobbyBackground from './Background';
import Ground from './Ground';
import ThinkWrappWorld3DText from './ThinkWrappWorld3DText';
import LobbyAvatar from './Avatar';
import MonitorRoom from './MonitorRoom';

type LobbyProps = {
    loaded: boolean;
};

export default function Lobby({ loaded }: LobbyProps) {
    const accumulativeShadows = useMemo(
        () => (
            <AccumulativeShadows temporal frames={30} alphaTest={0.85} scale={28} position={[0, 0, 0]}>
                <RandomizedLight amount={3} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -20]} />
                <RandomizedLight amount={1} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -20]} />
            </AccumulativeShadows>
        ),
        [],
    );

    const goldenRatio = Math.min(1, window.innerWidth / 1600);
    const isMobile = window.innerWidth < 1024;

    return (
        <>
            <LobbyBackground loaded={loaded} />
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
                <MonitorRoom isMobile={isMobile} goldenRatio={goldenRatio} />
                <group position-z={-8} rotation-y={Math.PI / 6}>
                    <ThinkWrappWorld3DText />
                    <King />
                    <Castle />
                </group>
                <Ground />
                {accumulativeShadows}
                <Suspense>
                    <LobbyAvatar isMobile={isMobile} goldenRatio={goldenRatio} />
                </Suspense>
            </group>
        </>
    );
}

useFont.preload('/fonts/Inter_Bold.json');
