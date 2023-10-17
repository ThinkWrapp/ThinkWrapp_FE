import GlobalNavbar from '@/components/GlobalNavbar';
import LoginModal from '@/components/Modal/AuthModal/LoginModal';
import RegisterModal from '@/components/Modal/AuthModal/RegisterModal';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function RootLayOut() {
    const authState = useSelector((state: RootState) => state.modal.authState);

    return (
        <>
            <GlobalNavbar />
            {authState === '로그인' ? <LoginModal /> : <RegisterModal />}
            <Outlet />
        </>
    );
}
