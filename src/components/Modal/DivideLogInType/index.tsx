import { DivideLogInTypeContainer } from './style';
import Span from '@/components/@Shared/Span';

export default function DivideLogInType() {
    return (
        <DivideLogInTypeContainer>
            <hr />
            <Span $fs="sm" $fw="thin" $fc="light">
                or email login
            </Span>
            <hr />
        </DivideLogInTypeContainer>
    );
}
