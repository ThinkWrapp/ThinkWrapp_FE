import { useEffect, useState } from 'react';

export const useResponsive = () => {
    const [device, setDevice] = useState('desktop');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDevice('mobile');
            } else if (window.innerWidth < 1024) {
                setDevice('tablet');
            } else {
                setDevice('desktop');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return device;
};
