import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { logout } from '@/api/auth';
import Button from '../@Shared/Button';
import { openModal } from '@/redux/actions/modalAction';
import { StyledLink } from '../@Shared/Link/style';
import { GlobalNavbarContainer, NavigationLi, NavigationToggleBtn, NavigationUl } from './style';
import { resetAvatar } from '@/redux/actions/avatarPersistAction';
import { LOGIN } from '@/constants/auth';
import useIsAuth from '@/hooks/useIsAuth';

export default function GlobalNavbar() {
    const [toggle, setToggle] = useState(false);
    const isAuth = useIsAuth((state) => state.isAuth);
    const setIsAuth = useIsAuth((state) => state.setIsAuth);
    const setGetEmail = useIsAuth((state) => state.setGetEmail);
    const dispatch = useDispatch();

    const { mutate: Logout } = useMutation(logout, {
        onSuccess: (response) => {
            toast.success(response.message);
        },
    });

    const toggleHandler = () => {
        setToggle((prev) => !prev);
    };

    const openModalHandler = () => {
        dispatch(openModal(LOGIN));
    };

    const logoutHandler = () => {
        Logout();
        dispatch(resetAvatar());
        setIsAuth(false);
        setGetEmail('');
    };

    return (
        <GlobalNavbarContainer>
            <NavigationUl $toggle={toggle}>
                <NavigationLi>
                    <StyledLink to="/contact" $fw="bold">
                        Contact
                    </StyledLink>
                </NavigationLi>
                {!isAuth ? (
                    <NavigationLi>
                        <Button $fw="bold" onClick={openModalHandler}>
                            회원가입/로그인
                        </Button>
                    </NavigationLi>
                ) : (
                    <>
                        <NavigationLi>
                            <Button $fw="bold">프로필변경</Button>
                        </NavigationLi>
                        <NavigationLi>
                            <Button $fw="bold" onClick={logoutHandler}>
                                로그아웃
                            </Button>
                        </NavigationLi>
                    </>
                )}
                <NavigationToggleBtn onClick={toggleHandler} />
            </NavigationUl>
        </GlobalNavbarContainer>
    );
}
