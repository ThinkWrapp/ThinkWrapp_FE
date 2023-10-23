export const OPEN_MODAL = 'OPEN_MODAL' as const;
export const CLOSE_MODAL = 'CLOSE_MODAL' as const;
export const CHANGE_AUTH_STATE = 'CHANGE_AUTH_STATE' as const;

export const openModal = (signValue: string | undefined) => {
    return {
        type: OPEN_MODAL,
        payload: {
            modalState: true,
            modalValueState: signValue,
        },
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: {
            modalState: false,
            modalValueState: undefined,
        },
    };
};

export const changeAuthState = (authState: string) => {
    return {
        type: CHANGE_AUTH_STATE,
        payload: {
            modalValueState: authState,
        },
    };
};
