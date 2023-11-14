import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { buildMode } from '@/redux/actions/modeAction';
import { setDraggedItem, setDraggedItemRotation, setRoomItems } from '@/redux/actions/itemAction';
import { RootState } from '@/redux/reducers';
import { JoinedRoomData, ShopItem as MyShopItem } from '@/types/room';
import ShopItem from '@/components/3DModels/ShopItem';
import { useTouch } from '@/hooks/useTouch';
import { isMobile } from '@/utils/getDeviceConfig';

const Shop = () => {
    const items = useSelector((state: RootState) => state.socket.items);
    const roomItems = useSelector((state: RootState) => state.item.roomItems);
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const dispatch = useDispatch();
    const mobile = isMobile();

    const maxX = useRef(0);

    const { map } = roomJoined as JoinedRoomData;

    const onItemSelected = (item: MyShopItem) => {
        dispatch(buildMode());

        const newItem = [...roomItems, { ...item, gridPosition: [0, 0], tmp: true }];
        dispatch(setRoomItems(newItem as MyShopItem[]));
        dispatch(setDraggedItem(roomItems.length));
        dispatch(setDraggedItemRotation(item.rotation || 0));
    };

    const shopItems = useMemo(() => {
        let x = 0;
        return Object.values(items as unknown as MyShopItem[]).map((item, index) => {
            const xPos = x;
            x += item.size[0] / map.gridDivision + 1;
            maxX.current = x;
            return (
                <ShopItem
                    key={index}
                    position-x={xPos}
                    item={item}
                    onClick={(e) => {
                        e.stopPropagation();
                        onItemSelected(item);
                    }}
                />
            );
        });
    }, [items]);

    const shopContainer = useRef<THREE.Group | null>(null);
    const scrollData = useScroll();
    const { offset } = useTouch();
    const scale = 0.42;
    useFrame(() => {
        mobile
            ? ((shopContainer.current as THREE.Group).position.x = -offset * maxX.current * scale)
            : ((shopContainer.current as THREE.Group).position.x = -scrollData.offset * maxX.current * scale);
    });
    return (
        <group ref={shopContainer} scale={scale}>
            {shopItems}
        </group>
    );
};

export default Shop;
