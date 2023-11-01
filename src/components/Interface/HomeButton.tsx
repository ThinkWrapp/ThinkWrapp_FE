import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { InterFaceButton } from './style';
import { ROOM, linkHome } from '@/redux/actions/RoutePerstistAction';
import { socketLeaveRoom } from '@/redux/actions/socketAciton';

export default function HomeButton() {
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const routeState = useSelector((state: RootState) => state.route.routeState);
    const dispatch = useDispatch();

    const moveToHome = () => {
        if (routeState === ROOM) {
            dispatch(socketLeaveRoom());
        }
        dispatch(linkHome());
    };

    return (
        !avatarButtonDisplay && (
            <InterFaceButton $fc="light" title="홈" onClick={moveToHome}>
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
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
            </InterFaceButton>
        )
    );
}
