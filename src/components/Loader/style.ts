import styled from 'styled-components';

type LoaderStyleProps = {
    $loaded?: boolean;
    $progress?: number;
};

export const LoaderContainer = styled.div`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    user-select: none;
    z-index: 100;
`;

export const LoaderWrapper = styled.div<LoaderStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #000;
    transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);
    ${({ $loaded }) => ($loaded ? 'opacity: 0;' : 'opacity: 1;')}
`;

export const LoaderTitle = styled.h1`
    font-size: 10rem;
    font-weight: 700;
    color: #ffde22;
`;

export const ProgressBarContainer = styled.div`
    position: relative;
    width: 50%;
    height: 3rem;
`;

export const ProgressBar = styled.div<LoaderStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $progress }) => $progress}%;
    height: 100%;
    background-color: #ffde22;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;
