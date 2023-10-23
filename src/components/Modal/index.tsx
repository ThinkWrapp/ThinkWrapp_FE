import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormReset } from 'react-hook-form';
import { RootState } from '@/redux/reducers';
import { closeModal } from '@/redux/actions/modalAction';
import { LOGIN } from '@/constants/auth';
import { LoginSchema, RegisterSchema } from '@/types/auth';
import { ModalContainer, ModalWrapper, Dimmed } from './style';

type ModalProps = {
    children: React.ReactNode;
    reset?: UseFormReset<RegisterSchema> | UseFormReset<LoginSchema>;
};

export default function Modal({ children, reset }: ModalProps) {
    const modalRoot = document.getElementById('modal-root') as HTMLDivElement;
    const modalState = useSelector((state: RootState) => state.modal.modalState);
    const isLoginAuthState = useSelector((state: RootState) => state.modal.modalValueState) === LOGIN;
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(closeModal());
        if (reset) {
            reset();
        }
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
