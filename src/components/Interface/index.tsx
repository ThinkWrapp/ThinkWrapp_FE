import { useLocation } from 'react-router-dom';
import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarLink from './SelectAvatarLink';
import { InterfaceContainer } from './style';
import AvatarSelectButton from './AvatarSelectButton';
import HomeLink from './HomeLink';

export default function Interface() {
    const location = useLocation();

    const lobby = location.pathname === '/';
    const character = location.pathname === '/character';

    const lobbyContent = lobby && (
        <>
            <MetaRoomControlButton />
            <SelectAvatarLink />
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
