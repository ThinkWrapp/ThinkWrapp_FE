export const getDeviceConfig = (device: string, config: Record<string, any>) => {
    return device in config ? config[device] : config.desktop;
};
