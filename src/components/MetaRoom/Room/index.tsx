import { ThreeEvent, useThree } from '@react-three/fiber';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../3DModels/Avatar';
import Ground from './Ground';
import Background from './Background';
import Camera from './Camera';
import { RootState } from '@/redux/reducers';
import { socketJoinRoom, socketLeaveRoom, socketMove } from '@/redux/actions/socketAciton';
import { GridMethodsType, useGrid } from '@/hooks/useGrid';
import { useNavigate } from 'react-router-dom';
import { Room } from '@/types/room';

const Room = () => {
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const grid = useGrid() as GridMethodsType;
    const dispatch = useDispatch();
    const scene = useThree((state) => state.scene);
    const navigate = useNavigate();
    const [onFloor, setOnFloor] = useState(false);
    useCursor(onFloor);

    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const roomId = useSelector((state: RootState) => state.room.roomId);
    const rooms = useSelector((state: RootState) => state.socket.rooms);

    useEffect(() => {
        // 새로고침 시 재접속
        if (roomJoined) return;
        dispatch(socketJoinRoom(roomId, avatarUrl));
    }, [roomJoined]);

    useEffect(() => {
        if (!rooms) return;
        const findRoom = rooms.find((room: Room) => {
            return room.id === roomId;
        });

        if (!findRoom) {
            dispatch(socketLeaveRoom());
            navigate('/');
        }
    }, [rooms]);

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
