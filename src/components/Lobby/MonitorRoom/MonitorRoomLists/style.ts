import styled from 'styled-components';

export const RoomsLists = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 0.8rem;
    height: 36rem;
    overflow-y: auto;
    padding: 0 0.8rem;

    &::-webkit-scrollbar {
        width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background-color: #000;
        border-radius: 1rem;
    }
`;
