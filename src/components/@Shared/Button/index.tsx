import { StyledButton } from './style';

export type ButtonProps = {
    children: React.ReactNode;
    as?: 'a' | 'button';
    href?: string;
    fw?: 'thin' | 'normal' | 'bold';
    fs?: 'sm' | 'md' | 'lg';
    fc?: 'white' | 'black';
};

export default function Button({ children, as, href, ...props }: ButtonProps) {
    return (
        <StyledButton as={as} href={href} {...props}>
            {children}
        </StyledButton>
    );
}
