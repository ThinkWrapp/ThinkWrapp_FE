import * as THREE from 'three';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { socketLoadRoom } from '@/redux/actions/socketAciton';
import { GridMethodsType, useGrid } from '@/hooks/useGrid';
import Avatar from '../../3DModels/Avatar';
import Ground from './Ground';
import Background from './Background';

const Room = () => {
    const dispatch = useDispatch();
    const roomId = useSelector((state: RootState) => state.room.roomId);
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const grid = useGrid() as GridMethodsType;

    useEffect(() => {
        dispatch(socketLoadRoom(roomId));
    }, [roomId]);

    if (!roomJoined || !grid) return null;
    const { map, characters } = roomJoined;
    const { gridToVector3 } = grid;

    return (
        <>
            <Background />
            <mesh
                rotation-x={-Math.PI / 2}
                position-y={-0.002}
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
