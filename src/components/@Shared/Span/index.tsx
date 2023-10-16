import { CommonProps } from '@/styles';
import { StyledSpan } from './style';

export type SpanProps = {
    children: React.ReactNode;
} & CommonProps;

export default function Span({ children, ...props }: SpanProps) {
    return <StyledSpan {...props}>{children}</StyledSpan>;
}
