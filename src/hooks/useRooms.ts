import { Room } from '@/types/room';
import { create } from 'zustand';

type RoomStore = {
    rooms: Room[];
    setRooms: (rooms: Room[]) => void;
};

const useRooms = create<RoomStore>((set) => ({
    rooms: [],
    setRooms: (rooms) => set({ rooms }),
}));

export default useRooms;
