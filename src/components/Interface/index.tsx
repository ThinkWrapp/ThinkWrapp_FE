import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarLink from './SelectAvatarLink';
import AvatarSelectButton from './AvatarSelectButtons';
import HomeLink from './HomeLink';
import { RootState } from '@/redux/reducers';
import { InterfaceContainer, RouteInterfaceWrapper } from './style';
import { ROUTE_CHARACTER, ROUTE_ROOM } from '@/constants/route';
import Chat from './Chat';
import ChatHistory from './ChatHistory';
import Dance from './Dance';
import ShopButton from './ShopButton';
import BuildButton from './BuildButton';
import BackButton from './BackButton';
import CancelButton from './CancelButton';
import DeleteButton from './DeleteButton';
import RotateButton from './RotateButton';
import { BUILD_MODE } from '@/redux/actions/modeAction';
import VideoOption from './VideoOption';

export default function Interface() {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const mode = useSelector((state: RootState) => state.mode.mode);
    const draggedItem = useSelector((state: RootState) => state.item.draggedItem);

    const location = useLocation();

    const isLobbyRoute = location.pathname === '/';
    const isCharacterRoute = location.pathname === `/${ROUTE_CHARACTER}`;
    const isRoomRoute = location.pathname.includes(`/${ROUTE_ROOM}/`);

    const routeResponseInterface = () => {
        if (isLobbyRoute) {
            return (
                <>
                    <MetaRoomControlButton />
                    {isAuth && <SelectAvatarLink />}
                </>
            );
        }
        if (isCharacterRoute) {
            return (
                <>
                    {avatarUrl && <HomeLink />}
                    <AvatarSelectButton />
                </>
            );
        }
        if (isRoomRoute) {
            return (
                <>
                    <HomeLink />
                    {mode && draggedItem === null && <BackButton />}
                    {!mode && (
                        <>
                            <Dance />
                            <BuildButton />
                            <VideoOption />
                        </>
                    )}
                    {mode === BUILD_MODE && (
                        <>
                            {draggedItem !== null && (
                                <>
                                    <CancelButton mode={mode} draggedItem={draggedItem} />
                                    <DeleteButton mode={mode} />
                                    <RotateButton mode={mode} draggedItem={draggedItem} />
                                </>
                            )}
                            <ShopButton />
                        </>
                    )}
                </>
            );
        }
    };

    return (
        <>
            {isRoomRoute && <ChatHistory />}
            <InterfaceContainer>
                {isRoomRoute && <Chat />}
                <RouteInterfaceWrapper>{routeResponseInterface()}</RouteInterfaceWrapper>
            </InterfaceContainer>
        </>
    );
}
