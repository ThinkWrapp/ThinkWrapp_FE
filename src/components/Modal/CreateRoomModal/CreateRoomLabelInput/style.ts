import { ModalInput, ModalLabel } from '@/styles/mixin/modalInputLabel';
import styled from 'styled-components';

export const CreateRoomModalContainer = styled.div`
    position: relative;
    width: 35rem;

    p {
        margin-top: 0.5rem;
    }

    & + & {
        margin-top: 3.5rem;
    }
`;

export const Input = styled.input`
    ${ModalInput}
`;

export const Label = styled.label`
    ${ModalLabel}
`;
