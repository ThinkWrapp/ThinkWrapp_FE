import {
    RESET_AVATAR,
    RESET_USERNAME,
    SAVE_AVATAR,
    SAVE_USERNAME,
    resetAvatar,
    resetUserName,
    saveAvatar,
    saveUserName,
} from '../actions/avatarPersistAction';

type AvatarPersistAction =
    | ReturnType<typeof saveAvatar>
    | ReturnType<typeof resetAvatar>
    | ReturnType<typeof saveUserName>
    | ReturnType<typeof resetUserName>;

type AvatarState = {
    avatarUrl: string;
    saveUserName: string;
};

const initialState: AvatarState = {
    avatarUrl: '',
    saveUserName: '',
};

const avatarPersistReducer = (state = initialState, action: AvatarPersistAction) => {
    switch (action.type) {
        case SAVE_AVATAR:
            return {
                ...state,
                avatarUrl: action.payload.avatarUrl,
            };
        case RESET_AVATAR:
            return {
                ...state,
                avatarUrl: action.payload.avatarUrl,
            };
        case SAVE_USERNAME:
            return {
                ...state,
                saveUserName: action.payload.userName,
            };
        case RESET_USERNAME:
            return {
                ...state,
                saveUserName: action.payload.userName,
            };
        default:
            return state;
    }
};

export default avatarPersistReducer;
