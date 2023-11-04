import { BUILD_MODE, SHOP_MODE } from '@/redux/actions/modeAction';
import { RootState } from '@/redux/reducers';
import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Camera = memo(() => {
    const controls = useRef<CameraControls | null>(null);
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const mode = useSelector((state: RootState) => state.mode.mode);

    useEffect(() => {
        if (mode === SHOP_MODE) {
            controls.current?.setPosition(0, 1, 6, true);
            controls.current?.setTarget(0, 0, 0, true);
            return;
        }

        if (mode === BUILD_MODE) {
            controls.current?.setPosition(14, 10, 14, true);
            controls.current?.setTarget(3.5, 0, 3.5, true);
            return;
        }
    }, [mode]);

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
