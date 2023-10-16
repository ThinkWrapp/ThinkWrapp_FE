import GlobalNavbar from '@/components/GlobalNavbar';
import AuthForm from '@/components/Modal/AuthForm';
import { Outlet } from 'react-router-dom';

export default function RootLayOut() {
    return (
        <>
            <GlobalNavbar />
            <AuthForm />
            <Outlet />
        </>
    );
}
