import { RESET_AVATAR, SAVE_AVATAR, resetAvatar, saveAvatar } from '../actions/avatarPersistAction';

type AvatarPersistAction = ReturnType<typeof saveAvatar> | ReturnType<typeof resetAvatar>;

type AvatarState = {
    avatarUrl: string;
};

const initialState: AvatarState = {
    avatarUrl: '',
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
        default:
            return state;
    }
};

export default avatarPersistReducer;
