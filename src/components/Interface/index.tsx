import { useLocation } from 'react-router-dom';
import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarLink from './SelectAvatarLink';
import { InterfaceContainer } from './style';
import AvatarSelectButton from './AvatarSelectButton';
import HomeLink from './HomeLink';
import useIsAuth from '@/hooks/useIsAuth';

export default function Interface() {
    const location = useLocation();
    const isAuth = useIsAuth((state) => state.isAuth);

    const lobby = location.pathname === '/';
    const character = location.pathname === '/character';

    const lobbyContent = lobby && (
        <>
            <MetaRoomControlButton />
            {isAuth && <SelectAvatarLink />}
        </>
    );

    const characterContent = character && (
        <>
            <HomeLink />
            <AvatarSelectButton />
        </>
    );

    return (
        <InterfaceContainer>
            {lobbyContent}
            {characterContent}
        </InterfaceContainer>
    );
}
