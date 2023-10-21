import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarLink from './SelectAvatarLink';
import { Container } from './style';

export default function Interface() {
    return (
        <Container>
            <MetaRoomControlButton />
            <SelectAvatarLink />
        </Container>
    );
}
