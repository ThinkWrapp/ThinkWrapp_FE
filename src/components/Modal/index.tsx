import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { ModalContainer, ModalWrapper, Dimmed } from './style';
import { RootState } from '@/redux/reducers';

type ModalProps = {
    children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
    const modalRoot = document.getElementById('modal-root') as HTMLDivElement;
    const modalState = useSelector((state: RootState) => state.modal.modalState);
    const isLoginAuthState = useSelector((state: RootState) => state.modal.authState) === '로그인';

    return ReactDOM.createPortal(
        <>
            {modalState && (
                <>
                    <Dimmed />
                    <ModalContainer $authstate={isLoginAuthState}>
                        <ModalWrapper>{children}</ModalWrapper>
                    </ModalContainer>
                </>
            )}
        </>,
        modalRoot,
    );
}
