import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { InterFaceLink } from './style';
import { socketLeaveRoom } from '@/redux/actions/socketAciton';
import { useLocation } from 'react-router-dom';
import { ROUTE_ROOM } from '@/constants/route';
import { removeRoom } from '@/redux/actions/roomPersistAction';
import { resetMode } from '@/redux/actions/modeAction';
import { useVideoContext } from '@/hooks/useVideoContext';
import { resetPeers } from '@/redux/actions/videoAction';

export default function HomeLink() {
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const location = useLocation();
    const dispatch = useDispatch();
    const { closeMediaStream } = useVideoContext();

    const moveToHome = () => {
        if (location.pathname.includes(`/${ROUTE_ROOM}/`)) {
            dispatch(socketLeaveRoom());
            dispatch(removeRoom());
            dispatch(resetMode());
            dispatch(resetPeers());
            closeMediaStream();
        }
    };

    return (
        !avatarButtonDisplay && (
            <InterFaceLink to="/" $fc="light" title="홈" onClick={moveToHome}>
                홈
            </InterFaceLink>
        )
    );
}
