export const getDeviceConfig = (device: string, config: Record<string, any>, useTabletAsDefaultForMobile = false) => {
    if (device === 'mobile' && useTabletAsDefaultForMobile) {
        return config.tablet;
    }
    return device in config ? config[device] : config.desktop;
};

export const isMobile = () => {
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return window.innerWidth < 768;
};
