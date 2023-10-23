import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import P from '@/components/@Shared/P';
import { LoginSchema, RegisterSchema } from '@/types/auth';
import { Input, Label, LabelInputContainer } from './style';

type AuthLabelInputProps = {
    labelText: string;
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    register: UseFormRegister<LoginSchema | RegisterSchema>;
    id: 'email' | 'password' | 'username' | 'confirmPassword';
    required?: boolean;
    errors: FieldErrors<FieldValues>;
};

export default function AuthLabelInput({ labelText, type, register, id, required, errors }: AuthLabelInputProps) {
    const splitLabelText = labelText.split('').map((char, idx) => (
        <span key={idx} style={{ transitionDelay: idx * 30 + 'ms', filter: `hue-rotate(${idx * 60}deg)` }}>
            {char}
        </span>
    ));
    return (
        <LabelInputContainer>
            <Input id={id} type={type} required {...register(id, { required })} />
            <Label htmlFor={id}>{splitLabelText}</Label>
            {errors[id] && <P $fc="danger" $fs="sm" $fw="bold">{`${errors[id]?.message}`}</P>}
        </LabelInputContainer>
    );
}
