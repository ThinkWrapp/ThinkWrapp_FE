export type CharacterProps = {
    hovered?: boolean;
    avatarButtonDisplay?: boolean | null;
    nameSpace: 'lobby' | 'room' | 'select';
};

export type PlayerChatMessage = {
    id: string;
    message: string;
};
