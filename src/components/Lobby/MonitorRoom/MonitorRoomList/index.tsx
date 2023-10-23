import { NavigateFunction } from 'react-router-dom';
import { MAX_ROOM_PERSONNEL } from '@/constants/room';
import { ROOM } from '@/constants/route';
import { RoomCharacterCheckCircle, RoomList, RoomPersonnelDescription, RoomTitle } from './style';

const rooms = [
    { id: '1', name: 'thinkWrapp1', nbCharacters: 3 },
    { id: '2', name: 'thinkWrapp2', nbCharacters: 4 },
    { id: '3', name: 'thinkWrapp3', nbCharacters: 5 },
    { id: '4', name: 'thinkWrapp4', nbCharacters: 6 },
    { id: '5', name: 'thinkWrapp5', nbCharacters: 2 },
    { id: '6', name: 'thinkWrapp6', nbCharacters: 1 },
    { id: '7', name: 'thinkWrapp7', nbCharacters: 3 },
    { id: '8', name: 'thinkWrapp8', nbCharacters: 1 },
];

type MonitorRoomListProps = {
    navigate: NavigateFunction;
};

export default function MonitorRoomList({ navigate }: MonitorRoomListProps) {
    const moveLinkHandler = (roomId: string) => {
        navigate(`/${ROOM}/${roomId}`);
    };

    return (
        <>
            {rooms.map((room) => (
                <RoomList key={room.id} onClick={() => moveLinkHandler(room.id)}>
                    <RoomTitle>{room.name}</RoomTitle>
                    <RoomPersonnelDescription>
                        <RoomCharacterCheckCircle $nbCharacters={room.nbCharacters} />
                        {room.nbCharacters}명 참여중 ({room.nbCharacters}/{MAX_ROOM_PERSONNEL})
                    </RoomPersonnelDescription>
                </RoomList>
            ))}
        </>
    );
}
