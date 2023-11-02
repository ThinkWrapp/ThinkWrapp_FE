import styled from 'styled-components';

export const ChatContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: auto;

    input + button {
        margin-left: 1rem;
    }
`;

export const ChatInput = styled.input`
    width: 28rem;
    height: 100%;
    padding: 1.2rem 1.4rem;
    border: 1px solid ${({ theme }) => theme.bg.dark};
    border-radius: 10rem;
    font-size: 1.6rem;
`;

export const ChatButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.bg.point};
    padding: 1rem;
    border-radius: 100%;
    color: ${({ theme }) => theme.fc.light};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.bg.light};
        color: ${({ theme }) => theme.fc.dark};
    }
`;
