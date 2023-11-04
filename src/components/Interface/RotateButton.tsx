import { useDispatch, useSelector } from 'react-redux';
import { InterFaceButton } from './style';
import { RootState } from '@/redux/reducers';
import { setDraggedItemRotation } from '@/redux/actions/itemAction';
import { BUILD_MODE } from '@/redux/actions/modeAction';
import { useEffect } from 'react';

type RotateButtonProps = {
    mode: string;
    draggedItem: number | null;
};

const RotateButton = ({ mode, draggedItem }: RotateButtonProps) => {
    const dispatch = useDispatch();
    const draggedItemRotation = useSelector((state: RootState) => state.item.draggedItemRotation);

    const rotateItemHandler = () => {
        dispatch(setDraggedItemRotation(draggedItemRotation === 3 ? 0 : draggedItemRotation + 1));
    };

    const keyDownHandler = (e: KeyboardEvent) => {
        if (mode === BUILD_MODE && draggedItem !== null && (e.key === 'r' || e.key === 'R')) {
            dispatch(setDraggedItemRotation(draggedItemRotation === 3 ? 0 : draggedItemRotation + 1));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler);
        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [draggedItemRotation]);

    return (
        <InterFaceButton $fc="light" onClick={rotateItemHandler} title="아이템 회전">
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>
        </InterFaceButton>
    );
};

export default RotateButton;
