import { StyledLink } from './style';
import { CommonProps } from '@/styles';

export type StyleLinkProps = CommonProps & {
    children: React.ReactNode;
    to: string;
};

export default function Link({ children, to, ...props }: StyleLinkProps) {
    return (
        <StyledLink to={to} {...props}>
            {children}
        </StyledLink>
    );
}
