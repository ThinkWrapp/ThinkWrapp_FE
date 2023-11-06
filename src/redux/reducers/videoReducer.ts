import { VideoPeer } from '@/types/room';
import {
    REMOVE_PEER,
    RESET_PEERS,
    SET_PEERS,
    UPDATE_VIDEO_MUTE_PEER,
    removePeer,
    resetPeers,
    setPeers,
    updateVideoMutePeer,
} from '../actions/videoAction';

type VideoActionType =
    | ReturnType<typeof setPeers>
    | ReturnType<typeof resetPeers>
    | ReturnType<typeof removePeer>
    | ReturnType<typeof updateVideoMutePeer>;
type Video = Omit<VideoPeer, 'id'>;
type VideoState = {
    peers: { [key: VideoPeer['id']]: Video };
};

const initialState: VideoState = {
    peers: {},
};

const videoReducer = (state = initialState, action: VideoActionType) => {
    switch (action.type) {
        case SET_PEERS:
            return {
                ...state,
                peers: {
                    ...state.peers,
                    [action.payload.id]: {
                        stream: action.payload.stream,
                        isVideoMuted: action.payload.isVideoMuted,
                        isPlaying: action.payload.isPlaying,
                    },
                },
            };
        case REMOVE_PEER:
            const { [action.payload]: _, ...peers } = state.peers;
            return {
                ...state,
                peers,
            };
        case UPDATE_VIDEO_MUTE_PEER:
            return {
                ...state,
                peers: {
                    ...state.peers,
                    [action.payload.id]: {
                        ...state.peers[action.payload.id],
                        isVideoMuted: action.payload.isVideoMuted,
                    },
                },
            };
        case RESET_PEERS:
            return {
                ...state,
                peers: {},
            };
        default:
            return state;
    }
};

export default videoReducer;
