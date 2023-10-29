import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarLink from './SelectAvatarButton';
import AvatarSelectButton from './AvatarSelectButtons';
import useIsAuth from '@/hooks/useIsAuth';
import { InterfaceContainer } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { CHARACTER, ROOM } from '@/redux/actions/RoutePerstistAction';
import HomeButton from './HomeButton';

export default function Interface() {
    const isAuth = useIsAuth((state) => state.isAuth);
    const routeState = useSelector((state: RootState) => state.route.routeState);

    const routeResponseInterface = () => {
        switch (routeState) {
            case ROOM:
                return <></>;
            case CHARACTER:
                return (
                    <>
                        <HomeButton />
                        <AvatarSelectButton />
                    </>
                );
            default:
                return (
                    <>
                        <MetaRoomControlButton />
                        {isAuth && <SelectAvatarLink />}
                    </>
                );
        }
    };

    return <InterfaceContainer>{routeResponseInterface()}</InterfaceContainer>;
}
