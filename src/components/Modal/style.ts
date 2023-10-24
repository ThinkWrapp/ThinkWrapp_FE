import styled from 'styled-components';

type ModalContainerProps = {
    $authstate: boolean;
};

export const Dimmed = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div<ModalContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 30rem;
    background-image: ${({ $authstate }) => {
        return $authstate
            ? `repeating-conic-gradient(
         from var(--a),
         #ffe770 0%,
         #ffe770 5%,
         transparent 5%,
         transparent 40%,
         #ffe770 50%
     )`
            : `repeating-conic-gradient(
         from var(--a),
         #ff2770 0%,
         #ff2770 5%,
         transparent 5%,
         transparent 40%,
         #ff2770 50%
     )`;
    }};
    animation:
        modal 4s linear infinite,
        openModal 0.3s ease-in-out;
    border-radius: 0.2rem;
    backdrop-filter: blur(10px);

    @property --a {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes modal {
        0% {
            --a: 0deg;
        }
        100% {
            --a: 360deg;
        }
    }

    @keyframes openModal {
        0% {
            transform-origin: 0%;
            scale: 0;
        }
        100% {
            transform-origin: 0%;
            scale: 1;
        }
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: repeating-conic-gradient(
            from var(--a),
            #45f3ff 0%,
            #45f3ff 5%,
            transparent 5%,
            transparent 40%,
            #45f3ff 50%
        );
        animation: modal 4s linear infinite;
        animation-delay: -1s;
        border-radius: 0.2rem;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0.8rem;
        background-color: #2d2d39;
        border-radius: 0.15rem;
        border: 8px solid #25252b;
    }
`;

export const ModalWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3rem 3.5rem;
    z-index: 10;
`;

export const ModalTitle = styled.h2`
    color: ${({ theme }) => theme.fc.light};
    font-size: ${({ theme }) => theme.fs.md};
    font-weight: ${({ theme }) => theme.fw.bold};
`;
