import RoomList from '../RoomList';
import { Room } from '@/types/room';
import { Lists } from './style';

type RoomListsProps = {
    rooms: Room[];
    joinRoom: (roomId: string) => void;
};

const RoomLists = ({ rooms, joinRoom }: RoomListsProps) => {
    return (
        <Lists>
            <RoomList rooms={rooms} joinRoom={joinRoom} />
        </Lists>
    );
};

export default RoomLists;
