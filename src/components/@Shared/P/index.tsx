import { StyledP } from './style';

export type PProps = {
    children: React.ReactNode;
    fw?: 'thin' | 'normal' | 'bold';
    fs?: 'sm' | 'md' | 'lg';
    fc?: 'white' | 'black';
};

export default function P({ children }: PProps) {
    return <StyledP>{children}</StyledP>;
}
