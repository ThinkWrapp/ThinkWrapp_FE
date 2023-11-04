import { GridMethodsType, useGrid } from '@/hooks/useGrid';
import { setDraggedItem, setRoomItems } from '@/redux/actions/itemAction';
import { BUILD_MODE } from '@/redux/actions/modeAction';
import { socketMove } from '@/redux/actions/socketAciton';
import { RootState } from '@/redux/reducers';
import { useCursor } from '@react-three/drei';
import { ThreeEvent, useThree } from '@react-three/fiber';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type PlayerMoveGroundProps = {
    canDrop: boolean;
    onDragPosition: (newPosition: number[]) => void;
    dragPosition?: number[];
};

const PlayerMoveGround = ({ canDrop, onDragPosition, dragPosition }: PlayerMoveGroundProps) => {
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const roomItems = useSelector((state: RootState) => state.item.roomItems);
    const draggedItem = useSelector((state: RootState) => state.item.draggedItem);
    const draggedItemRotation = useSelector((state: RootState) => state.item.draggedItemRotation);
    const mode = useSelector((state: RootState) => state.mode.mode);
    const grid = useGrid() as GridMethodsType;
    const scene = useThree((state) => state.scene);
    const [onFloor, setOnFloor] = useState(false);
    const dispatch = useDispatch();
    useCursor(onFloor);

    if (!roomJoined || !grid) return null;
    const { map, id } = roomJoined;
    const { vector3ToGrid } = grid;

    const onPlaneClicked = (e: ThreeEvent<MouseEvent>) => {
        if (!mode) {
            const character = scene.getObjectByName(`character-${id}`);
            if (!character) {
                return;
            }

            dispatch(socketMove(vector3ToGrid(character.position), vector3ToGrid(e.point)));
        } else {
            if (draggedItem !== null) {
                if (canDrop) {
                    const newItems = [...roomItems];
                    delete newItems[draggedItem].tmp;
                    newItems[draggedItem].gridPosition = vector3ToGrid(e.point);
                    newItems[draggedItem].rotation = draggedItemRotation;
                    dispatch(setRoomItems(newItems));
                }
                dispatch(setDraggedItem(null));
            }
        }
    };

    return (
        <mesh
            rotation-x={-Math.PI / 2}
            position-y={-0.04}
            onClick={onPlaneClicked}
            onPointerEnter={() => setOnFloor(true)}
            onPointerLeave={() => setOnFloor(false)}
            onPointerMove={(e) => {
                if (mode !== BUILD_MODE) {
                    return;
                }
                const newPosition = vector3ToGrid(e.point);
                if (!dragPosition || newPosition[0] !== dragPosition[0] || newPosition[1] !== dragPosition[1]) {
                    onDragPosition(newPosition);
                }
            }}
            position-x={(map.size as number[])[0] / 2}
            position-z={(map.size as number[])[1] / 2}
            receiveShadow
        >
            <planeGeometry args={[map.size[0], map.size[1]]} />
            <meshStandardMaterial color="#f0f0f0" />
        </mesh>
    );
};
export default PlayerMoveGround;
