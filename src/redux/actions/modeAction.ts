export const SHOP_MODE = 'SHOP_MODE' as const;
export const BUILD_MODE = 'BUILD_MODE' as const;
export const RESET_MODE = 'RESET_MODE' as const;

export const shopMode = () => {
    return {
        type: SHOP_MODE,
        payload: SHOP_MODE,
    };
};

export const buildMode = () => {
    return {
        type: BUILD_MODE,
        payload: BUILD_MODE,
    };
};

export const resetMode = () => {
    return {
        type: RESET_MODE,
        payload: '',
    };
};
