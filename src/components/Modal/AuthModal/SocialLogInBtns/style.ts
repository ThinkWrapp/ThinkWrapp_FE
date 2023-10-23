import styled from 'styled-components';

export const SocialLogInBtnsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    a {
        border: 1px solid ${({ theme }) => theme.bg.secondary};
        border-radius: 100%;
        margin: 0.6rem;
    }

    a:hover {
        background-color: ${({ theme }) => theme.bg.light};
        transition: all 0.2s ease-in-out;
    }
`;
