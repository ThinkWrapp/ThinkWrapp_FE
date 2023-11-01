import RoomList from '../RoomList';
import { Room } from '@/types/room';
import { Lists } from './style';

type RoomListsProps = {
    rooms: Room[];
};

const RoomLists = ({ rooms }: RoomListsProps) => {
    return (
        <Lists>
            <RoomList rooms={rooms} />
        </Lists>
    );
};

export default RoomLists;
