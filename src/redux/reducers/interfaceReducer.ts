import {
    CLOSE_MONITOR,
    OPEN_MONITOR,
    SELECT_AVATAR_BUTTON_DISPLAY,
    avatarSelectButtonDisplay,
    closeMonitor,
    openMonitor,
} from '../actions/interfaceAction';

type InterfaceAction =
    | ReturnType<typeof openMonitor>
    | ReturnType<typeof closeMonitor>
    | ReturnType<typeof avatarSelectButtonDisplay>;

type InterfaceState = {
    monitorState: boolean;
    avatarButtonDisplay: string | null;
};

const initialState: InterfaceState = {
    monitorState: true,
    avatarButtonDisplay: null,
};

const interfaceReducer = (state = initialState, action: InterfaceAction) => {
    switch (action.type) {
        case OPEN_MONITOR:
            return {
                ...state,
                monitorState: action.payload.monitorState,
            };
        case CLOSE_MONITOR:
            return {
                ...state,
                monitorState: action.payload.monitorState,
            };
        case SELECT_AVATAR_BUTTON_DISPLAY:
            return {
                ...state,
                avatarButtonDisplay: action.payload.avatarButtonDisplay,
            };
        default:
            return state;
    }
};

export default interfaceReducer;
