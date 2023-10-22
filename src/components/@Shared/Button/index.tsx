import { StyledButton } from './style';
import { CommonProps } from '@/styles';

export type ButtonProps = CommonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        children: React.ReactNode;
        $size?: 'sm' | 'md' | 'lg';
        as?: 'a' | 'button';
        href?: string;
    };

export default function Button({ children, as, href, type = 'button', $size, ...props }: ButtonProps) {
    return (
        <StyledButton type={as ? undefined : type} as={as} href={href} $size={$size} {...props}>
            {children}
        </StyledButton>
    );
}
