export const getDeviceConfig = (device: string, config: Record<string, any>, useTabletAsDefaultForMobile = false) => {
    if (device === 'mobile' && useTabletAsDefaultForMobile) {
        return config.tablet;
    }
    return device in config ? config[device] : config.desktop;
};
