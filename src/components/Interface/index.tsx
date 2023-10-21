import MetaRoomControlButton from './MetaRoomControlButton';
import SelectAvatarButton from './SelectAvatarButton';
import { Container } from './style';

export default function Interface() {
    return (
        <Container>
            <MetaRoomControlButton />
            <SelectAvatarButton />
        </Container>
    );
}
