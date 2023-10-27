import { create } from 'zustand';

export type JoinedType = {
    joined?: {
        map?: {
            gridDivision?: number;
            size?: number[];
        };
        characters?: {
            id?: string;
            session?: number;
            position?: number[];
            avatarGender?: string;
        }[];
        id?: string;
        password?: string;
    };
    setJoined: (joined: JoinedType['joined']) => void;
};

const useJoined = create<JoinedType>((set) => ({
    joined: {},
    setJoined: (joined) => set({ joined }),
}));

export default useJoined;
