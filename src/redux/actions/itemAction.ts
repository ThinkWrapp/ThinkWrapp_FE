import { ShopItem } from '@/types/room';

export const SET_ROOM_ITEMS = 'SET_ROOM_ITEMS' as const;
export const SET_DRAGGED_ITEM = 'SET_DRAGGED_ITEM' as const;
export const SET_DRAGGED_ITEM_ROTATION = 'SET_DRAGGED_ITEM_ROTATION' as const;

export const setRoomItems = (payload: ShopItem[]) => {
    return {
        type: SET_ROOM_ITEMS,
        payload,
    };
};

export const setDraggedItem = (payload: null | number) => {
    return {
        type: SET_DRAGGED_ITEM,
        payload,
    };
};

export const setDraggedItemRotation = (payload: number) => {
    return {
        type: SET_DRAGGED_ITEM_ROTATION,
        payload,
    };
};
