import { setDraggedItem } from '@/redux/actions/itemAction';
import { useDispatch } from 'react-redux';
import { InterFaceButton } from './style';
import { useEffect } from 'react';
import { BUILD_MODE } from '@/redux/actions/modeAction';

type CancelButtonProps = {
    mode: string;
    draggedItem: number | null;
};

const CancelButton = ({ mode, draggedItem }: CancelButtonProps) => {
    const dispatch = useDispatch();

    const cancelHandler = () => {
        dispatch(setDraggedItem(null));
    };

    const keyDownHandler = (e: KeyboardEvent) => {
        if (mode === BUILD_MODE && draggedItem !== null && (e.key === 'x' || e.key === 'X')) {
            dispatch(setDraggedItem(null));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler);
        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <InterFaceButton $fc="light" onClick={cancelHandler} title="아이템 취소">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={24}
                height={24}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </InterFaceButton>
    );
};

export default CancelButton;
