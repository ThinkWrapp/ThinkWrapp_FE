import { VideoPeer } from '@/types/room';

export const SET_PEERS = 'SET_PEERS' as const;
export const REMOVE_PEER = 'REMOVE_PEER' as const;
export const RESET_PEERS = 'RESET_PEERS' as const;
export const UPDATE_VIDEO_MUTE_PEER = 'UPDATE_VIDEO_MUTE_PEER' as const;

export const setPeers = (peers: VideoPeer) => {
    return {
        type: SET_PEERS,
        payload: peers,
    };
};

export const removePeer = (id: string) => {
    return {
        type: REMOVE_PEER,
        payload: id,
    };
};

export const updateVideoMutePeer = (id: string, isVideoMuted: boolean) => {
    return {
        type: UPDATE_VIDEO_MUTE_PEER,
        payload: {
            id,
            isVideoMuted,
        },
    };
};

export const resetPeers = () => {
    return {
        type: RESET_PEERS,
    };
};
