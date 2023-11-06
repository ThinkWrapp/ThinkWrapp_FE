import { useState } from 'react';
import MicMuteButton from './MicMuteButton';
import ScreenShareButton from './ScreenShareButton';
import VideoMuteButton from './VideoMuteButton';
import VideoOptionButton from './VideoOptionButton';
import { Container, VideoOptionWrapper } from './style';

const VideoOption = () => {
    const [active, setActive] = useState(false);

    const activeHandler = () => {
        setActive((prev) => !prev);
    };

    return (
        <Container>
            <VideoOptionWrapper className={`${active ? 'active' : ''}`}>
                <VideoOptionButton activeHandler={activeHandler} />
                <ScreenShareButton />
                <VideoMuteButton />
                <MicMuteButton />
            </VideoOptionWrapper>
        </Container>
    );
};
export default VideoOption;
