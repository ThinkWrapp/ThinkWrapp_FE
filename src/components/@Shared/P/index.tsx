import { StyledP } from './style';
import { CommonProps } from '@/styles';

export type PProps = CommonProps & {
    children: React.ReactNode;
};

export default function P({ children, ...props }: PProps) {
    return <StyledP {...props}>{children}</StyledP>;
}
