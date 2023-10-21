export const OPEN_MONITOR = 'OPEN_MONITOR' as const;
export const CLOSE_MONITOR = 'CLOSE_MONITOR' as const;

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
