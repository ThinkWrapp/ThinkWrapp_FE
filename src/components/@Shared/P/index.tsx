import { StyledP } from './style';
import { CommonProps } from '@/styles';

export type PProps = {
    children: React.ReactNode;
} & CommonProps;

export default function P({ children, ...props }: PProps) {
    return <StyledP {...props}>{children}</StyledP>;
}
