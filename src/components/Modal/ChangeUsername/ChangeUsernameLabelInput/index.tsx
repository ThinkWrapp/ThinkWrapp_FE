import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ChangeUsernameContainer, Input, Label } from './style';
import { ChangeUsernameSchema } from '@/types/auth';

type ChangeUsernameInputProps = {
    id: 'username';
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    labelText: string;
    register: UseFormRegister<ChangeUsernameSchema>;
    required?: boolean;
    errors: FieldErrors<ChangeUsernameSchema>;
};

export default function ChangeUsernameInput({
    labelText,
    id,
    type,
    register,
    required,
    errors,
}: ChangeUsernameInputProps) {
    const splitLabelText = labelText.split('').map((char, idx) => (
        <span key={idx} style={{ transitionDelay: idx * 30 + 'ms', filter: `hue-rotate(${idx * 60}deg)` }}>
            {char}
        </span>
    ));

    return (
        <ChangeUsernameContainer>
            <Input id={id} type={type} required {...register(id, { required })} $errors={errors} />
            <Label htmlFor={id}>{splitLabelText}</Label>
        </ChangeUsernameContainer>
    );
}
