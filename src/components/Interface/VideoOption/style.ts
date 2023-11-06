import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const VideoOptionWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 20rem;

    .toggle {
        display: flex;
        justify-content: center;
        position: relative;
        padding: 1rem;
        background-color: #fff;
        border-radius: 10rem;
        cursor: pointer;
        z-index: 10;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
        transition: 0.52s;
    }

    &.active .toggle {
        transform: rotate(360deg);
        box-shadow:
            0 5px 6px rgba(0, 0, 0, 0.15),
            0 0 0 2px #333,
            0 0 0 6px #fff;
    }

    .button {
        position: absolute;
        right: 0;
        scale: 0;
        transition: 0.32s;
        transform: rotate(calc(-180deg / 3 * var(--i)));
        transform-origin: -4.6rem;
        transition-delay: calc(0.05s * var(--i));
    }

    .button svg {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 4.2rem;
        height: 4.2rem;
        background-color: #fff;
        padding: 0.8rem;
        border-radius: 10rem;
        transform: rotate(calc(180deg / 3 * var(--i)));
        color: var(--clr);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
        transition: 0.32s;
    }

    .button:hover svg {
        box-shadow:
            0 0 0 2px var(--clr),
            0 0 0 6px #fff;
    }

    &.active .button {
        scale: 1;
    }
`;
