import { ModalInput, ModalLabel } from '@/styles/mixin/modalInputLabel';
import { CreateRoomSchema } from '@/types/room';
import { FieldErrors } from 'react-hook-form';
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

type CreateRoomModalProps = {
    $errors: FieldErrors<CreateRoomSchema>;
    id: 'roomName' | 'roomLimitPeople' | 'password';
};

export const Input = styled.input<CreateRoomModalProps>`
    ${ModalInput}
    border-color: ${({ theme, $errors, id }) => $errors[id] && theme.bg.danger} !important;
`;

export const Label = styled.label`
    ${ModalLabel}
`;
