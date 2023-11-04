import { ShopItem } from '@/types/room';
import {
    SET_DRAGGED_ITEM,
    SET_DRAGGED_ITEM_ROTATION,
    SET_ROOM_ITEMS,
    setDraggedItem,
    setDraggedItemRotation,
    setRoomItems,
} from '../actions/itemAction';

type ItemAction =
    | ReturnType<typeof setRoomItems>
    | ReturnType<typeof setDraggedItem>
    | ReturnType<typeof setDraggedItemRotation>;
type ItemState = {
    roomItems: ShopItem[];
    draggedItem: null | number;
    draggedItemRotation: number;
};

const initialState: ItemState = {
    roomItems: [],
    draggedItem: null,
    draggedItemRotation: 0,
};

const roomItemReducer = (state = initialState, action: ItemAction) => {
    switch (action.type) {
        case SET_ROOM_ITEMS:
            return {
                ...state,
                roomItems: action.payload,
            };
        case SET_DRAGGED_ITEM:
            return {
                ...state,
                draggedItem: action.payload,
            };
        case SET_DRAGGED_ITEM_ROTATION:
            return {
                ...state,
                draggedItemRotation: action.payload,
            };
        default:
            return state;
    }
};

export default roomItemReducer;
