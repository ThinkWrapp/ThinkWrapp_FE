import { StyledButton } from './style';
import { CommonProps } from '@/styles';

export type ButtonProps = {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    as?: 'a' | 'button';
    href?: string;
    onClick?: () => void;
} & CommonProps;

export default function Button({ children, as, href, size, ...props }: ButtonProps) {
    return (
        <StyledButton as={as} href={href} $size={size} {...props}>
            {children}
        </StyledButton>
    );
}
