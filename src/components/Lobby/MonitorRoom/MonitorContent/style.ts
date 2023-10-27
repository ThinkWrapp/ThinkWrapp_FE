import styled from 'styled-components';

type MonitorRoomContainerProps = {
    $isSafari: boolean;
};

export const MonitorRoomContainer = styled.div<MonitorRoomContainerProps>`
    ${({ $isSafari }) =>
        $isSafari
            ? `
                width: 310px;
                height: 416px; 
                @media (min-width: 1024px) 
                {
                    width: 390px;
                    height: 514px;
                }
            `
            : 'width: 65rem; height: 49rem;'}
    max-width: 100%;
    padding: 2rem;
    place-items: center;
    pointer-events: none;
    user-select: none;
`;

export const MonitorWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & > * {
        margin-top: 0.5rem;
    }
`;

export const MonitorTitle = styled.h1`
    font-size: 2.8rem;
    line-height: 3.2rem;
    font-weight: bold;
    text-align: center;
    color: #ffd700;
    text-shadow: 0px 3px 2px rgba(51, 44, 7, 1);
`;

export const ChooseRoom = styled.p`
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
`;

export const CreateRoomButton = styled.button`
    width: 24rem;
    background-color: rgba(220, 53, 69, 0.7);
    padding: 1rem 1.4rem;
    margin-top: 1.4rem;
    border: 1px solid #fcfcfc;
    border-radius: 1.2rem;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    pointer-events: auto;

    &:hover {
        background-color: rgba(127, 27, 35, 0.7);
    }
`;

export const NoAuthMonitor = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36rem;
    background-color: rgba(99, 102, 241, 0.7);
    border: 1px solid #ececec;
    color: #fff;
    font-size: 3.2rem;
    font-weight: 800;
    pointer-events: auto;
    transition: 0.2s ease-in-out;
    text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.6);

    &:hover {
        background-color: rgba(55, 48, 163, 0.7);
    }
`;
