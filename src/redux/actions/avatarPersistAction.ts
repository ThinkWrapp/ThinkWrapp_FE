export const SAVE_AVATAR = 'SAVE_AVATAR' as const;
export const RESET_AVATAR = 'RESET_AVATAR' as const;

export const saveAvatar = (avatar: string) => {
    return {
        type: SAVE_AVATAR,
        payload: {
            avatar,
        },
    };
};

export const resetAvatar = () => {
    return {
        type: RESET_AVATAR,
        payload: {
            avatar: '',
        },
    };
};
