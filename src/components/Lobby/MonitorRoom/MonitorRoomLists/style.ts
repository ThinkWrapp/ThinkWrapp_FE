import styled from 'styled-components';

export const RoomsLists = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.8rem;
    flex: 1;
`;
