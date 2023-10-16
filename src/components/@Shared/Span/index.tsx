import { StyledSpan } from './style';

export type SpanProps = {
    children: React.ReactNode;
    fw?: 'thin' | 'normal' | 'bold';
    fs?: 'sm' | 'md' | 'lg';
    fc?: 'white' | 'black';
};

export default function Span({ children }: SpanProps) {
    return <StyledSpan>{children}</StyledSpan>;
}
