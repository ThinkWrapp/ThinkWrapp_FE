import styled from 'styled-components';

export const ChangeUsernameModalHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0rem 1.5rem 0.8rem;
`;

export const ChangeUsernameButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    gap: 1rem;
`;

export const CurrentUsername = styled.div`
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.fc.primary};
`;

export const ChangeUsernameModalForm = styled.form`
    padding: 2rem 1.5rem;
`;
