import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { openModal } from '@/redux/actions/modalAction';
import { resetAvatar, resetUserName } from '@/redux/actions/avatarPersistAction';
import { RootState } from '@/redux/reducers';
import { userLoginChecking, userName } from '@/redux/actions/userAction';
import { logout } from '@/api/auth';
import { CHANGE_USERNAME, LOGIN, REGISTER } from '@/constants/modal';
import Button from '../@Shared/Button';
import { GlobalNavbarContainer, NavigationLi, NavigationToggleBtn, NavigationUl } from './style';

export default function Navbar() {
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

    const openModalHandler = (value: string) => {
        dispatch(openModal(value));
    };

    const logoutHandler = () => {
        Logout();
        dispatch(resetAvatar());
        dispatch(userLoginChecking(false));
        dispatch(userName(undefined));
        dispatch(resetUserName());
    };

    return (
        <GlobalNavbarContainer>
            <NavigationUl $toggle={toggle}>
                {!isAuth ? (
                    <>
                        <NavigationLi>
                            <Button $fw="bold" onClick={() => openModalHandler(REGISTER)}>
                                회원가입
                            </Button>
                        </NavigationLi>
                        <NavigationLi>
                            <Button $fw="bold" onClick={() => openModalHandler(LOGIN)}>
                                로그인
                            </Button>
                        </NavigationLi>
                    </>
                ) : (
                    <>
                        <NavigationLi>
                            <Button $fw="bold" onClick={() => openModalHandler(CHANGE_USERNAME)}>
                                닉네임변경
                            </Button>
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
