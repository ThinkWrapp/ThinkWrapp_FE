export const CHARACTER = 'CHARACTER' as const;
export const ROOM = 'ROOM' as const;
export const HOME = 'HOME' as const;

export const linkCharacter = () => {
    return {
        type: CHARACTER,
        payload: {
            link: CHARACTER,
        },
    };
};

export const linkRoom = () => {
    return {
        type: ROOM,
        payload: {
            link: ROOM,
        },
    };
};

export const linkHome = () => {
    return {
        type: HOME,
        payload: {
            link: '',
        },
    };
};
