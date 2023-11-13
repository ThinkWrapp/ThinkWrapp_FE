import { useEffect } from 'react';
import { MediaConnection } from 'peerjs';
import { ScrollControls } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { SHOP_MODE } from '@/redux/actions/modeAction';
import { removePeer, setPeers, updateVideoMutePeer } from '@/redux/actions/videoAction';
import { RootState } from '@/redux/reducers';
import Room from '@/components/MetaRoom/Room';
import { Container, OtherVideoPlayerWrapper } from '@/components/MetaRoom/Room/VideoPlayer/style';
import VideoPlayer from '@/components/MetaRoom/Room/VideoPlayer';
import { useVideoContext } from '@/hooks/useVideoContext';
import CanvasLayout from '@/layout/canvas';

const RoomPage = () => {
    const connectedPeers = new Map();
    const mode = useSelector((state: RootState) => state.mode.mode);
    const socketVideos = useSelector((state: RootState) => state.socket.roomJoined?.videos);
    const clientVideos = useSelector((state: RootState) => state.video.peers);
    const deletePeerId = useSelector((state: RootState) => state.socket.deletePeerId);
    const updatedVideoMute = useSelector((state: RootState) => state.socket.updatedVideoMute);
    const userName = useSelector((state: RootState) => state.user.userName);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const { peerId, myPeer, stream, myScreenMuted } = useVideoContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!updatedVideoMute) return;
        const peer = clientVideos[updatedVideoMute.peerId];
        if (peer) {
            dispatch(updateVideoMutePeer(updatedVideoMute.peerId, updatedVideoMute.isVideoMuted));
        }
    }, [updatedVideoMute]);

    useEffect(() => {
        if (!deletePeerId) return;
        dispatch(removePeer(deletePeerId as string));
    }, [deletePeerId]);

    useEffect(() => {
        if (!stream || !myPeer || isMobile) return;
        const peers = socketVideos?.filter((video) => video.id !== peerId);
        peers?.forEach((peer) => {
            if (!connectedPeers.has(peer.id)) {
                const call = myPeer.call(peer.id, stream);
                connectedPeers.set(peer.id, call);
                call?.on('stream', (userVideoStream) => {
                    dispatch(
                        setPeers({
                            id: peer.id,
                            isVideoMuted: peer.isVideoMuted,
                            userName: peer.userName,
                            stream: userVideoStream,
                        }),
                    );
                });
            }
        });

        const onCall = (call: MediaConnection) => {
            if (!stream || isMobile) return;
            call.answer(stream);
            call?.on('stream', (peerStream: MediaStream) => {
                const playVideo = socketVideos?.find((video) => video.id === call.peer);
                dispatch(
                    setPeers({
                        id: call.peer,
                        isVideoMuted: playVideo?.isVideoMuted as boolean,
                        userName: playVideo?.userName as string,
                        stream: peerStream,
                    }),
                );
            });
        };

        myPeer?.on('call', onCall);

        return () => {
            myPeer.off('call', onCall);
        };
    }, [stream, myPeer, socketVideos]);

    return (
        <>
            <CanvasLayout>
                <color attach="background" args={['#ffffff']} />
                <ScrollControls pages={mode === SHOP_MODE ? 4 : 0}>
                    <Room />
                </ScrollControls>
            </CanvasLayout>
            <Container>
                {stream && <VideoPlayer stream={stream} isVideoMuted={myScreenMuted} userName={userName as string} />}
                {Object.values(clientVideos)
                    .filter((peer) => peer.stream)
                    .map((peer, idx) => {
                        return (
                            <OtherVideoPlayerWrapper key={idx} idx={idx}>
                                <VideoPlayer
                                    stream={peer.stream}
                                    isVideoMuted={peer.isVideoMuted}
                                    userName={peer.userName}
                                />
                            </OtherVideoPlayerWrapper>
                        );
                    })}
            </Container>
        </>
    );
};

export default RoomPage;
