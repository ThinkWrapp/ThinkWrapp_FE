import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarLink from './SelectAvatarLink';
import AvatarSelectButton from './AvatarSelectButtons';
import HomeLink from './HomeLink';
import { RootState } from '@/redux/reducers';
import { InterfaceContainer } from './style';
import { ROUTE_CHARACTER } from '@/constants/route';

export default function Interface() {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const location = useLocation();

    const isLobbyRoute = location.pathname === '/';
    const isCharacterRoute = location.pathname === `/${ROUTE_CHARACTER}`;

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
    };

    return <InterfaceContainer>{routeResponseInterface()}</InterfaceContainer>;
}
