import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarButton from './SelectAvatarButton';
import AvatarSelectButton from './AvatarSelectButtons';
import { InterfaceContainer } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { CHARACTER, ROOM } from '@/redux/actions/RoutePerstistAction';
import HomeButton from './HomeButton';

export default function Interface() {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const routeState = useSelector((state: RootState) => state.route.routeState);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);

    const routeResponseInterface = () => {
        switch (routeState) {
            case ROOM:
                return (
                    <>
                        <HomeButton />
                    </>
                );
            case CHARACTER:
                return (
                    <>
                        {avatarUrl && <HomeButton />}
                        <AvatarSelectButton />
                    </>
                );
            default:
                return (
                    <>
                        <MetaRoomControlButton />
                        {isAuth && <SelectAvatarButton />}
                    </>
                );
        }
    };

    return <InterfaceContainer>{routeResponseInterface()}</InterfaceContainer>;
}
