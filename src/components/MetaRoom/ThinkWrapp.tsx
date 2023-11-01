import { CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Bloom, EffectComposer, N8AO } from '@react-three/postprocessing';
import CanvasBackground from './CanvasBackground';
import Lobby from './Lobby';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { ROOM } from '@/redux/actions/RoutePerstistAction';
import Room from './Room';
import { useFrame } from '@react-three/fiber';

type ThinkWrappProps = {
    loaded: boolean;
};

export default function ThinkWrapp({ loaded }: ThinkWrappProps) {
    const controls = useRef<CameraControls | null>(null);
    const routeState = useSelector((state: RootState) => state.route.routeState);
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);

    useEffect(() => {
        if (!controls.current) return;
        controls.current.setPosition(0, 8, 2);
        controls.current.setTarget(0, 8, 0);

        if (loaded && routeState !== ROOM) {
            controls.current.setPosition(0, 8, 2);
            controls.current.setTarget(0, 8, 0);
            controls.current.setPosition(0, 0, 2, true);
            controls.current.setTarget(0, 0, 0, true);
            return;
        }
    }, [loaded, routeState]);

    useFrame(({ scene }) => {
        if (routeState === ROOM) {
            if (!roomJoined?.id) {
                return;
            }

            const character = scene.getObjectByName(`character-${roomJoined.id}`);
            if (!character) {
                return;
            }
            controls.current?.setTarget(character.position.x, 0, character.position.z, true);
            controls.current?.setPosition(
                character.position.x + 8,
                character.position.y + 8,
                character.position.z + 8,
                true,
            );
        }
    });

    return (
        <>
            <EffectComposer>
                <N8AO intensity={0.42} />
                <Bloom luminanceThreshold={0.85} intensity={1.2} luminanceSmoothing={0.55} mipmapBlur={true} />
            </EffectComposer>
            <CanvasBackground />
            <CameraControls
                ref={controls}
                mouseButtons={{
                    left: 0,
                    middle: 0,
                    right: 0,
                    wheel: 0,
                }}
                touches={{
                    one: 0,
                    two: 0,
                    three: 0,
                }}
            />
            {!routeState && <Lobby />}
            {routeState === ROOM && <Room />}
        </>
    );
}
