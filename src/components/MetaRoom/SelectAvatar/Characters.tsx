import { useEffect, useState } from 'react';
import { CameraControls, useCursor } from '@react-three/drei';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { RootState } from '@/redux/reducers';
import { useThree } from '@react-three/fiber';
import { Man } from '@/components/3DModels/Man';
import { Woman } from '@/components/3DModels/Woman';
import SelectBox from './SelectBox';
import { AVATAR } from '@/constants/auth';
import { SELECTBOX_BEAUTIFUL_BACKGROUND, SELECTBOX_NICE_BACKGROUND } from '@/constants/route';
import { useResponsive } from '@/hooks/useResponsive';

type CharactersProps = {
    cameraControl: React.RefObject<CameraControls>;
};

const Characters = ({ cameraControl }: CharactersProps) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const scene = useThree((state) => state.scene);
    const device = useResponsive();

    useCursor(!!hovered && !avatarButtonDisplay);

    const hoverHandler = (value: string | null) => {
        setHovered(value);
    };

    useEffect(() => {
        if (avatarButtonDisplay) {
            const targetPosition = new THREE.Vector3();
            scene.getObjectByName(avatarButtonDisplay)?.getWorldPosition(targetPosition);

            avatarButtonDisplay === AVATAR.gender.male
                ? cameraControl.current?.setLookAt(
                      -1.5,
                      0,
                      5,
                      targetPosition.x,
                      targetPosition.y,
                      targetPosition.z,
                      true,
                  )
                : cameraControl.current?.setLookAt(
                      1.5,
                      0,
                      5,
                      targetPosition.x,
                      targetPosition.y,
                      targetPosition.z,
                      true,
                  );
        } else {
            (cameraControl.current as CameraControls).setLookAt(0, 0, 10, 0, 0, 0, true);
        }
    }, [avatarButtonDisplay]);

    return (
        <>
            {(device === 'mobile' || device === 'tablet') && (
                <>
                    <SelectBox
                        name={AVATAR.gender.male}
                        texture={SELECTBOX_NICE_BACKGROUND}
                        active={avatarButtonDisplay as unknown as string}
                        setHovered={hoverHandler}
                        position-y={1}
                        scale-x={0.85}
                        scale-y={0.65}
                    >
                        <Man
                            nameSpace="select"
                            scale={1.1}
                            position-y={-1}
                            hovered={hovered === AVATAR.gender.male}
                            avatarButtonDisplay={avatarButtonDisplay === AVATAR.gender.male}
                        />
                    </SelectBox>
                    <SelectBox
                        name={AVATAR.gender.female}
                        texture={SELECTBOX_BEAUTIFUL_BACKGROUND}
                        active={avatarButtonDisplay as unknown as string}
                        setHovered={hoverHandler}
                        position-y={-1}
                        scale-x={0.85}
                        scale-y={0.65}
                    >
                        <Woman
                            nameSpace="select"
                            scale={1}
                            position-y={-1}
                            hovered={hovered === AVATAR.gender.female}
                            avatarButtonDisplay={avatarButtonDisplay === AVATAR.gender.female}
                        />
                    </SelectBox>
                </>
            )}
            {device === 'desktop' && (
                <>
                    <SelectBox
                        name={AVATAR.gender.male}
                        texture={SELECTBOX_NICE_BACKGROUND}
                        active={avatarButtonDisplay as unknown as string}
                        setHovered={hoverHandler}
                        position-x={-1.5}
                    >
                        <Man
                            nameSpace="select"
                            scale={1}
                            position-y={-1}
                            hovered={hovered === AVATAR.gender.male}
                            avatarButtonDisplay={avatarButtonDisplay === AVATAR.gender.male}
                        />
                    </SelectBox>
                    <SelectBox
                        name={AVATAR.gender.female}
                        texture={SELECTBOX_BEAUTIFUL_BACKGROUND}
                        active={avatarButtonDisplay as unknown as string}
                        setHovered={hoverHandler}
                        position-x={1.5}
                    >
                        <Woman
                            nameSpace="select"
                            scale={1}
                            position-y={-1}
                            hovered={hovered === AVATAR.gender.female}
                            avatarButtonDisplay={avatarButtonDisplay === AVATAR.gender.female}
                        />
                    </SelectBox>
                </>
            )}
        </>
    );
};

export default Characters;
