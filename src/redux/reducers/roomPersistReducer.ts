import { REMOVE_ROOM, SAVE_ROOM, removeRoom, saveRoom } from '../actions/roomPersistAction';

type RoomPersistAction = ReturnType<typeof saveRoom> | ReturnType<typeof removeRoom>;

type RoomState = {
    roomId: string;
};

const initialState: RoomState = {
    roomId: '',
};

const roomPersistReducer = (state = initialState, action: RoomPersistAction) => {
    switch (action.type) {
        case SAVE_ROOM:
            return {
                ...state,
                roomId: action.payload.roomId,
            };
        case REMOVE_ROOM:
            return {
                ...state,
                roomId: '',
            };
        default:
            return state;
    }
};

export default roomPersistReducer;
