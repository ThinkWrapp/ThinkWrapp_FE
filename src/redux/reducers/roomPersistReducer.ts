import { SAVE_ROOM, saveRoom } from '../actions/roomPersistAction';

type RoomPersistAction = ReturnType<typeof saveRoom>;

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
        default:
            return state;
    }
};

export default roomPersistReducer;
