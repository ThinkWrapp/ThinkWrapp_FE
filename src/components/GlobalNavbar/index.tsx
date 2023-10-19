import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { RootState } from '@/redux/reducers';
import { logout } from '@/api/auth';
import Button from '../@Shared/Button';
import { openModal } from '@/redux/actions/modalAction';
import { userLoginChecking } from '@/redux/actions/userAction';
import { StyledLink } from '../@Shared/Link/style';
import { GlobalNavbarContainer, NavigationLi, NavigationToggleBtn, NavigationUl } from './style';

export default function GlobalNavbar() {
    const [toggle, setToggle] = useState(false);
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
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
        dispatch(openModal());
    };

    const logoutHandler = () => {
        Logout();
        dispatch(userLoginChecking(false));
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
