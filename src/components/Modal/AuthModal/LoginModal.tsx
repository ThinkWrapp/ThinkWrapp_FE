import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { toast } from 'sonner';
import { login } from '@/api/auth';
import P from '@/components/@Shared/P';
import { userLoginChecking } from '@/redux/actions/userAction';
import { changeAuthState, closeModal, openModal } from '@/redux/actions/modalAction';
import { userStorage } from '@/utils/userStorage';
import Modal from '..';
import Button from '@/components/@Shared/Button';
import SocialLogInBtns from '../SocialLogInBtns';
import AuthLabelInput from '../AuthLabelInput';
import { LoginSchema, RegisterSchema } from '@/types/auth';
import DivideLogInType from '../DivideLogInType';
import { loginSchema } from '@/schemas/auth';
import { AUTH, LOGIN, REGISTER } from '@/constants/auth';
import { AuthFooter, AuthFormContainer, AuthHeader, HasAccount, SocialLogin } from './style';

export default function LoginModal() {
    const authState = useSelector((state: RootState) => state.modal.authState);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<LoginSchema>({
        mode: 'onChange',
        resolver: zodResolver(loginSchema),
    });

    const { mutate: Login } = useMutation(login, {
        onSuccess: ({ message, access_token }) => {
            toast.success(message);
            userStorage.set(access_token);
            dispatch(userLoginChecking(true));
        },
        onError: () => {
            toast.error(AUTH.login.failMessage);
        },
        onSettled: () => {
            dispatch(closeModal());
        },
    });

    const authStateHandler = () => {
        dispatch(closeModal());
        dispatch(changeAuthState(REGISTER));
        dispatch(openModal());
        reset();
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
        reset();
    };

    const onSubmit: SubmitHandler<LoginSchema> = (data) => {
        Login(data);
        reset();
    };

    return (
        <Modal reset={reset}>
            <AuthHeader>
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
            </AuthHeader>
            <SocialLogin>
                <P $fc="light" $fs="lg" $fw="bold">
                    ThinkWrapp에 오신것을 환영 합니다.
                </P>
                <SocialLogInBtns />
            </SocialLogin>
            <DivideLogInType authState={authState} />
            <AuthFormContainer>
                <AuthLabelInput
                    id="email"
                    type="text"
                    register={register as UseFormRegister<LoginSchema | RegisterSchema>}
                    errors={errors}
                    labelText="이메일"
                    required
                />
                <AuthLabelInput
                    id="password"
                    type="password"
                    register={register as UseFormRegister<LoginSchema | RegisterSchema>}
                    errors={errors}
                    labelText="비밀번호"
                    required
                />
            </AuthFormContainer>
            <AuthFooter>
                <HasAccount>
                    <P $fs="sm" $fc="light" $fw="thin">
                        아직 계정이 없으신가요?
                    </P>
                    <Button $fs="sm" $fc="light" $fw="bold" onClick={authStateHandler}>
                        {authState === LOGIN && REGISTER}
                    </Button>
                </HasAccount>
                <Button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    $bg="point"
                    $fc="light"
                    $size="md"
                >
                    {authState}
                </Button>
            </AuthFooter>
        </Modal>
    );
}