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
    padding: 0.6rem;
    pointer-events: none;
`;

export const StyledImg = styled.img`
    width: 30%;
    height: 75%;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
    }

    @media screen and (max-width: 320px) {
        width: 80%;
    }
`;

export const StyledVideo = styled.video`
    width: 30%;

    @media screen and (max-width: 1024px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
    }

    @media screen and (max-width: 320px) {
        width: 80%;
    }
`;

type VideoPlayerWrapperProps = {
    idx: number;
};

export const OtherVideoPlayerWrapper = styled.div<VideoPlayerWrapperProps>`
    ${({ idx }) => {
        return idx % 2 === 0 ? `justify-self: end;` : `justify-self: start;`;
    }}

    width: 30%;

    @media screen and (max-width: 1024px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
    }

    @media screen and (max-width: 320px) {
        width: 80%;
    }

    ${StyledImg} {
        width: 100%;
    }

    ${StyledVideo} {
        width: 100%;
    }
`;
