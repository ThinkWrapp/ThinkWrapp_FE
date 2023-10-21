import { CLOSE_MONITOR, OPEN_MONITOR, closeMonitor, openMonitor } from '../actions/interfaceAction';

type InterfaceAction = ReturnType<typeof openMonitor> | ReturnType<typeof closeMonitor>;

const initialState = {
    monitorState: true,
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
        default:
            return state;
    }
};

export default interfaceReducer;
