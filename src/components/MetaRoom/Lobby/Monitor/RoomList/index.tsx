import { ROOM } from '@/constants/route';
import useRooms from '@/hooks/useRooms';
import { CharacterCheckCircle, List, PersonnelDescription, Title } from './style';

const RoomList = () => {
    const { rooms } = useRooms();
    const moveLinkHandler = (roomId: string) => {
        // navigate(`/${ROOM}/${roomId}`);
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
