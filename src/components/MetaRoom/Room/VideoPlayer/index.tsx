import { ComponentProps, forwardRef, useEffect, useRef } from 'react';
import { StyledImg, StyledVideo } from './style';

type VideoProps = {
    stream: MediaStream | null;
    isVideoMuted: boolean;
};

const ForwardedStyledVideo = forwardRef<HTMLVideoElement, ComponentProps<any>>((props, ref) => (
    <StyledVideo ref={ref} {...props} />
));

const VideoPlayer = ({ stream, isVideoMuted }: VideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <>
            {isVideoMuted ? (
                <StyledImg src="https://ui-avatars.com/api/?name=seungmin&background=36393e&color=666&font-size=0.33" />
            ) : null}
            <ForwardedStyledVideo
                ref={videoRef}
                style={{ display: isVideoMuted ? 'none' : 'block' }}
                autoPlay
                playsInline
            />
        </>
    );
};
export default VideoPlayer;
