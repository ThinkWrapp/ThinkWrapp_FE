export const IS_AUTH = 'IS_AUTH' as const;

export const userLoginChecking = (checkAuth: boolean | undefined) => {
    return {
        type: IS_AUTH,
        payload: {
            isAuth: checkAuth,
        },
    };
};
