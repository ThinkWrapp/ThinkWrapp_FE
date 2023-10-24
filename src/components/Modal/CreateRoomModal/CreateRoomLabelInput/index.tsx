import { UseFormRegister, FieldValues } from 'react-hook-form';
import { CreateRoomModalContainer, Input, Label } from './style';

type CreateRoomLabelInputProps = {
    id: 'roomName' | 'roomLimitPeople' | 'password';
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    labelText: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
};

export default function CreateRoomLabelInput({ labelText, id, type, register, required }: CreateRoomLabelInputProps) {
    const splitLabelText = labelText.split('').map((char, idx) => (
        <span key={idx} style={{ transitionDelay: idx * 30 + 'ms', filter: `hue-rotate(${idx * 60}deg)` }}>
            {char}
        </span>
    ));

    return (
        <CreateRoomModalContainer>
            <Input id={id} type={type} required {...register(id, { required })} />
            <Label htmlFor={id}>{splitLabelText}</Label>
        </CreateRoomModalContainer>
    );
}
