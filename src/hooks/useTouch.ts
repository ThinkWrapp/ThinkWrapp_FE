import { useEffect, useState, useRef } from 'react';

export const useTouch = () => {
    const [offset, setOffset] = useState(0);
    const touchStart = useRef(0);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientX;
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touchOffset = (e.touches[0].clientX - touchStart.current) / window.innerWidth;
            setOffset((prevOffset) => {
                const newOffset = prevOffset - touchOffset; // 왼쪽으로 이동 시 offset 증가
                return Math.max(0, Math.min(1, newOffset)); // 0과 1 사이의 값으로 제한
            });
            touchStart.current = e.touches[0].clientX; // 현재 터치 위치를 시작 위치로 설정
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return { offset };
};
