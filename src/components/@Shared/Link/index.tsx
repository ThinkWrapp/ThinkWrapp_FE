import { StyledLink } from './style';
import { CommonProps } from '@/styles';

export type LinkProps = {
    children: React.ReactNode;
} & CommonProps;

export default function Link({ children, ...props }: LinkProps) {
    return <StyledLink {...props}>{children}</StyledLink>;
}
