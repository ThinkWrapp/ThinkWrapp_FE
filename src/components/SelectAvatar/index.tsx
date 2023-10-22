import { CameraControls, useCursor } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Man } from '../3DModels/Man';
import { Woman } from '../3DModels/Woman';
import AvatarStage from './AvatarStage';
import Background from './Background';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { AVATAR } from '@/constants/auth';

export const SelectAvatar = () => {
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const [hovered, setHovered] = useState<string | null>(null);
    useCursor(!!hovered);

    const controlsRef = useRef<CameraControls | null>(null);
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        if (avatarButtonDisplay) {
            const targetPosition = new THREE.Vector3();
            scene.getObjectByName(avatarButtonDisplay)?.getWorldPosition(targetPosition);

            avatarButtonDisplay === AVATAR.gender.male
                ? (controlsRef.current as CameraControls).setLookAt(
                      -1.5,
                      0,
                      5,
                      targetPosition.x,
                      targetPosition.y,
                      targetPosition.z,
                      true,
                  )
                : (controlsRef.current as CameraControls).setLookAt(
                      1.5,
                      0,
                      5,
                      targetPosition.x,
                      targetPosition.y,
                      targetPosition.z,
                      true,
                  );
        } else {
            (controlsRef.current as CameraControls).setLookAt(0, 0, 10, 0, 0, 0, true);
        }
    }, [avatarButtonDisplay]);

    return (
        <>
            <Background />
            <CameraControls
                ref={controlsRef}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 9}
                minAzimuthAngle={Math.PI / -9}
                minDistance={5}
                maxDistance={10}
            />
            <AvatarStage
                name="남자"
                texture={'textures/characterBG/nice_space_city.jpg'}
                position-x={-1.5}
                active={avatarButtonDisplay as unknown as string}
                setHovered={setHovered}
            >
                <Man
                    scale={1}
                    position-y={-1}
                    hovered={hovered === AVATAR.gender.male}
                    avatarButtonDisplay={avatarButtonDisplay === AVATAR.gender.male}
                />
            </AvatarStage>
            <AvatarStage
                texture={'textures/characterBG/beautiful_space_city.jpg'}
                name="여자"
                position-x={1.5}
                active={avatarButtonDisplay as unknown as string}
                setHovered={setHovered}
            >
                <Woman
                    scale={1}
                    position-y={-1}
                    hovered={hovered === AVATAR.gender.female}
                    avatarButtonDisplay={avatarButtonDisplay === AVATAR.gender.female}
                />
            </AvatarStage>
        </>
    );
};
