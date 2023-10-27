import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export const useLoading = () => {
    const [loaded, setLoaded] = useState(false);
    const { progress } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setLoaded(true);
        }
    }, [progress]);

    return {
        loaded,
        progress,
    };
};
