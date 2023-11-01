import { CharacterCheckCircle, List, PersonnelDescription, Title } from './style';
import { Room } from '@/types/room';

type RoomListProps = {
    rooms: Room[];
    joinRoom: (roomId: string) => void;
};

const RoomList = ({ rooms, joinRoom }: RoomListProps) => {
    const moveLinkHandler = (roomId: string) => {
        joinRoom(roomId);
    };

    return (
        <>
            {rooms?.map((room) => (
                <List key={room.id} onClick={() => moveLinkHandler(room.id)}>
                    <Title>{room.name}</Title>
                    <PersonnelDescription>
                        <CharacterCheckCircle $nbCharacters={room.nbCharacters} />
                        {room.nbCharacters}명 참여중 ({room.nbCharacters}/{room.roomLimitPeople})
                    </PersonnelDescription>
                </List>
            ))}
        </>
    );
};

export default RoomList;
