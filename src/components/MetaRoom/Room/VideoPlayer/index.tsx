import { useEffect, useRef } from 'react';

type VideoProps = {
    stream: MediaStream | null;
    isVideoMuted: boolean;
};

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
                <img
                    src="https://ui-avatars.com/api/?name=seungmin&background=36393e&color=666&font-size=0.33"
                    style={{ width: '36%', height: '75%', objectFit: 'cover' }}
                />
            ) : null}
            <video
                width="36%"
                ref={videoRef}
                style={{ display: isVideoMuted ? 'none' : 'block' }}
                autoPlay
                playsInline
            />
        </>
    );
};
export default VideoPlayer;
