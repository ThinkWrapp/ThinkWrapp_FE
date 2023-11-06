import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    position: fixed;
    top: 12rem;
    left: 0;
    width: 100%;
    margin: 0.6rem;
    pointer-events: none;
`;
