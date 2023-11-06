import Peer, { MediaConnection } from 'peerjs';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type VideoContextType = {
    stream: MediaStream | null;
    startMediaStream: () => void;
    closeMediaStream: () => void;
    shareScreen: () => void;
    myPeer: Peer | null;
    peerId: string | undefined;
    myScreenMuted: boolean;
    screenMuteHandler: () => void;
};

export const VideoContext = createContext<VideoContextType | null>(null);

const VideoContextProvider = ({ children }: PropsWithChildren) => {
    const [peerId, setPeerId] = useState<string | undefined>(undefined);
    const [myPeer, setMyPeer] = useState<Peer | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [screenSharingId, setScreenSharingId] = useState('');
    const [myScreenMuted, setMyScreenMuted] = useState(true);

    const screenMuteHandler = () => {
        setMyScreenMuted((prev) => !prev);
    };

    const startMediaStream = async () => {
        try {
            const constraints = { audio: true, video: { facingMode: 'user' } || true };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);

            setStream(stream);
        } catch (err) {
            console.error(err);
        }
    };

    const closeMediaStream = () => {
        if (!stream) return;

        Object.values(myPeer?.connections as MediaConnection).forEach((connection) => {
            connection.forEach((conn: MediaConnection) => conn.close());
        });

        stream?.getTracks().forEach((track) => track.stop());
        setStream(null);
    };

    const switchStream = (stream: MediaStream, isScreenSharing: boolean) => {
        setStream(stream);
        screenSharingId ? setScreenSharingId('') : setScreenSharingId(myPeer?.id as string);
        Object.values(myPeer?.connections as MediaConnection).forEach((connection) => {
            const videoTrack = stream.getTracks().find((track) => track.kind === 'video');

            if (connection) {
                connection.forEach((conn: MediaConnection) => {
                    conn.peerConnection
                        .getSenders()
                        .find((sender) => sender.track?.kind === 'video')
                        ?.replaceTrack(videoTrack as MediaStreamTrack)
                        .catch((error) => console.error(error));
                });
            }
        });

        if (isScreenSharing) {
            stream.getTracks().forEach((track) => {
                track.onended = async () => {
                    const newStream = await navigator.mediaDevices.getUserMedia({
                        video: { facingMode: 'user' } || true,
                        audio: true,
                    });
                    switchStream(newStream, false);
                    setScreenSharingId('');
                };
            });
        }
    };

    const shareScreen = async () => {
        if (screenSharingId) {
            const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            switchStream(userStream, false);
        } else {
            const displayStream = await navigator.mediaDevices.getDisplayMedia({});
            switchStream(displayStream, true);
        }
    };

    useEffect(() => {
        const myPeerId = uuidv4();
        const peer = new Peer(myPeerId);
        setMyPeer(peer);
        setPeerId(myPeerId);
    }, []);

    return (
        <VideoContext.Provider
            value={{
                myScreenMuted,
                peerId,
                myPeer,
                stream,
                screenMuteHandler,
                shareScreen,
                startMediaStream,
                closeMediaStream,
            }}
        >
            {children}
        </VideoContext.Provider>
    );
};

export default VideoContextProvider;
