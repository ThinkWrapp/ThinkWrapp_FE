import { Input, Label, LabelInputContainer } from './style';

type AuthLabelInputProps = {
    labelText: string;
};

export default function AuthLabelInput({ labelText }: AuthLabelInputProps) {
    const splitLabelText = labelText.split('').map((char, idx) => (
        <span key={idx} style={{ transitionDelay: idx * 30 + 'ms', filter: `hue-rotate(${idx * 60}deg)` }}>
            {char}
        </span>
    ));
    return (
        <LabelInputContainer>
            <Input required />
            <Label>{splitLabelText}</Label>
        </LabelInputContainer>
    );
}
