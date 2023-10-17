import { StyledLink } from './style';
import { CommonProps } from '@/styles';
import { LinkProps } from 'react-router-dom';

export type StyleLinkProps = LinkProps &
    CommonProps & {
        children: React.ReactNode;
    };

export default function Link({ children, ...props }: StyleLinkProps) {
    return <StyledLink {...props}>{children}</StyledLink>;
}
