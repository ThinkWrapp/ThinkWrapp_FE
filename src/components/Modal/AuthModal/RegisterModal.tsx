import { useDispatch, useSelector } from 'react-redux';
import Modal from '..';
import { RootState } from '@/redux/reducers';
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/auth';
import { LoginSchema, RegisterSchema } from '@/types/auth';
import { changeAuthState, closeModal, openModal } from '@/redux/actions/modalAction';
import { AuthFooter, AuthFormContainer, AuthHeader, HasAccount, SocialLogin } from './style';
import P from '@/components/@Shared/P';
import Button from '@/components/@Shared/Button';
import SocialLogInBtns from './SocialLogInBtns';
import DivideLogInType from './DivideLogInType';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { register as userRegister } from '@/api/auth';
import { AUTH, LOGIN, REGISTER } from '@/constants/auth';
import AuthLabelInput from './AuthLabelInput';
import { ModalTitle } from '../style';

export default function RegisterModal() {
    const authState = useSelector((state: RootState) => state.modal.modalValueState);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterSchema>({
        mode: 'onChange',
        resolver: zodResolver(registerSchema),
    });

    const { mutate: Register } = useMutation(userRegister, {
        onSuccess: (response) => {
            toast.success(response.message);
            dispatch(changeAuthState(LOGIN));
        },
        onError: () => {
            toast.error(AUTH.register.failMessage);
            dispatch(closeModal());
        },
    });

    const authStateHandler = () => {
        dispatch(closeModal());
        dispatch(changeAuthState(LOGIN));
        dispatch(openModal(LOGIN));
        reset();
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
        reset();
    };

    const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
        Register(data);
        reset();
    };

    return (
        <Modal reset={reset}>
            <AuthHeader>
                <ModalTitle>{authState}</ModalTitle>
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
            <DivideLogInType authState={authState as string} />
            <AuthFormContainer>
                <AuthLabelInput
                    id="username"
                    type="text"
                    register={register as UseFormRegister<RegisterSchema | LoginSchema>}
                    errors={errors}
                    required
                    labelText="닉네임"
                />
                <AuthLabelInput
                    id="email"
                    type="text"
                    register={register as UseFormRegister<RegisterSchema | LoginSchema>}
                    errors={errors}
                    required
                    labelText="이메일"
                />
                <AuthLabelInput
                    id="password"
                    type="password"
                    register={register as UseFormRegister<RegisterSchema | LoginSchema>}
                    errors={errors}
                    required
                    labelText="비밀번호확인"
                />
                <AuthLabelInput
                    id="confirmPassword"
                    type="password"
                    register={register as UseFormRegister<RegisterSchema | LoginSchema>}
                    errors={errors}
                    required
                    labelText="비밀번호"
                />
            </AuthFormContainer>
            <AuthFooter>
                <HasAccount>
                    <P $fs="sm" $fc="light" $fw="thin">
                        이미 계정이 있으신가요?
                    </P>
                    <Button $fs="sm" $fc="light" $fw="bold" onClick={authStateHandler}>
                        {authState === REGISTER && LOGIN}
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
