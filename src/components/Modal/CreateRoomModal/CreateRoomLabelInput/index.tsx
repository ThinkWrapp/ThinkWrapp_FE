import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CreateRoomModalContainer, Input, Label } from './style';
import { CreateRoomSchema } from '@/types/room';

type CreateRoomLabelInputProps = {
    id: 'roomName' | 'roomLimitPeople' | 'password';
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    labelText: string;
    register: UseFormRegister<CreateRoomSchema>;
    required?: boolean;
    errors: FieldErrors<CreateRoomSchema>;
};

export default function CreateRoomLabelInput({
    labelText,
    id,
    type,
    register,
    required,
    errors,
}: CreateRoomLabelInputProps) {
    const splitLabelText = labelText.split('').map((char, idx) => (
        <span key={idx} style={{ transitionDelay: idx * 30 + 'ms', filter: `hue-rotate(${idx * 60}deg)` }}>
            {char}
        </span>
    ));

    return (
        <CreateRoomModalContainer>
            <Input id={id} type={type} required {...register(id, { required })} $errors={errors} />
            <Label htmlFor={id}>{splitLabelText}</Label>
        </CreateRoomModalContainer>
    );
}
