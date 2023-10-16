import styled from 'styled-components';

export const LabelInputContainer = styled.div`
    position: relative;
    width: 35rem;

    & + & {
        margin-top: 3.5rem;
    }
`;

export const Input = styled.input`
    position: relative;
    width: 100%;
    padding: 1rem 0 0.65rem;
    background-color: transparent;
    border-bottom: 2px solid #999;
    color: #fff;
    letter-spacing: 0.05em;
    font-size: 1.1em;
    transition: 0.5s;

    &:focus ~ label span,
    &:valid ~ label span {
        color: #0f0;
        text-shadow:
            0 0 0.5rem #0f0,
            0 0 1.5rem #0f0,
            0 0 3rem #0f0;
        transform: translateY(-3rem);
    }

    &:focus,
    &:valid {
        border-bottom: 2px solid #fff;
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 0;
    padding: 1rem 0;
    pointer-events: none;
    color: #666;
    user-select: none;

    span {
        position: relative;
        display: inline-flex;
        flex-direction: row;
        font-size: 1.1em;
        letter-spacing: 0.05em;
        transition: 0.25s cubic-bezier(0.5, 1, 0.5, 1.5);
    }
`;
