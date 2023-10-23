import styled from 'styled-components';

export const RoomList = styled.li`
    padding: 1.6rem;
    color: #fff;
    background-color: rgba(99, 102, 241, 0.7);
    border-radius: 0.8rem;
    pointer-events: auto;
    cursor: pointer;
    transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: color, background-color, border-color, text-decoration-color;

    &:hover {
        background-color: rgba(55, 48, 163, 0.7);
    }
`;

export const RoomTitle = styled.h2`
    width: 26rem;
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const RoomPersonnelDescription = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

type RoomCharacterCheckCircleProps = {
    $nbCharacters: number;
};

export const RoomCharacterCheckCircle = styled.div<RoomCharacterCheckCircleProps>`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 100%;
    background-color: ${({ $nbCharacters }) => ($nbCharacters === 6 ? '#dc3545' : '#28a745')};
`;
