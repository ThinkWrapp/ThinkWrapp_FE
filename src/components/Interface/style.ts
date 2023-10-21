import styled from 'styled-components';
import { StyledButton } from '../@Shared/Button/style';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 20%;
    /* background-color: #fff; */
`;

export const InterFaceButton = styled(StyledButton)`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 100%;
    background-color: #6366f1;
    margin: 0.5rem;

    &:hover {
        background-color: #3730a3;
    }
`;
