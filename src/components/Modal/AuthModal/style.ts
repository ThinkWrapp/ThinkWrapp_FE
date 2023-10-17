import styled from 'styled-components';

export const AuthHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SocialLogin = styled.div`
    position: relative;
    margin-top: 1.6rem;
`;

export const AuthFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1.6rem 0.8rem;
`;

export const HasAccount = styled.div`
    display: flex;
    align-items: center;

    p + button {
        margin-left: 0.5rem;
    }
`;

export const AuthFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 3.2rem 0 0.8rem;
`;
