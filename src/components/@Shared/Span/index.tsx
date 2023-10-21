import { CommonProps } from '@/styles';
import { StyledSpan } from './style';

export type SpanProps = CommonProps & {
    children: React.ReactNode;
};

export default function Span({ children, ...props }: SpanProps) {
    return <StyledSpan {...props}>{children}</StyledSpan>;
}
