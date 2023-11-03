export const SAVE_ROOM = 'SAVE_ROOM' as const;
export const REMOVE_ROOM = 'REMOVE_ROOM' as const;

export const saveRoom = (roomId: string) => {
    return {
        type: SAVE_ROOM,
        payload: {
            roomId,
        },
    };
};

export const removeRoom = () => {
    return {
        type: REMOVE_ROOM,
    };
};
