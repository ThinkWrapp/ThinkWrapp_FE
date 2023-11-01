import { StyledInput, StyledLabel } from './style';

type LabelInputProps = {
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    labelText?: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabelInput = ({ id, type, labelText, onChange, ...props }: LabelInputProps) => {
    return (
        <>
            {labelText && <StyledLabel htmlFor={id}>{labelText}</StyledLabel>}
            <StyledInput id={id} type={type} onChange={onChange} {...props} />
        </>
    );
};

export default LabelInput;
