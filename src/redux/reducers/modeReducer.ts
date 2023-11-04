import { BUILD_MODE, RESET_MODE, SHOP_MODE, buildMode, resetMode, shopMode } from '../actions/modeAction';

type ModeAction = ReturnType<typeof shopMode> | ReturnType<typeof buildMode> | ReturnType<typeof resetMode>;
type ModeState = {
    mode: string;
};

const initialState: ModeState = {
    mode: '',
};

const modeReducer = (state = initialState, action: ModeAction) => {
    switch (action.type) {
        case SHOP_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        case BUILD_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        case RESET_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
};

export default modeReducer;
