import { Grid } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ground from './Ground';
import Background from './Background';
import Camera from './Camera';
import { RootState } from '@/redux/reducers';
import { socketItemsUpdate, socketJoinRoom, socketLeaveRoom } from '@/redux/actions/socketAciton';
import { useNavigate } from 'react-router-dom';
import { Room } from '@/types/room';
import Shop from './Shop';
import { BUILD_MODE, SHOP_MODE } from '@/redux/actions/modeAction';
import PlayerMoveGround from './PlayerMoveGround';
import { setDraggedItem, setDraggedItemRotation, setRoomItems } from '@/redux/actions/itemAction';
import { Item } from '@/components/3DModels/Item';
import Characters from './Characters';

const Room = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const roomId = useSelector((state: RootState) => state.room.roomId);
    const rooms = useSelector((state: RootState) => state.socket.rooms);
    const mode = useSelector((state: RootState) => state.mode.mode);
    const roomItems = useSelector((state: RootState) => state.item.roomItems);
    const draggedItem = useSelector((state: RootState) => state.item.draggedItem);
    const draggedItemRotation = useSelector((state: RootState) => state.item.draggedItemRotation);

    const [canDrop, setCanDrop] = useState(false);
    const [dragPosition, setDragPosition] = useState([0, 0]);

    const dragPositionHandelr = (newPosition: number[]) => {
        setDragPosition(newPosition);
    };

    useEffect(() => {
        if (!roomJoined?.map.items) return;
        dispatch(setRoomItems(roomJoined?.map.items));
    }, [roomJoined?.map.items]);

    useEffect(() => {
        if (!mode) {
            dispatch(socketItemsUpdate(roomItems));
        }
    }, [mode]);

    useEffect(() => {
        if (draggedItem === null) {
            const prevItems = [...roomItems];
            const updateItems = prevItems.filter((item) => !item.tmp);
            dispatch(setRoomItems(updateItems));
        }
    }, [draggedItem]);

    useEffect(() => {
        if (!roomJoined?.map) return;
        if (draggedItem === null) return;
        const { map } = roomJoined;
        const item = roomItems[draggedItem];

        const width = draggedItemRotation === 1 || draggedItemRotation === 3 ? item?.size[1] : item?.size[0];
        const height = draggedItemRotation === 1 || draggedItemRotation === 3 ? item?.size[0] : item?.size[1];

        let droppable = true;

        if (dragPosition[0] < 0 || dragPosition[0] + width > map.size[0] * map.gridDivision) {
            droppable = false;
        }
        if (dragPosition[1] < 0 || dragPosition[1] + height > map.size[1] * map.gridDivision) {
            droppable = false;
        }
        if (!item?.walkable && !item?.wall) {
            roomItems.forEach((otherItem, idx) => {
                // 현재 물건 위치 제외
                if (idx === draggedItem) {
                    return;
                }

                // 벽이나 바닥 위치 제외
                if (otherItem.walkable || otherItem.wall) {
                    return;
                }

                // 겹치는지 확인
                const otherWidth =
                    otherItem.rotation === 1 || otherItem.rotation === 3 ? otherItem.size[1] : otherItem.size[0];
                const otherHeight =
                    otherItem.rotation === 1 || otherItem.rotation === 3 ? otherItem.size[0] : otherItem.size[1];
                if (otherItem.gridPosition) {
                    if (
                        dragPosition[0] < otherItem.gridPosition[0] + otherWidth &&
                        dragPosition[0] + width > otherItem.gridPosition[0] &&
                        dragPosition[1] < otherItem.gridPosition[1] + otherHeight &&
                        dragPosition[1] + height > otherItem.gridPosition[1]
                    ) {
                        droppable = false;
                    }
                }
            });
        }

        setCanDrop(droppable);
    }, [dragPosition, draggedItem, draggedItemRotation, roomItems, roomJoined?.map]);

    useEffect(() => {
        // 새로고침 시 재접속
        if (roomJoined) return;
        dispatch(socketJoinRoom(roomId, avatarUrl));
    }, [roomJoined]);

    useEffect(() => {
        // 방이 삭제되었을 때 로비로 이동
        if (!rooms) return;
        const findRoom = rooms.find((room: Room) => {
            return room.id === roomId;
        });

        if (!findRoom) {
            dispatch(socketLeaveRoom());
            navigate('/');
        }
    }, [rooms]);

    if (!roomJoined) return null;
    const { map } = roomJoined;

    return (
        <>
            <Background />
            <Camera />
            {mode === SHOP_MODE && <Shop />}
            {mode !== SHOP_MODE &&
                (mode === BUILD_MODE ? roomItems : map.items).map((item, idx) => (
                    <Item
                        key={`${item.name}-${idx}`}
                        item={item}
                        onClick={() => {
                            if (mode === BUILD_MODE) {
                                dispatch(setDraggedItem(draggedItem === null ? idx : draggedItem));
                                dispatch(setDraggedItemRotation(item.rotation || 0));
                            }
                        }}
                        isDragging={draggedItem === idx}
                        dragPosition={dragPosition}
                        dragRotation={draggedItemRotation}
                        canDrop={canDrop}
                    />
                ))}
            {mode && <Grid infiniteGrid fadeDistance={50} fadeStrength={5} />}
            {mode !== SHOP_MODE && (
                <PlayerMoveGround canDrop={canDrop} onDragPosition={dragPositionHandelr} dragPosition={dragPosition} />
            )}
            {!mode && (
                <>
                    <Ground />
                    <Characters />
                </>
            )}
        </>
    );
};

export default Room;
