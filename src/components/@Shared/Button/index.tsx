import { StyledButton } from './style';
import { CommonProps } from '@/styles';

export type ButtonProps = {
    children: React.ReactNode;
    as?: 'a' | 'button';
    href?: string;
    onClick?: () => void;
} & CommonProps;

export default function Button({ children, as, href, ...props }: ButtonProps) {
    return (
        <StyledButton as={as} href={href} {...props}>
            {children}
        </StyledButton>
    );
}
