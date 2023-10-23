import { Outlet } from 'react-router-dom';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import GlobalNavbar from '@/components/GlobalNavbar';
import LoginModal from '@/components/Modal/AuthModal/LoginModal';
import RegisterModal from '@/components/Modal/AuthModal/RegisterModal';
import Interface from '@/components/Interface';
import CreateRoomModal from '@/components/Modal/CreateRoomModal';
import { CREATE_ROOM } from '@/constants/room';
import { LOGIN, REGISTER } from '@/constants/auth';

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
            default:
                return null;
        }
    };

    return (
        <>
            <GlobalNavbar />
            {modalAction()}
            <Outlet />
            <Interface />
        </>
    );
}
