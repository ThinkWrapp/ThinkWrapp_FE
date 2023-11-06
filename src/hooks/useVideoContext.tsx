import { useContext } from 'react';
import { VideoContext } from './context/videoContext';

export const useVideoContext = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideoContext must be used within a VideoContextProvider');
    }

    return context;
};
