import Room from '@/components/MetaRoom/Room';
import { SHOP_MODE } from '@/redux/actions/modeAction';
import { RootState } from '@/redux/reducers';
import { useEffect, useState } from 'react';
import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { useDispatch, useSelector } from 'react-redux';
import { useVideoContext } from '@/hooks/useVideoContext';
import { removePeer, setPeers, updateVideoMutePeer } from '@/redux/actions/videoAction';
import { Container } from '@/components/MetaRoom/Room/VideoPlayer/style';
import VideoPlayer from '@/components/MetaRoom/Room/VideoPlayer';
import { MediaConnection } from 'peerjs';

const RoomPage = () => {
    const mode = useSelector((state: RootState) => state.mode.mode);
    const socketVideos = useSelector((state: RootState) => state.socket.roomJoined?.videos);
    const clientVideos = useSelector((state: RootState) => state.video.peers);
    const deletePeerId = useSelector((state: RootState) => state.socket.deletePeerId);
    const updatedVideoMute = useSelector((state: RootState) => state.socket.updatedVideoMute);
    const { peerId, myPeer, stream, myScreenMuted } = useVideoContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!updatedVideoMute) return;
        dispatch(updateVideoMutePeer(updatedVideoMute.peerId, updatedVideoMute.isVideoMuted));
        console.log(socketVideos, clientVideos, updatedVideoMute);
    }, [updatedVideoMute]);

    useEffect(() => {
        if (!deletePeerId) return;
        dispatch(removePeer(deletePeerId as string));
    }, [deletePeerId]);

    useEffect(() => {
        if (!stream || !myPeer) return;
        const peers = socketVideos?.filter((video) => video.id !== peerId);

        peers?.forEach((peer) => {
            if (!myPeer.connections[peer.id] || myPeer.connections[peer.id].length !== 0) {
                const call = myPeer.call(peer.id, stream);
                call.on('stream', (userVideoStream) => {
                    dispatch(
                        setPeers({
                            id: peer.id,
                            isVideoMuted: peer.isVideoMuted,
                            isPlaying: peer.isPlaying,
                            stream: userVideoStream,
                        }),
                    );
                });
            }
        });

        const onCall = (call: MediaConnection) => {
            call.answer(stream);
            call.on('stream', (peerStream: MediaStream) => {
                const playVideo = socketVideos?.find((video) => video.id === call.peer);
                dispatch(
                    setPeers({
                        id: call.peer,
                        isVideoMuted: playVideo?.isVideoMuted as boolean,
                        isPlaying: playVideo?.isPlaying as boolean,
                        stream: peerStream,
                    }),
                );
            });
        };

        myPeer.on('call', onCall);

        return () => {
            myPeer.off('call', onCall);
        };
    }, [stream, myPeer]);

    return (
        <>
            <Canvas
                shadows
                camera={{
                    position: [0, 8, 2],
                    fov: 30,
                }}
            >
                <color attach="background" args={['#ffffff']} />
                <ScrollControls pages={mode === SHOP_MODE ? 4 : 0}>
                    <Room />
                </ScrollControls>
                <EffectComposer>
                    <N8AO intensity={0.42} />
                </EffectComposer>
            </Canvas>
            <Container>
                <VideoPlayer stream={stream} isVideoMuted={myScreenMuted} />
                {Object.values(clientVideos).map((peer, idx) => {
                    return <VideoPlayer key={idx} stream={peer.stream} isVideoMuted={peer.isVideoMuted} />;
                })}
            </Container>
        </>
    );
};

export default RoomPage;
