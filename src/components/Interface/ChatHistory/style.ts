import styled from 'styled-components';

export const ChatHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: fixed;
    pointer-events: none;
    user-select: none;
    inset: 2rem;

    @media screen and (max-width: 768px) {
        align-items: center;
        inset: 2rem 2rem 17rem;
    }
`;

type ChatHistoryWrapperAndButtonProps = {
    $chatHistoryHeight: boolean;
};

export const ChatHistoryWrapper = styled.div<ChatHistoryWrapperAndButtonProps>`
    position: relative;
    width: 33%;
    height: ${({ $chatHistoryHeight }) => ($chatHistoryHeight ? '16rem' : '8rem')};
    padding: 1rem 2rem;
    border: 1px solid;
    border-radius: 0.25rem;
    border-color: rgb(148 163 184);
    transition: height 0.2s ease-in-out;
    box-shadow:
        0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
        0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
    pointer-events: auto;
    background-color: rgba(15, 23, 42, 0.5);

    @media screen and (max-width: 768px) {
        width: 60%;
    }

    @media screen and (max-width: 360px) {
        width: 90%;
    }
`;

export const ChatHistoryButton = styled.button<ChatHistoryWrapperAndButtonProps>`
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    outline-style: none;
    background-color: rgb(75 85 99);

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 0.2rem;
        transition: transform 0.2s ease-in-out;
        background-color: ${({ theme }) => theme.bg.light};
    }

    &::before {
        transform: translate(-50%, -50%);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }

    ${({ $chatHistoryHeight }) =>
        $chatHistoryHeight &&
        `
        &::before {
            transform: translate(-50%, -50%) rotate(90deg);
            opacity: 0;
        }

        &::after {
            transform: translate(-50%, -50%) rotate(0deg);
        }
    `}
`;

export const ChatLog = styled.div`
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.3);
        margin: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #777;
    }
`;

type DialogProps = {
    $id: string;
    $user: string;
};

export const Dialog = styled.p<DialogProps>`
    color: rgb(248 250 252);
    ${({ $id, $user }) =>
        $id === $user &&
        `
        color: rgb(253 224 71);
    `}
`;
