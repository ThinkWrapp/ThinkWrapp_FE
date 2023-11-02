import styled from 'styled-components';

type DanceProps = {
    $toggle?: boolean;
};

export const DanceContainer = styled.div<DanceProps>`
    display: flex;
    flex-direction: column;
    position: relative;

    button {
        z-index: 2;
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 1;
        border-radius: 0 0 10rem 10rem;
        border-top: none;
        box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
        transform: scale(0);
        transition: transform 0.2s ease-in-out;
        transform-origin: 50% 100%;
    }

    ${({ $toggle }) =>
        $toggle &&
        `
    &::before {
        height: 7.8rem;
        transform: scale(1);
    }
    `}
`;

export const DanceButtons = styled.div<DanceProps>`
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    top: -238%;
    left: -115%;
    min-width: 22rem;
    background-color: #fff;
    padding: 0.6rem;
    border-radius: 1.5rem;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
    transform: scale(0);
    transform-origin: 50% 100%;

    ${({ $toggle }) =>
        $toggle &&
        `
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    transition-delay: 0.1s;
    `}
`;
