import * as THREE from 'three';
import { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { GridMethodsType, useGrid } from '@/hooks/useGrid';
import Avatar from '../../3DModels/Avatar';
import Ground from './Ground';
import Background from './Background';
import { useCursor } from '@react-three/drei';
import { socketMove } from '@/redux/actions/socketAciton';
import { ThreeEvent, useThree } from '@react-three/fiber';
import Camera from './Camera';

const Room = () => {
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const grid = useGrid() as GridMethodsType;
    const dispatch = useDispatch();
    const scene = useThree((state) => state.scene);
    const [onFloor, setOnFloor] = useState(false);
    useCursor(onFloor);

    if (!roomJoined || !grid) return null;
    const { map, characters, id } = roomJoined;
    const { gridToVector3, vector3ToGrid } = grid;

    const onPlaneClicked = (e: ThreeEvent<MouseEvent>) => {
        const character = scene.getObjectByName(`character-${id}`);
        if (!character) {
            return;
        }

        dispatch(socketMove(vector3ToGrid(character.position), vector3ToGrid(e.point)));
    };

    return (
        <>
            <Background />
            <Camera />
            <mesh
                rotation-x={-Math.PI / 2}
                position-y={-0.04}
                onClick={onPlaneClicked}
                onPointerEnter={() => setOnFloor(true)}
                onPointerLeave={() => setOnFloor(false)}
                position-x={(map.size as number[])[0] / 2}
                position-z={(map.size as number[])[1] / 2}
                receiveShadow
            >
                <planeGeometry args={[map.size[0], map.size[1]]} />
                <meshStandardMaterial color="#f0f0f0" />
            </mesh>
            <Ground />
            {characters.map((character) => (
                <Suspense key={character.session + '-' + character.id}>
                    <group>
                        <Avatar
                            id={character.id}
                            position={gridToVector3(character.position as number[]) as THREE.Vector3}
                            avatarUrl={character.avatarUrl}
                        />
                    </group>
                </Suspense>
            ))}
        </>
    );
};

export default Room;
