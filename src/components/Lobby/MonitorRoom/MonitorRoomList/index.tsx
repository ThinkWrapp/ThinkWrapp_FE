import { NavigateFunction } from 'react-router-dom';
import { ROOM } from '@/constants/route';
import { RoomCharacterCheckCircle, RoomList, RoomPersonnelDescription, RoomTitle } from './style';
import useRooms from '@/hooks/useRooms';

type MonitorRoomListProps = {
    navigate: NavigateFunction;
};

export default function MonitorRoomList({ navigate }: MonitorRoomListProps) {
    const { rooms } = useRooms();
    const moveLinkHandler = (roomId: string) => {
        navigate(`/${ROOM}/${roomId}`);
    };

    console.log(rooms);
    return (
        <>
            {rooms?.map((room) => (
                <RoomList key={room.id} onClick={() => moveLinkHandler(room.id)}>
                    <RoomTitle>{room.name}</RoomTitle>
                    <RoomPersonnelDescription>
                        <RoomCharacterCheckCircle $nbCharacters={room.nbCharacters} />
                        {room.nbCharacters}명 참여중 ({room.nbCharacters}/{room.roomLimitPeople})
                    </RoomPersonnelDescription>
                </RoomList>
            ))}
        </>
    );
}
