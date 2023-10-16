import { DivideLogInTypeContainer } from './style';
import Span from '@/components/@Shared/Span';

type DivideLogInTypeProps = {
    authState: string;
};

export default function DivideLogInType({ authState }: DivideLogInTypeProps) {
    return (
        <DivideLogInTypeContainer>
            <hr />
            <Span $fs="sm" $fw="thin" $fc="light">
                {authState === '로그인' ? 'or email login' : 'or email register'}
            </Span>
            <hr />
        </DivideLogInTypeContainer>
    );
}
