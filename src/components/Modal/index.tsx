import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer, ModalWrapper, Dimmed } from './style';
import { RootState } from '@/redux/reducers';
import { closeModal } from '@/redux/actions/modalAction';
import { UseFormReset } from 'react-hook-form';
import { LoginSchema, RegisterSchema } from '@/types/auth';

type ModalProps = {
    children: React.ReactNode;
    reset: UseFormReset<RegisterSchema> | UseFormReset<LoginSchema>;
};

export default function Modal({ children, reset }: ModalProps) {
    const modalRoot = document.getElementById('modal-root') as HTMLDivElement;
    const modalState = useSelector((state: RootState) => state.modal.modalState);
    const isLoginAuthState = useSelector((state: RootState) => state.modal.authState) === '로그인';
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeModal());
        reset();
    };

    return ReactDOM.createPortal(
        <>
            {modalState && (
                <>
                    <Dimmed onClick={closeModalHandler} />
                    <ModalContainer $authstate={isLoginAuthState}>
                        <ModalWrapper>{children}</ModalWrapper>
                    </ModalContainer>
                </>
            )}
        </>,
        modalRoot,
    );
}
