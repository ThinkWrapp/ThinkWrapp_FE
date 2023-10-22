import { RESET_AVATAR, SAVE_AVATAR, resetAvatar, saveAvatar } from '../actions/avatarPersistAction';

type AvatarPersistAction = ReturnType<typeof saveAvatar> | ReturnType<typeof resetAvatar>;

type AvatarState = {
    avatarState: string;
};

const initialState: AvatarState = {
    avatarState: '',
};

const avatarPersistReducer = (state = initialState, action: AvatarPersistAction) => {
    switch (action.type) {
        case SAVE_AVATAR:
            return {
                ...state,
                avatarState: action.payload.avatar,
            };
        case RESET_AVATAR:
            return {
                ...state,
                avatarState: action.payload.avatar,
            };
        default:
            return state;
    }
};

export default avatarPersistReducer;
