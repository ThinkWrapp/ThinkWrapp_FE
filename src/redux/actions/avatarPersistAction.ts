export const SAVE_AVATAR = 'SAVE_AVATAR' as const;
export const RESET_AVATAR = 'RESET_AVATAR' as const;
export const SAVE_USERNAME = 'SAVE_USERNAME' as const;
export const RESET_USERNAME = 'RESET_USERNAME' as const;

export const saveAvatar = (avatarUrl: string) => {
    return {
        type: SAVE_AVATAR,
        payload: {
            avatarUrl,
        },
    };
};

export const resetAvatar = () => {
    return {
        type: RESET_AVATAR,
        payload: {
            avatarUrl: '',
        },
    };
};

export const saveUserName = (userName: string) => {
    return {
        type: SAVE_USERNAME,
        payload: {
            userName,
        },
    };
};

export const resetUserName = () => {
    return {
        type: RESET_USERNAME,
        payload: {
            userName: '',
        },
    };
};
