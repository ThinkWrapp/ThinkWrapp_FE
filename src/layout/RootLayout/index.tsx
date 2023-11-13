import { Outlet } from 'react-router-dom';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import LoginModal from '@/components/Modal/AuthModal/LoginModal';
import RegisterModal from '@/components/Modal/AuthModal/RegisterModal';
import Interface from '@/components/Interface';
import CreateRoomModal from '@/components/Modal/CreateRoomModal';
import { CREATE_ROOM } from '@/constants/room';
import { CHANGE_USERNAME, LOGIN, REGISTER } from '@/constants/modal';
import ChangeUserNameModal from '@/components/Modal/ChangeUsername';

export default function RootLayOut() {
    const authState = useSelector((state: RootState) => state.modal.modalValueState);

    const modalAction = () => {
        switch (authState) {
            case LOGIN:
                return <LoginModal />;
            case REGISTER:
                return <RegisterModal />;
            case CREATE_ROOM:
                return <CreateRoomModal />;
            case CHANGE_USERNAME:
                return <ChangeUserNameModal />;
            default:
                return null;
        }
    };

    return (
        <>
            {modalAction()}
            <Outlet />
            <Interface />
        </>
    );
}
