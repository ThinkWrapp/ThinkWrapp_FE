import { useDispatch, useSelector } from 'react-redux';
import { setDraggedItem, setRoomItems } from '@/redux/actions/itemAction';
import { InterFaceButton } from './style';
import { RootState } from '@/redux/reducers';
import { BUILD_MODE } from '@/redux/actions/modeAction';
import { useEffect } from 'react';

type DeleteButtonProps = {
    mode: string;
};

const DeleteButton = ({ mode }: DeleteButtonProps) => {
    const roomItems = useSelector((state: RootState) => state.item.roomItems);
    const draggedItem = useSelector((state: RootState) => state.item.draggedItem);
    const dispatch = useDispatch();

    const deleteItemHandler = () => {
        if (draggedItem === null) return;
        const updateItem = [...roomItems];
        updateItem.splice(draggedItem, 1);

        dispatch(setRoomItems(updateItem));
        dispatch(setDraggedItem(null));
    };

    const keyDownHandler = (e: KeyboardEvent) => {
        if (mode === BUILD_MODE && draggedItem !== null && (e.key === 'd' || e.key === 'D')) {
            if (draggedItem === null) return;
            const updateItem = [...roomItems];
            updateItem.splice(draggedItem, 1);

            dispatch(setRoomItems(updateItem));
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
        <InterFaceButton $fc="light" onClick={deleteItemHandler} title="아이템 제거">
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
        </InterFaceButton>
    );
};
export default DeleteButton;
