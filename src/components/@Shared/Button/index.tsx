import { StyledButton } from './style';
import { CommonProps } from '@/styles';

export type ButtonProps = CommonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        children: React.ReactNode;
        $size?: 'sm' | 'md' | 'lg';
        as?: 'a' | 'button';
        href?: string;
    };

export default function Button({ children, as, href, $size, ...props }: ButtonProps) {
    return (
        <StyledButton as={as} href={href} $size={$size} {...props}>
            {children}
        </StyledButton>
    );
}
