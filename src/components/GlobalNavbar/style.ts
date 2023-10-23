import styled from 'styled-components';

type NavigationUlProps = {
    $toggle: boolean;
};

export const GlobalNavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 3rem;
    width: 100%;
    z-index: 100000000;
`;

export const NavigationToggleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 6rem;
    height: 6rem;
    background-color: ${({ theme }) => theme.bg.light};
    border-radius: 100%;
    transition: 0.26s;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        width: 3rem;
        height: 0.3rem;
        border-radius: 0.3rem;
        background-color: ${({ theme }) => theme.bg.dark};
        transform: translateY(-0.5rem);
        transition: 0.26s;
        transition-delay: 0.26s;
    }

    &::after {
        content: '';
        position: absolute;
        width: 3rem;
        height: 0.3rem;
        border-radius: 0.3rem;
        background-color: ${({ theme }) => theme.bg.dark};
        transform: translateY(0.5rem);
        transition: 0.26s;
        transition-delay: 0.26s;
    }
`;

export const NavigationLi = styled.li`
    transition: 0.26s;
    transform: scale(0);

    a {
        color: ${({ theme }) => theme.fc.dark};
        letter-spacing: 0.1em;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        transition: 0.26s;
    }

    a:hover {
        background-color: ${({ theme }) => theme.bg.point};
        color: ${({ theme }) => theme.fc.light};
    }

    button {
        color: #333;
        letter-spacing: 0.1em;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        transition: 0.26s;
    }

    button:hover {
        background-color: ${({ theme }) => theme.bg.point};
        color: ${({ theme }) => theme.fc.light};
    }

    @media screen and (max-width: 768px) {
        a {
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
        }
        button {
            font-size: 1.5rem;
            padding: 0.5rem 1.2rem;
        }
    }

    @media screen and (max-width: 360px) {
        a {
            font-size: 1.4rem;
            padding: 0.5rem 0.5rem;
        }
        button {
            font-size: 1.4rem;
            padding: 0.5rem 0.5rem;
        }
    }
`;

export const NavigationUl = styled.ul<NavigationUlProps>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: ${({ $toggle }) => ($toggle ? '42vw' : '6rem')};
    min-width: 6rem;
    height: 6rem;
    background-color: ${({ theme }) => theme.bg.light};
    border-radius: 6rem;
    transition: 0.26s;
    transition-delay: 0.26s;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 768px) {
        width: ${({ $toggle }) => ($toggle ? '80vw' : '6rem')};
    }

    ${({ $toggle, theme }) =>
        $toggle &&
        `
        min-width: 25rem;

        ${NavigationToggleBtn} {
            background-color: ${theme.bg.point};
            transition-delay: 0.26s;
            transform: translateY(6rem);
            width: 3rem;
            height: 3rem;
            box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.05)
        }

        ${NavigationToggleBtn}::before {
            transition-delay: 0s;
            background-color: ${theme.bg.light};
            transform: translateY(0) rotate(45deg) scale(0.6);
        }

        ${NavigationToggleBtn}::after {
            transition-delay: 0s;
            background-color: ${theme.bg.light};
            transform: translateY(0) rotate(315deg) scale(0.6);
        }

        ${NavigationLi} {
            display: flex;
            transition-delay: 0.36s;
            transform: scale(1);
        }
    `}
`;
