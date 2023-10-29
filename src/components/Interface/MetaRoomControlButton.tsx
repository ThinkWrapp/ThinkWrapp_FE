import { useDispatch, useSelector } from 'react-redux';
import { closeMonitor, openMonitor } from '@/redux/actions/interfaceAction';
import { RootState } from '@/redux/reducers';
import { InterFaceButton } from './style';

export default function MetaRoomControlButton() {
    const monitorState = useSelector((state: RootState) => state.interface.monitorState);
    const dispatch = useDispatch();
    const openHandler = () => {
        if (!monitorState) dispatch(openMonitor());
        else dispatch(closeMonitor());
    };

    return (
        <>
            <InterFaceButton $fc="light" title={!monitorState ? '방 목록 열기' : '방 목록 닫기'} onClick={openHandler}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width={24}
                    height={24}
                    style={{
                        transform: !monitorState ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                </svg>
            </InterFaceButton>
        </>
    );
}
