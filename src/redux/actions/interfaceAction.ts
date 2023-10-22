export const OPEN_MONITOR = 'OPEN_MONITOR' as const;
export const CLOSE_MONITOR = 'CLOSE_MONITOR' as const;
export const SELECT_AVATAR_BUTTON_DISPLAY = 'SELECT_AVATAR_BUTTON_DISPLAY' as const;

export const openMonitor = () => {
    return {
        type: OPEN_MONITOR,
        payload: {
            monitorState: true,
        },
    };
};

export const closeMonitor = () => {
    return {
        type: CLOSE_MONITOR,
        payload: {
            monitorState: false,
        },
    };
};

export const avatarSelectButtonDisplay = (avatarButtonDisplay: string | null) => {
    return {
        type: SELECT_AVATAR_BUTTON_DISPLAY,
        payload: {
            avatarButtonDisplay,
        },
    };
};
