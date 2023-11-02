import { RootState } from '@/redux/reducers';
import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { memo, useRef } from 'react';
import { useSelector } from 'react-redux';

const Camera = memo(() => {
    const controls = useRef<CameraControls | null>(null);
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);

    useFrame(({ scene }) => {
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
    });

    return (
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
    );
});

export default Camera;
