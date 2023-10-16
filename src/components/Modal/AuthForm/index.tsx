import { useSelector, useDispatch } from 'react-redux';
import { closeModal, changeAuthState } from '@/redux/actions/modalAction';
import Modal from '..';
import P from '@/components/@Shared/P';
import Button from '@/components/@Shared/Button';
import AuthLabelInput from '../AuthLabelInput';
import SocialLogInBtns from '../SocialLogInBtns';
import DivideLogInType from '../DivideLogInType';
import { RootState } from '@/redux/reducers';
import { HasAccount, LoginFooter, LoginHeader, SocialLogin, AuthFormContainer } from './style';

export default function AuthForm() {
    const authState = useSelector((state: RootState) => state.modal.authState);
    const dispatch = useDispatch();

    const authStateHandler = () => {
        dispatch(changeAuthState(authState === '로그인' ? '회원가입' : '로그인'));
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
    };

    const loginInputs = (
        <>
            <AuthLabelInput labelText="이메일" />
            <AuthLabelInput labelText="비밀번호" />
        </>
    );

    const registerInputs = (
        <>
            <AuthLabelInput labelText="닉네임" />
            <AuthLabelInput labelText="이메일" />
            <AuthLabelInput labelText="비밀번호확인" />
            <AuthLabelInput labelText="비밀번호" />
        </>
    );

    return (
        <Modal>
            <LoginHeader>
                <P $fc="light" $fw="bold">
                    {authState}
                </P>
                <Button $fc="light" onClick={closeModalHandler}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width={22}
                        height={22}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Button>
            </LoginHeader>
            <SocialLogin>
                <P $fc="light" $fs="lg" $fw="bold">
                    ThinkWrapp에 오신것을 환영 합니다.
                </P>
                <SocialLogInBtns />
            </SocialLogin>
            <DivideLogInType />
            <AuthFormContainer>{authState === '로그인' ? loginInputs : registerInputs}</AuthFormContainer>
            <LoginFooter>
                <HasAccount>
                    <P $fs="sm" $fc="light" $fw="thin">
                        {authState === '로그인' ? '아직 계정이 없으신가요?' : '이미 계정이 있으신가요?'}
                    </P>
                    <Button $fs="sm" $fc="light" $fw="bold" onClick={authStateHandler}>
                        {authState === '로그인' ? '회원가입' : '로그인'}
                    </Button>
                </HasAccount>
                <Button $fc="light">{authState}</Button>
            </LoginFooter>
        </Modal>
    );
}
