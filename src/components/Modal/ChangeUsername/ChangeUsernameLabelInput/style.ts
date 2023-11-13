import styled from 'styled-components';
import { ModalInput, ModalLabel } from '@/styles/mixin/modalInputLabel';
import { FieldErrors } from 'react-hook-form';
import { ChangeUsernameSchema } from '@/types/auth';

export const ChangeUsernameContainer = styled.div`
    position: relative;
    width: 35rem;

    p {
        margin-top: 0.5rem;
    }

    & + & {
        margin-top: 3.5rem;
    }
`;

type ChangeUsernameModalProps = {
    $errors: FieldErrors<ChangeUsernameSchema>;
    id: 'username';
};

export const Input = styled.input<ChangeUsernameModalProps>`
    ${ModalInput}
    border-color: ${({ theme, $errors, id }) => $errors[id] && theme.bg.danger} !important;
`;

export const Label = styled.label`
    ${ModalLabel}
`;
