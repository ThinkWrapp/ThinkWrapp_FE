import Span from '@/components/@Shared/Span';
import { LOGIN } from '@/constants/auth';
import { DivideLogInTypeContainer } from './style';

type DivideLogInTypeProps = {
    authState: string;
};

export default function DivideLogInType({ authState }: DivideLogInTypeProps) {
    return (
        <DivideLogInTypeContainer>
            <hr />
            <Span $fs="sm" $fw="thin" $fc="light">
                {authState === LOGIN ? 'or email login' : 'or email register'}
            </Span>
            <hr />
        </DivideLogInTypeContainer>
    );
}
