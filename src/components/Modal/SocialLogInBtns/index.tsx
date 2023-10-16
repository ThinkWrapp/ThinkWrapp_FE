import Button from '@/components/@Shared/Button';
import { SocialLogInBtnsContainer } from './style';
import { GOOGLE_AUTH_URL } from '@/constants/route';

export default function SocialLogInBtns() {
    return (
        <SocialLogInBtnsContainer>
            <Button as="a" href={GOOGLE_AUTH_URL}>
                <img width="50rem" height="50rem" src="/images/google.svg" alt="구글" />
            </Button>
        </SocialLogInBtnsContainer>
    );
}
