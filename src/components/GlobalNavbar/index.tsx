import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/actions/modalAction';
import { GlobalNavbarContainer, NavigationLi, NavigationToggleBtn, NavigationUl } from './style';
import Button from '../@Shared/Button';
import { StyledLink } from '../@Shared/Link/style';

export default function GlobalNavbar() {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const toggleHandler = () => {
        setToggle((prev) => !prev);
    };

    const openModalHandler = () => {
        dispatch(openModal());
    };

    return (
        <GlobalNavbarContainer>
            <NavigationUl $toggle={toggle}>
                <NavigationLi>
                    <StyledLink to="/contact" $fw="bold">
                        Contact
                    </StyledLink>
                </NavigationLi>
                <NavigationLi>
                    <Button $fw="bold" onClick={openModalHandler}>
                        회원가입/로그인
                    </Button>
                </NavigationLi>
                <NavigationToggleBtn onClick={toggleHandler} />
            </NavigationUl>
        </GlobalNavbarContainer>
    );
}
