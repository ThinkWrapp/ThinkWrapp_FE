export const IS_AUTH = 'IS_AUTH' as const;
export const USER_NAME = 'USER_NAME' as const;

export const userLoginChecking = (checkAuth: boolean | undefined) => {
    return {
        type: IS_AUTH,
        payload: {
            isAuth: checkAuth,
        },
    };
};

export const userName = (userName: string | undefined) => {
    return {
        type: USER_NAME,
        payload: userName,
    };
};
