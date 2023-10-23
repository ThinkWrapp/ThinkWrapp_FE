import { NavigateFunction } from 'react-router-dom';
import MonitorRoomList from '../MonitorRoomList';
import { RoomsLists } from './style';

type MonitorRoomListsProps = {
    navigate: NavigateFunction;
};

export default function MonitorRoomLists({ navigate }: MonitorRoomListsProps) {
    return (
        <RoomsLists>
            <MonitorRoomList navigate={navigate} />
        </RoomsLists>
    );
}
