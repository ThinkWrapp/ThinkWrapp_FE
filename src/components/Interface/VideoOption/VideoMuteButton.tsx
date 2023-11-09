import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import Button from '@/components/@Shared/Button';
import { useVideoContext } from '@/hooks/useVideoContext';
import { socketVideoMute } from '@/redux/actions/socketAciton';

const VideoMuteButton = () => {
    const socketVideos = useSelector((state: RootState) => state.socket.roomJoined?.videos);
    const { screenMuteHandler } = useVideoContext();
    const dispatch = useDispatch();
    const [isVideoMuted, setIsVideoMuted] = useState(false);

    if (!socketVideos) return null;

    const videoMuteHandler = () => {
        setIsVideoMuted((prev) => !prev);
        screenMuteHandler();
        dispatch(socketVideoMute(isVideoMuted as boolean));
    };

    return (
        <Button style={{ '--i': 1, '--clr': '#25d366' }} className="button" title="영상뮤트" onClick={videoMuteHandler}>
            {isVideoMuted ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width={24}
                    height={24}
                >
                    <path
                        strokeLinecap="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width={24}
                    height={24}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
                    />
                </svg>
            )}
        </Button>
    );
};
export default VideoMuteButton;
